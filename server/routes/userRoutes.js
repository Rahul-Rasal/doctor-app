// 3rd Party Imports
const express = require("express");
// Custom Imports
const authController = require("../controllers/authController");
const doctorController = require("../controllers/doctorController");

const router = express.Router();

// AUTH CONTROLLER
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// DOCTOR
router.post(
  "/doctor/signup",
  authController.protect,
  doctorController.doctorSignup
);

module.exports = router;
