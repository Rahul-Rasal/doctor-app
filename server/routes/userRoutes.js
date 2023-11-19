// 3rd Party Imports
const express = require("express");
// Custom Imports
const authController = require("../controllers/authController");
const doctorController = require("../controllers/doctorController");
const userController = require("../controllers/userController");

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
router.get("/doctors", doctorController.getAllDoctors);

// NOTIFICATION FOR ADMIN
router.post(
  "/mark-all-notification-as-seen",
  authController.protect,
  doctorController.notificationSeen
);
router.post(
  "/delete-all-notifications",
  authController.protect,
  doctorController.deleteNotifications
);

// USERS
router.get("/verify-user", authController.protect, userController.verifyUser);
router.get("/", userController.getAllUsers);

module.exports = router;
