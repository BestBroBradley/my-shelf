const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");

router.use("/books", bookRoutes);
router.use("/user", userRoutes)

module.exports = router;