const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router
  .route("/")
  .post(booksController.create)

router
  .route("/:userid/")
  .get(booksController.findAll)
  .delete(booksController.clear)

router
  .route("/:userid/:bookid")
  .put(booksController.update)
  .delete(booksController.remove)

module.exports = router;