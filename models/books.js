const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: Array, required: true },
  synopsis: { type: String, required: false },
  categories: { type: Array, required: true },
  isRead: { type: Boolean, required: true, default: false },
  pageCount: { type: Number, required: true, default: 0 },
  userid: {type: String, required: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;