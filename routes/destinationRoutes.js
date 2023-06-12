const express = require("express");
const router = express.Router();
const {
  createDestination,
  getDestination,
  updateDestination,
  deleteDestination,
} = require("../controllers/destinationController");
const validateToken = require("../middlewares/validateTokenHandler");

// router.route("/").post(createDestination);
// router.use(validateToken);
console.log("rours")
router.route("/").post(createDestination);
router.route("/:id").get(getDestination).put(updateDestination);
router.route("/").delete(deleteDestination);

module.exports = router;