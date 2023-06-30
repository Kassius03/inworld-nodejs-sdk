// source: voices.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ai.inworld.voices.Age', null, global);
goog.exportSymbol('proto.ai.inworld.voices.Gender', null, global);
goog.exportSymbol('proto.ai.inworld.voices.TTSType', null, global);
goog.exportSymbol('proto.ai.inworld.voices.Voice', null, global);
goog.exportSymbol('proto.ai.inworld.voices.Voice.ElevenLabsMetadata', null, global);
goog.exportSymbol('proto.ai.inworld.voices.Voice.TtsMetadataCase', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ai.inworld.voices.Voice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ai.inworld.voices.Voice.oneofGroups_);
};
goog.inherits(proto.ai.inworld.voices.Voice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.voices.Voice.displayName = 'proto.ai.inworld.voices.Voice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ai.inworld.voices.Voice.ElevenLabsMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ai.inworld.voices.Voice.ElevenLabsMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.voices.Voice.ElevenLabsMetadata.displayName = 'proto.ai.inworld.voices.Voice.ElevenLabsMetadata';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ai.inworld.voices.Voice.oneofGroups_ = [[100]];

/**
 * @enum {number}
 */
proto.ai.inworld.voices.Voice.TtsMetadataCase = {
  TTS_METADATA_NOT_SET: 0,
  ELEVENLABS_METADATA: 100
};

/**
 * @return {proto.ai.inworld.voices.Voice.TtsMetadataCase}
 */
proto.ai.inworld.voices.Voice.prototype.getTtsMetadataCase = function() {
  return /** @type {proto.ai.inworld.voices.Voice.TtsMetadataCase} */(jspb.Message.computeOneofCase(this, proto.ai.inworld.voices.Voice.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ai.inworld.voices.Voice.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.voices.Voice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.voices.Voice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.voices.Voice.toObject = function(includeInstance, msg) {
  var f, obj = {
    basename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ttsType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    gender: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    speakingRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    roboticVoiceFilterLevel: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    phonemesOverridesMap: (f = msg.getPhonemesOverridesMap()) ? f.toObject(includeInstance, undefined) : [],
    age: jspb.Message.getFieldWithDefault(msg, 8, 0),
    elevenlabsMetadata: (f = msg.getElevenlabsMetadata()) && proto.ai.inworld.voices.Voice.ElevenLabsMetadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ai.inworld.voices.Voice}
 */
proto.ai.inworld.voices.Voice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.voices.Voice;
  return proto.ai.inworld.voices.Voice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.voices.Voice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.voices.Voice}
 */
proto.ai.inworld.voices.Voice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasename(value);
      break;
    case 2:
      var value = /** @type {!proto.ai.inworld.voices.TTSType} */ (reader.readEnum());
      msg.setTtsType(value);
      break;
    case 3:
      var value = /** @type {!proto.ai.inworld.voices.Gender} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPitch(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSpeakingRate(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRoboticVoiceFilterLevel(value);
      break;
    case 7:
      var value = msg.getPhonemesOverridesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {!proto.ai.inworld.voices.Age} */ (reader.readEnum());
      msg.setAge(value);
      break;
    case 100:
      var value = new proto.ai.inworld.voices.Voice.ElevenLabsMetadata;
      reader.readMessage(value,proto.ai.inworld.voices.Voice.ElevenLabsMetadata.deserializeBinaryFromReader);
      msg.setElevenlabsMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ai.inworld.voices.Voice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.voices.Voice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.voices.Voice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.voices.Voice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBasename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTtsType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPitch();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getSpeakingRate();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getRoboticVoiceFilterLevel();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getPhonemesOverridesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getAge();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getElevenlabsMetadata();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto.ai.inworld.voices.Voice.ElevenLabsMetadata.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ai.inworld.voices.Voice.ElevenLabsMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.voices.Voice.ElevenLabsMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.voices.Voice.ElevenLabsMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.voices.Voice.ElevenLabsMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    voiceId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ai.inworld.voices.Voice.ElevenLabsMetadata}
 */
proto.ai.inworld.voices.Voice.ElevenLabsMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.voices.Voice.ElevenLabsMetadata;
  return proto.ai.inworld.voices.Voice.ElevenLabsMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.voices.Voice.ElevenLabsMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.voices.Voice.ElevenLabsMetadata}
 */
proto.ai.inworld.voices.Voice.ElevenLabsMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVoiceId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ai.inworld.voices.Voice.ElevenLabsMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.voices.Voice.ElevenLabsMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.voices.Voice.ElevenLabsMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.voices.Voice.ElevenLabsMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVoiceId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string voice_id = 1;
 * @return {string}
 */
proto.ai.inworld.voices.Voice.ElevenLabsMetadata.prototype.getVoiceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.voices.Voice.ElevenLabsMetadata} returns this
 */
proto.ai.inworld.voices.Voice.ElevenLabsMetadata.prototype.setVoiceId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string baseName = 1;
 * @return {string}
 */
proto.ai.inworld.voices.Voice.prototype.getBasename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ai.inworld.voices.Voice} returns this
 */
proto.ai.inworld.voices.Voice.prototype.setBasename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TTSType tts_type = 2;
 * @return {!proto.ai.inworld.voices.TTSType}
 */
proto.ai.inworld.voices.Voice.prototype.getTtsType = function() {
  return /** @type {!proto.ai.inworld.voices.TTSType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ai.inworld.voices.TTSType} value
 * @return {!proto.ai.inworld.voices.Voice} returns this
 */
proto.ai.inworld.voices.Voice.prototype.setTtsType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional Gender gender = 3;
 * @return {!proto.ai.inworld.voices.Gender}
 */
proto.ai.inworld.voices.Voice.prototype.getGender = function() {
  return /** @type {!proto.ai.inworld.voices.Gender} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ai.inworld.voices.Gender} value
 * @return {!proto.ai.inworld.voices.Voice} returns this
 */
proto.ai.inworld.voices.Voice.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional double pitch = 4;
 * @return {number}
 */
proto.ai.inworld.voices.Voice.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.voices.Voice} returns this
 */
proto.ai.inworld.voices.Voice.prototype.setPitch = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double speaking_rate = 5;
 * @return {number}
 */
proto.ai.inworld.voices.Voice.prototype.getSpeakingRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.voices.Voice} returns this
 */
proto.ai.inworld.voices.Voice.prototype.setSpeakingRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double robotic_voice_filter_level = 6;
 * @return {number}
 */
proto.ai.inworld.voices.Voice.prototype.getRoboticVoiceFilterLevel = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ai.inworld.voices.Voice} returns this
 */
proto.ai.inworld.voices.Voice.prototype.setRoboticVoiceFilterLevel = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * map<string, string> phonemes_overrides = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.ai.inworld.voices.Voice.prototype.getPhonemesOverridesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ai.inworld.voices.Voice} returns this
 */
proto.ai.inworld.voices.Voice.prototype.clearPhonemesOverridesMap = function() {
  this.getPhonemesOverridesMap().clear();
  return this;};


/**
 * optional Age age = 8;
 * @return {!proto.ai.inworld.voices.Age}
 */
proto.ai.inworld.voices.Voice.prototype.getAge = function() {
  return /** @type {!proto.ai.inworld.voices.Age} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ai.inworld.voices.Age} value
 * @return {!proto.ai.inworld.voices.Voice} returns this
 */
proto.ai.inworld.voices.Voice.prototype.setAge = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional ElevenLabsMetadata elevenlabs_metadata = 100;
 * @return {?proto.ai.inworld.voices.Voice.ElevenLabsMetadata}
 */
proto.ai.inworld.voices.Voice.prototype.getElevenlabsMetadata = function() {
  return /** @type{?proto.ai.inworld.voices.Voice.ElevenLabsMetadata} */ (
    jspb.Message.getWrapperField(this, proto.ai.inworld.voices.Voice.ElevenLabsMetadata, 100));
};


/**
 * @param {?proto.ai.inworld.voices.Voice.ElevenLabsMetadata|undefined} value
 * @return {!proto.ai.inworld.voices.Voice} returns this
*/
proto.ai.inworld.voices.Voice.prototype.setElevenlabsMetadata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.ai.inworld.voices.Voice.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ai.inworld.voices.Voice} returns this
 */
proto.ai.inworld.voices.Voice.prototype.clearElevenlabsMetadata = function() {
  return this.setElevenlabsMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ai.inworld.voices.Voice.prototype.hasElevenlabsMetadata = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * @enum {number}
 */
proto.ai.inworld.voices.Gender = {
  VOICE_GENDER_UNSPECIFIED: 0,
  VOICE_GENDER_MALE: 1,
  VOICE_GENDER_FEMALE: 2,
  VOICE_GENDER_NEUTRAL: 3
};

/**
 * @enum {number}
 */
proto.ai.inworld.voices.Age = {
  VOICE_AGE_UNSPECIFIED: 0,
  VOICE_AGE_YOUNG: 1,
  VOICE_AGE_MIDDLE_AGED: 2,
  VOICE_AGE_OLD: 3
};

/**
 * @enum {number}
 */
proto.ai.inworld.voices.TTSType = {
  TTS_TYPE_STANDARD: 0,
  TTS_TYPE_ADVANCED: 1,
  TTS_TYPE_ELEVEN_LABS: 2
};

goog.object.extend(exports, proto.ai.inworld.voices);
