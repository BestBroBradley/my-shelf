const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/:id")
  .get(userController.findBooks)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;