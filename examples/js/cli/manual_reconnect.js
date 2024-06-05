require('dotenv').config();

const { Client } = require('./components/client');
const { Recorder } = require('./components/recorder');
const { changeCharacter, characterInfo, listCharacters } = require('./helpers');

const split = require('split');

const DISCONNECT_TIMEOUT = 30 * 1000; // 30 seconds

const recorder = new Recorder({
  onData: async (data) => connection.sendAudio(data),
  onError: console.error,
});

const props = {
  config: {
    capabilities: {
      audio: true,
      emotions: true,
      narratedActions: true,
      silence: true,
    },
    connection: {
      autoReconnect: false,
      disconnectTimeout: DISCONNECT_TIMEOUT,
    },
  },
  onDisconnect: () => {
    if (recorder.isActive()) {
      console.log(
        'Please execute /start again if you would like to continue audio capturing.',
      );
      recorder.pause();
    }
  },
};
const build = (props) => {
  const client = new Client(props);
  const connection = client.getConnection();

  return { client, connection };
};

const open = async () => {
  await connection.open();

  console.log(
    `Connection is open and will be closed in ${
      DISCONNECT_TIMEOUT / 1000
    } seconds`,
  );
};

let sessionState;
let { client, connection } = build(props);

const run = async function () {
  console.info('Starting Client with manual reconnect.');
  console.info(`Console commands:
    |- /open - open connection.
    |- /close - close connection.
    |- /save-session-state - save session state in app memory.
    |- /restore-session-state - restore session state from app memory.
    |- /start - starts audio capturing.
    |- /end - ends audio capturing.
    |- /trigger - send trigger.
    |- /narration - send narrated action.
    |- /info - shows current character.
    |- /list-all - shows available characters (created within the scene).
    |- /character %character-id% - id of the target character (Get full list using /list-all command).
    |- c - cancel current response.
    |- <any other text> - sends text event to server.
  `);

  process.stdin.pipe(split()).on('data', async (line) => {
    const [command, ...args] = line.trim().split(' ');

    switch (command) {
      case '/start':
        if (connection.isActive()) {
          console.log('Starting. Wait...');
          await connection.sendAudioSessionStart();
          console.log('Ready to listening...');
          recorder.capture();
        } else {
          console.log('Open connection first');
        }
        break;

      case '/end':
        if (connection.isActive()) {
          recorder.pause();
          await connection.sendAudioSessionEnd();
        } else {
          console.log('Open connection first');
        }

        break;

      case '/list-all':
        listCharacters(connection);
        break;

      case '/info':
        const character = await connection.getCurrentCharacter();
        console.log(characterInfo(character));
        console.log('------------------------------');
        break;

      case '/character':
        changeCharacter(connection, args[0]);
        break;

      case 'c':
        await connection.sendCancelResponse();
        break;

      case '/trigger':
        if (args[0]) {
          await connection.sendTrigger(args[0]);
        } else {
          console.log('/trigger requires trigger id name');
        }
        break;

      case '/narration':
        if (args.length) {
          await connection.sendNarratedAction(args.join(' '));
          console.log('Narration sent');
        } else {
          console.log('/narration requires text');
        }
        break;

      case '/open':
        console.log('Opening. Wait...');
        await open();
        break;

      case '/close':
        connection.close();
        break;

      case '/save-session-state':
        if (!connection.isActive() || !client.getInteractionIsEnded()) {
          console.log('Open connection first and send at least one packet');
        } else {
          console.log('Saving. Wait...');
          sessionState = (await connection.getSessionState()).state;
          console.log(
            sessionState
              ? 'Session state is saved.'
              : 'Session state is not saved',
          );
        }
        break;

      case '/restore-session-state':
        if (connection.isActive()) {
          console.log('Close connection first');
        } else {
          if (sessionState) {
            console.log('Restoring. Wait...');
            ({ client, connection } = build({
              ...props,
              previousState: sessionState,
            }));
            await open();
            console.log('Session state is restored.');
          } else {
            console.log('Nothing to restore...');
          }
        }
        break;

      default:
        if (line) {
          await connection.sendText(line);
        }
    }
  });
};

if (!process.env.INWORLD_KEY) {
  throw new Error('INWORLD_KEY env variable is required');
}

if (!process.env.INWORLD_SECRET) {
  throw new Error('INWORLD_SECRET env variable is required');
}

if (!process.env.INWORLD_SCENE) {
  throw new Error('INWORLD_SCENE env variable is required');
}

run();

const done = () => {
  recorder.stop();
  connection.close();
  client.closeConnection();
  process.exit(0);
};

process.on('SIGINT', done);
process.on('SIGTERM', done);
process.on('SIGUSR2', done);
process.on('unhandledRejection', (err) => {
  console.error(err.message);
  done();
  process.exit(1);
});
