const { Conversation } = require('./conversation');
const { CLIENT_ACTION, CONVERSATION_ACTION } = require('./types');

const conversation = new Conversation();

process.on('message', async (props) => {
  const { action, packet, order, multiCharacters } = props;

  switch (action) {
    case CONVERSATION_ACTION.DISPLAY_TEXT:
      conversation.displayText(packet);
      break;
    case CONVERSATION_ACTION.NARRATED_ACTION:
      conversation.displayAction(packet);
      break;
    case CONVERSATION_ACTION.END_INTERACTION:
      conversation.endInteraction(packet);
      break;
    case CONVERSATION_ACTION.INTERRUPT:
      const cancelResponses = conversation.interrupt(packet);

      // Use parent open connection to cancel character responses require(the server side
      if (cancelResponses) {
        process.send?.({
          action: CLIENT_ACTION.SEND_CANCEL_RESPONSES,
          data: cancelResponses,
        });
      }

      break;
    case CONVERSATION_ACTION.PLAY_AUDIO:
    case CONVERSATION_ACTION.SILENCE:
      conversation.playAudio(packet);
      break;
    case CONVERSATION_ACTION.SET_TEXT_DISPLAY_ORDER:
      if (order) {
        conversation.setDisplayOrder(order);
      }
      break;
    case CONVERSATION_ACTION.SET_MULTI_CHARACTERS:
      conversation.setMultiCharacters(multiCharacters);
      break;
  }
});

const done = () => {
  conversation.stopAudio();
  process.exit(0);
};

process.on('SIGINT', done);
process.on('SIGTERM', done);
process.on('SIGUSR2', done);
process.on('unhandledRejection', (err) => {
  conversation.stopAudio();
  console.error(err.message);
  process.exit(1);
});
