import {
  DataChunk,
  InworldPacket as ProtoPacket,
} from '@proto/ai/inworld/packets/packets_pb';

import {
  InworlControlType,
  InworldPacketType,
} from '../../common/data_structures';
import { AudioEvent } from './audio.entity';
import { CancelResponsesEvent } from './cancel_responses.entity';
import { ControlEvent } from './control.entity';
import { EmotionEvent } from './emotion/emotion.entity';
import { NarratedAction } from './narrated_action.entity';
import { PacketId } from './packet_id.entity';
import { Routing } from './routing.entity';
import { SilenceEvent } from './silence.entity';
import { TextEvent } from './text.entity';
import { TriggerEvent } from './trigger.entity';

export interface InworldPacketProps {
  audio?: AudioEvent;
  cancelResponses?: CancelResponsesEvent;
  control?: ControlEvent;
  trigger?: TriggerEvent;
  emotions?: EmotionEvent;
  silence?: SilenceEvent;
  packetId: PacketId;
  routing: Routing;
  text?: TextEvent;
  narratedAction?: NarratedAction;
  date: string;
  type: InworldPacketType;
}

export class InworldPacket {
  private type: InworldPacketType = InworldPacketType.UNKNOWN;

  readonly date: string;
  readonly packetId: PacketId;
  readonly routing: Routing;

  // Events
  readonly text: TextEvent;
  readonly audio: AudioEvent;
  readonly control: ControlEvent;
  readonly trigger: TriggerEvent;
  readonly emotions: EmotionEvent;
  readonly silence: SilenceEvent;
  readonly narratedAction: NarratedAction;
  readonly cancelResponses: CancelResponsesEvent;

  constructor(props: InworldPacketProps) {
    this.packetId = props.packetId;
    this.routing = props.routing;
    this.date = props.date;
    this.type = props.type;

    if (this.isText()) {
      this.text = props.text;
    }

    if (this.isAudio()) {
      this.audio = props.audio;
    }

    if (this.isControl()) {
      this.control = props.control;
    }

    if (this.isEmotion()) {
      this.emotions = props.emotions;
    }

    if (this.isTrigger()) {
      this.trigger = props.trigger;
    }

    if (this.isSilence()) {
      this.silence = props.silence;
    }

    if (this.isCancelResponse()) {
      this.cancelResponses = props.cancelResponses;
    }

    if (this.isNarratedAction()) {
      this.narratedAction = props.narratedAction;
    }
  }

  isText() {
    return this.type === InworldPacketType.TEXT;
  }

  isAudio() {
    return this.type === InworldPacketType.AUDIO;
  }

  isControl() {
    return this.type === InworldPacketType.CONTROL;
  }

  isTrigger() {
    return this.type === InworldPacketType.TRIGGER;
  }

  isEmotion() {
    return this.type === InworldPacketType.EMOTION;
  }

  isInteractionEnd() {
    return (
      this.isControl() &&
      this.control.type === InworlControlType.INTERACTION_END
    );
  }

  isTTSPlaybackMute() {
    return (
      this.isControl() &&
      this.control.type === InworlControlType.TTS_PLAYBACK_MUTE
    );
  }

  isTTSPlaybackUnmute() {
    return (
      this.isControl() &&
      this.control.type === InworlControlType.TTS_PLAYBACK_UNMUTE
    );
  }

  isWarning() {
    return this.isControl() && this.control.type === InworlControlType.WARNING;
  }

  isSilence() {
    return this.type === InworldPacketType.SILENCE;
  }

  isCancelResponse() {
    return this.type === InworldPacketType.CANCEL_RESPONSE;
  }

  isNarratedAction() {
    return this.type === InworldPacketType.NARRATED_ACTION;
  }

  static fromProto(proto: ProtoPacket): InworldPacket {
    const type = this.getType(proto);

    return new InworldPacket({
      type,
      date: proto.getTimestamp().toDate().toISOString(),
      packetId: PacketId.fromProto(proto.getPacketId()),
      routing: Routing.fromProto(proto.getRouting()),
      ...(type === InworldPacketType.TRIGGER && {
        trigger: TriggerEvent.fromProto(proto.getCustom()),
      }),
      ...(type === InworldPacketType.TEXT && {
        text: TextEvent.fromProto(proto.getText()),
      }),
      ...(type === InworldPacketType.AUDIO && {
        audio: AudioEvent.fromProto(proto.getDataChunk()),
      }),
      ...(type === InworldPacketType.CONTROL && {
        control: ControlEvent.fromProto(proto.getControl()),
      }),
      ...(type === InworldPacketType.SILENCE && {
        silence: SilenceEvent.fromProto(proto.getDataChunk()),
      }),
      ...(type === InworldPacketType.EMOTION && {
        emotions: EmotionEvent.fromProto(proto.getEmotion()),
      }),
      ...(type === InworldPacketType.CANCEL_RESPONSE && {
        cancelResponses: CancelResponsesEvent.fromProto(proto.getMutation()),
      }),
      ...(type === InworldPacketType.NARRATED_ACTION && {
        narratedAction: NarratedAction.fromProto(proto.getAction()),
      }),
    });
  }

  private static getType(packet: ProtoPacket) {
    switch (true) {
      case packet.hasText():
        return InworldPacketType.TEXT;
      case packet.hasDataChunk() &&
        packet.getDataChunk().getType() === DataChunk.DataType.AUDIO:
        return InworldPacketType.AUDIO;
      case packet.hasDataChunk() &&
        packet.getDataChunk().getType() === DataChunk.DataType.SILENCE:
        return InworldPacketType.SILENCE;
      case packet.hasCustom():
        return InworldPacketType.TRIGGER;
      case packet.hasControl():
        return InworldPacketType.CONTROL;
      case packet.hasEmotion():
        return InworldPacketType.EMOTION;
      case packet.getMutation()?.hasCancelResponses():
        return InworldPacketType.CANCEL_RESPONSE;
      case packet.getAction()?.hasNarratedAction():
        return InworldPacketType.NARRATED_ACTION;
      default:
        return InworldPacketType.UNKNOWN;
    }
  }
}
