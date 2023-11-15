// 3rd Party Imports
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// AUTH CONTROLLER
router.post("/signup", authController.signup);

module.exports = router;
