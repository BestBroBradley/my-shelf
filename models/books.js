const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: { type: String, required: true },
  image: { type: String, required: true },
  isRead: { type: Boolean, required: true, default: false },
  pageCount: { type: Number, required: true, default: 0 }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;