const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationid: {
      type: String,
    },
    sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Message = new mongoose.model("Message", MessageSchema);
module.exports = Message;
