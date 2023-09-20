import { credentials, Metadata, ServiceError } from '@grpc/grpc-js';
import { InworldPacket as ProtoPacket } from '@proto/packets_pb';
import { WorldEngineClient } from '@proto/world-engine_grpc_pb';
import {
  AccessToken,
  CapabilitiesRequest,
  ClientRequest,
  GenerateTokenRequest,
  LoadSceneRequest,
  LoadSceneResponse,
  SessionContinuation as SessionContinuationProto,
  UserRequest,
  UserSettings,
} from '@proto/world-engine_pb';
import { promisify } from 'util';

import { KeySignature } from '../../auth/key_signature';
import { Config } from '../../common/config';
import { CLIENT_ID, SCENE_PATTERN } from '../../common/constants';
import {
  ApiKey,
  Awaitable,
  Extension,
  User,
} from '../../common/data_structures';
import { grpcOptions } from '../../common/helpers';
import { Logger } from '../../common/logger';
import { SessionContinuation } from '../../entities/continuation/session_continuation.entity';
import { SessionToken } from '../../entities/session_token.entity';

export interface LoadSceneProps<InworldPacketT> {
  name: string;
  client?: ClientRequest;
  user?: User;
  sessionToken: SessionToken;
  sessionContinuation?: SessionContinuation;
  capabilities: CapabilitiesRequest;
  extension?: Extension<InworldPacketT>;
}
export interface SessionProps {
  sessionToken: SessionToken;
  onDisconnect?: () => Awaitable<void>;
  onError?: (err: ServiceError) => Awaitable<void>;
  onMessage?: (message: ProtoPacket) => Awaitable<void>;
}

export class WorldEngineClientGrpcService<InworldPacketT> {
  private readonly config = Config.getInstance();
  private readonly address = this.config.getHost();
  private readonly ssl = this.config.getSsl();
  private readonly grpcOptions = { ...grpcOptions };
  private readonly client = new WorldEngineClient(
    this.config.getHost(),
    this.ssl ? credentials.createSsl() : credentials.createInsecure(),
    { ...grpcOptions },
  );

  public async generateSessionToken(
    apiKey: ApiKey,
    scene: string,
  ): Promise<AccessToken> {
    const metadata = new Metadata();
    const request = new GenerateTokenRequest();
    const resource = `workspaces/${SCENE_PATTERN.exec(scene)[1]}`;

    request.setKey(apiKey.key);
    request.setResourcesList([resource]);
    metadata.add(
      'authorization',
      KeySignature.getAuthorization({
        apiKey,
        host: this.config.getHost(),
      }),
    );

    return promisify(this.client.generateToken.bind(this.client))(
      request,
      metadata,
    );
  }

  private logger = Logger.getInstance();

  public async loadScene(props: LoadSceneProps<InworldPacketT>) {
    const { name, sessionToken, user, sessionContinuation, capabilities } =
      props;

    const request = new LoadSceneRequest();
    request.setName(name);
    request.setCapabilities(capabilities);

    if (user?.fullName) {
      request.setUser(new UserRequest().setName(user.fullName));
    }

    if (user?.profile?.fields?.length) {
      request.setUserSettings(
        new UserSettings().setPlayerProfile(
          new UserSettings.PlayerProfile().setFieldsList(
            user.profile.fields.map(({ id, value }) =>
              new UserSettings.PlayerProfile.PlayerField()
                .setFieldId(id)
                .setFieldValue(value),
            ),
          ),
        ),
      );
    }

    if (sessionContinuation?.previousDialog) {
      request.setSessionContinuation(
        new SessionContinuationProto().setPreviousDialog(
          sessionContinuation.previousDialog.toProto(),
        ),
      );
    }

    request.setClient(
      new ClientRequest().setId(props.client?.getId() || CLIENT_ID),
    );

    const metadata = this.getMetadata(sessionToken);
    const finalRequest = props.extension?.beforeLoadScene?.(request) || request;

    const response: LoadSceneResponse = await promisify(
      this.client.loadScene.bind(this.client),
    )(finalRequest, metadata);

    this.logger.debug({
      action: 'Load scene',
      data: {
        address: this.address,
        ssl: this.ssl,
        grpcOptions: this.grpcOptions,
        metadata: metadata.toJSON(),
        request: request.toObject(),
        response: response.toObject(),
      },
      sessionId: sessionToken.sessionId,
    });

    props.extension?.afterLoadScene?.(response);

    return response;
  }

  public session(props: SessionProps) {
    const { sessionToken, onDisconnect, onError, onMessage } = props;

    const metadata = this.getMetadata(sessionToken);
    const connection = this.client.session(metadata);

    this.logger.debug({
      action: 'Open session',
      data: {
        address: this.address,
        ssl: this.ssl,
        grpcOptions: this.grpcOptions,
        metadata: metadata.toJSON(),
      },
      sessionId: sessionToken.sessionId,
    });

    if (onMessage) {
      connection.on('data', onMessage);
    }

    if (onDisconnect) {
      connection.on('close', onDisconnect);
    }

    if (onError) {
      connection.on('error', (err: ServiceError) => {
        onError(err);
        connection.end();
      });
    }

    return connection;
  }

  private getMetadata(sessionToken: SessionToken) {
    const metadata = new Metadata();

    metadata.add('session-id', sessionToken.sessionId);
    metadata.add('authorization', `${sessionToken.type} ${sessionToken.token}`);

    return metadata;
  }
}
