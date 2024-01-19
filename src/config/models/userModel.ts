import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  token: String
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);