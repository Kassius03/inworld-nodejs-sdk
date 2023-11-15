// source: ai/inworld/engine/v1/feedback.proto
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









var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.v1.CreateInteractionFeedbackRequest', null, global);
goog.exportSymbol('proto.v1.DeleteInteractionFeedbackRequest', null, global);
goog.exportSymbol('proto.v1.InteractionDislikeType', null, global);
goog.exportSymbol('proto.v1.InteractionFeedback', null, global);
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
proto.v1.InteractionFeedback = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.v1.InteractionFeedback.repeatedFields_, null);
};
goog.inherits(proto.v1.InteractionFeedback, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.InteractionFeedback.displayName = 'proto.v1.InteractionFeedback';
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
proto.v1.CreateInteractionFeedbackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.CreateInteractionFeedbackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.CreateInteractionFeedbackRequest.displayName = 'proto.v1.CreateInteractionFeedbackRequest';
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
proto.v1.DeleteInteractionFeedbackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.v1.DeleteInteractionFeedbackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.v1.DeleteInteractionFeedbackRequest.displayName = 'proto.v1.DeleteInteractionFeedbackRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.v1.InteractionFeedback.repeatedFields_ = [2];



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
proto.v1.InteractionFeedback.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.InteractionFeedback.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.InteractionFeedback} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.InteractionFeedback.toObject = function(includeInstance, msg) {
  var f, obj = {
    isLike: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    typeList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    comment: jspb.Message.getFieldWithDefault(msg, 3, ""),
    responseId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    name: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.v1.InteractionFeedback}
 */
proto.v1.InteractionFeedback.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.InteractionFeedback;
  return proto.v1.InteractionFeedback.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.InteractionFeedback} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.InteractionFeedback}
 */
proto.v1.InteractionFeedback.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLike(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.v1.InteractionDislikeType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addType(values[i]);
      }
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.v1.InteractionFeedback.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.InteractionFeedback.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.InteractionFeedback} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.InteractionFeedback.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsLike();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResponseId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool is_like = 1;
 * @return {boolean}
 */
proto.v1.InteractionFeedback.prototype.getIsLike = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.v1.InteractionFeedback} returns this
 */
proto.v1.InteractionFeedback.prototype.setIsLike = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * repeated InteractionDislikeType type = 2;
 * @return {!Array<!proto.v1.InteractionDislikeType>}
 */
proto.v1.InteractionFeedback.prototype.getTypeList = function() {
  return /** @type {!Array<!proto.v1.InteractionDislikeType>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.v1.InteractionDislikeType>} value
 * @return {!proto.v1.InteractionFeedback} returns this
 */
proto.v1.InteractionFeedback.prototype.setTypeList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.v1.InteractionDislikeType} value
 * @param {number=} opt_index
 * @return {!proto.v1.InteractionFeedback} returns this
 */
proto.v1.InteractionFeedback.prototype.addType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.v1.InteractionFeedback} returns this
 */
proto.v1.InteractionFeedback.prototype.clearTypeList = function() {
  return this.setTypeList([]);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.v1.InteractionFeedback.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.InteractionFeedback} returns this
 */
proto.v1.InteractionFeedback.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string response_id = 4;
 * @return {string}
 */
proto.v1.InteractionFeedback.prototype.getResponseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.InteractionFeedback} returns this
 */
proto.v1.InteractionFeedback.prototype.setResponseId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.v1.InteractionFeedback.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.InteractionFeedback} returns this
 */
proto.v1.InteractionFeedback.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.v1.CreateInteractionFeedbackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.CreateInteractionFeedbackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.CreateInteractionFeedbackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.CreateInteractionFeedbackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interactionFeedback: (f = msg.getInteractionFeedback()) && proto.v1.InteractionFeedback.toObject(includeInstance, f)
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
 * @return {!proto.v1.CreateInteractionFeedbackRequest}
 */
proto.v1.CreateInteractionFeedbackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.CreateInteractionFeedbackRequest;
  return proto.v1.CreateInteractionFeedbackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.CreateInteractionFeedbackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.CreateInteractionFeedbackRequest}
 */
proto.v1.CreateInteractionFeedbackRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.v1.InteractionFeedback;
      reader.readMessage(value,proto.v1.InteractionFeedback.deserializeBinaryFromReader);
      msg.setInteractionFeedback(value);
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
proto.v1.CreateInteractionFeedbackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.CreateInteractionFeedbackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.CreateInteractionFeedbackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.CreateInteractionFeedbackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInteractionFeedback();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.v1.InteractionFeedback.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.v1.CreateInteractionFeedbackRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.CreateInteractionFeedbackRequest} returns this
 */
proto.v1.CreateInteractionFeedbackRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional InteractionFeedback interaction_feedback = 2;
 * @return {?proto.v1.InteractionFeedback}
 */
proto.v1.CreateInteractionFeedbackRequest.prototype.getInteractionFeedback = function() {
  return /** @type{?proto.v1.InteractionFeedback} */ (
    jspb.Message.getWrapperField(this, proto.v1.InteractionFeedback, 2));
};


/**
 * @param {?proto.v1.InteractionFeedback|undefined} value
 * @return {!proto.v1.CreateInteractionFeedbackRequest} returns this
*/
proto.v1.CreateInteractionFeedbackRequest.prototype.setInteractionFeedback = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.v1.CreateInteractionFeedbackRequest} returns this
 */
proto.v1.CreateInteractionFeedbackRequest.prototype.clearInteractionFeedback = function() {
  return this.setInteractionFeedback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.v1.CreateInteractionFeedbackRequest.prototype.hasInteractionFeedback = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.v1.DeleteInteractionFeedbackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.v1.DeleteInteractionFeedbackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.v1.DeleteInteractionFeedbackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.DeleteInteractionFeedbackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.v1.DeleteInteractionFeedbackRequest}
 */
proto.v1.DeleteInteractionFeedbackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.v1.DeleteInteractionFeedbackRequest;
  return proto.v1.DeleteInteractionFeedbackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.v1.DeleteInteractionFeedbackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.v1.DeleteInteractionFeedbackRequest}
 */
proto.v1.DeleteInteractionFeedbackRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.v1.DeleteInteractionFeedbackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.v1.DeleteInteractionFeedbackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.v1.DeleteInteractionFeedbackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.v1.DeleteInteractionFeedbackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.v1.DeleteInteractionFeedbackRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.v1.DeleteInteractionFeedbackRequest} returns this
 */
proto.v1.DeleteInteractionFeedbackRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.v1.InteractionDislikeType = {
  INTERACTION_DISLIKE_TYPE_UNSPECIFIED: 0,
  INTERACTION_DISLIKE_TYPE_IRRELEVANT: 1,
  INTERACTION_DISLIKE_TYPE_UNSAFE: 2,
  INTERACTION_DISLIKE_TYPE_UNTRUE: 3,
  INTERACTION_DISLIKE_TYPE_INCORRECT_USE_KNOWLEDGE: 4,
  INTERACTION_DISLIKE_TYPE_UNEXPECTED_ACTION: 5,
  INTERACTION_DISLIKE_TYPE_UNEXPECTED_GOAL_BEHAVIOR: 6,
  INTERACTION_DISLIKE_TYPE_REPETITION: 7
};

goog.object.extend(exports, proto.v1);
