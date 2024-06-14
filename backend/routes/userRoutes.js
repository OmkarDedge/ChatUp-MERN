const express = require("express");
const {
  Register,
  Login,
  allUsers,
} = require("../controllers/userController.js");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.route("/").post(Register).get(protect, allUsers);
router.post("/login", Login);

module.exports = router;
