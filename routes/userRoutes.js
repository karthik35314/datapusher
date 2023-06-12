const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const validateToken = require("../middlewares/validateTokenHandler");

router.route("/").post(createUser);
router.use(validateToken);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;