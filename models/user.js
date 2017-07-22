const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UserSchema = new Schema({
  username   : {type: String, require: true, unique: true},
  email      : {type: String, require: true, unique: true},
  password   : String,
 }, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;