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
router.get(
  "/approved-doctors",
  authController.protect,
  doctorController.getAllApprovedDoctors
);
router.get("/doctors/:id", authController.protect, doctorController.getDoctor);
router.put(
  "/doctors/:id",
  authController.protect,
  doctorController.updateDoctor
);
router.get(
  "/doctors/appointments/:id",
  authController.protect,
  doctorController.doctorAppointments
);

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
router.post(
  "/change-doctor-status",
  authController.protect,
  doctorController.doctorStatus
);

// USERS
router.get("/verify-user", authController.protect, userController.verifyUser);
router.get("/", userController.getAllUsers);
router.get("/:id", authController.protect, userController.getUser);
router.post(
  "/book-appointment",
  authController.protect,
  userController.bookAppointment
);
router.post(
  "/check-booking-availability",
  authController.protect,
  doctorController.checkBookingAvailability
);

router.get(
  "/user-appointments/:id",
  authController.protect,
  userController.userAppointments
);

module.exports = router;
