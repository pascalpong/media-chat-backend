import mongoose from "mongoose";
const { Schema } = mongoose;

const chatRoomSchema = new Schema({
  roomName: String,
  members: Array,
  socialMedia: String,
  createdBy: String,
},{
    timestamps: true
});

module.exports = mongoose.model('ChatRoom', chatRoomSchema);