import mongoose from "mongoose";
const { Schema } = mongoose;

interface Message {
  userId: String,
  message: String,
  sentAt: Date,
}

const chatRoomSchema = new Schema({
  roomName: String,
  members: Array,
  socialMedia: String,
  messages: Array<Message>,
  createdBy: String,
},{
    timestamps: true
});

module.exports = mongoose.model('ChatRoom', chatRoomSchema);