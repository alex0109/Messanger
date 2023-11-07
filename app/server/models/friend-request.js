const { Schema, model } = require("mongoose");

const friendRequestSchema = new Schema({
  from: { type: Schema.Types.ObjectId, ref: "User" },
  to: { type: Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",
  },
  firstMessage: String,
});

module.exports = model("FriendRequest", friendRequestSchema);
