import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  token: String,
  username: String,
  socialMedia: Array,
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);