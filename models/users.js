const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  books: { type: Array, required: true, default: []}
});

const User = mongoose.model("User", userSchema);

module.exports = User;