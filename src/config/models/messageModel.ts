import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema({
  roomId: String,
  userId: String,
  message: String,
  createdBy: String,
  sentAt: Date,
},{
    timestamps: true
});

module.exports = mongoose.model('Message', messageSchema);