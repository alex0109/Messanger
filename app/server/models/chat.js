const { Schema, model } = require("mongoose");

const chatSchema = new Schema({
  chatId: Schema.Types.ObjectId,
  timeStamp: Date.now,
  messages: {
    text: {
      type: {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    },
    documents: {
      type: {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    },
    images: {
      type: {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    },
    audio: {
      type: {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    },
    video: {
      type: {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    },
  },
  users: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  totalMessages: Number,
});

module.exports = model("Chat", chatSchema);
