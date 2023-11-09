const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  recepientId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  messageType: {
    type: String,
    enum: ["text", "image"],
  },
  message: String,
  imageUrl: String,
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Message", messageSchema);

// let message = {
//   messageID: "String",
//   roomID: "String",
//   senderID: "String",
//   type: "String(Text/Photo/Document/GIF/Video)",
//   date: "Date",
//   body: "String",
// };
