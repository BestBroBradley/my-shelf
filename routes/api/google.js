const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/books"
router.route("/:type/:term")
  .get(booksController.findAll)

module.exports = router;