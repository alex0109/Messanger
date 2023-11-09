const { Schema, model } = require("mongoose");

const socketSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  socketId: {
    type: String,
    required: true,
  },
});

module.exports = model("Socket", socketSchema);
