const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
    default: null,
  },
  photo: String,
  outgoingRequests: [{ type: Schema.Types.ObjectId, ref: "FriendRequest" }],
  incomingRequests: [{ type: Schema.Types.ObjectId, ref: "FriendRequest" }],
  contacts: [{ type: Schema.Types.ObjectId, ref: "User" }],
  bio: String,
  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("User", userSchema);
