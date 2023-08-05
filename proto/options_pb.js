// source: options.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.ai.inworld.options.ExampleValue', null, global);
goog.exportSymbol('proto.ai.inworld.options.FieldMode', null, global);
goog.exportSymbol('proto.ai.inworld.options.examples', null, global);
goog.exportSymbol('proto.ai.inworld.options.fieldModeList', null, global);
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
proto.ai.inworld.options.ExampleValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ai.inworld.options.ExampleValue.repeatedFields_, null);
};
goog.inherits(proto.ai.inworld.options.ExampleValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ai.inworld.options.ExampleValue.displayName = 'proto.ai.inworld.options.ExampleValue';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ai.inworld.options.ExampleValue.repeatedFields_ = [1];



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
proto.ai.inworld.options.ExampleValue.prototype.toObject = function(opt_includeInstance) {
  return proto.ai.inworld.options.ExampleValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ai.inworld.options.ExampleValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.options.ExampleValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    exampleList: jspb.Message.toObjectList(msg.getExampleList(),
    google_protobuf_struct_pb.Value.toObject, includeInstance)
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
 * @return {!proto.ai.inworld.options.ExampleValue}
 */
proto.ai.inworld.options.ExampleValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ai.inworld.options.ExampleValue;
  return proto.ai.inworld.options.ExampleValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ai.inworld.options.ExampleValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ai.inworld.options.ExampleValue}
 */
proto.ai.inworld.options.ExampleValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.addExample(value);
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
proto.ai.inworld.options.ExampleValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ai.inworld.options.ExampleValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ai.inworld.options.ExampleValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ai.inworld.options.ExampleValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExampleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.Value example = 1;
 * @return {!Array<!proto.google.protobuf.Value>}
 */
proto.ai.inworld.options.ExampleValue.prototype.getExampleList = function() {
  return /** @type{!Array<!proto.google.protobuf.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.Value, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.Value>} value
 * @return {!proto.ai.inworld.options.ExampleValue} returns this
*/
proto.ai.inworld.options.ExampleValue.prototype.setExampleList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Value}
 */
proto.ai.inworld.options.ExampleValue.prototype.addExample = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ai.inworld.options.ExampleValue} returns this
 */
proto.ai.inworld.options.ExampleValue.prototype.clearExampleList = function() {
  return this.setExampleList([]);
};


/**
 * @enum {number}
 */
proto.ai.inworld.options.FieldMode = {
  FIELD_MODE_UNSPECIFIED: 0,
  HIDDEN: 1
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `examples`.
 * @type {!jspb.ExtensionFieldInfo<!proto.ai.inworld.options.ExampleValue>}
 */
proto.ai.inworld.options.examples = new jspb.ExtensionFieldInfo(
    70900,
    {examples: 0},
    proto.ai.inworld.options.ExampleValue,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.ai.inworld.options.ExampleValue.toObject),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[70900] = new jspb.ExtensionFieldBinaryInfo(
    proto.ai.inworld.options.examples,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.ai.inworld.options.ExampleValue.serializeBinaryToWriter,
    proto.ai.inworld.options.ExampleValue.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[70900] = proto.ai.inworld.options.examples;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldModeList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<!proto.ai.inworld.options.FieldMode>>}
 */
proto.ai.inworld.options.fieldModeList = new jspb.ExtensionFieldInfo(
    80001,
    {fieldModeList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[80001] = new jspb.ExtensionFieldBinaryInfo(
    proto.ai.inworld.options.fieldModeList,
    jspb.BinaryReader.prototype.readPackedEnum,
    jspb.BinaryWriter.prototype.writePackedEnum,
    undefined,
    undefined,
    true);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[80001] = proto.ai.inworld.options.fieldModeList;

goog.object.extend(exports, proto.ai.inworld.options);
