// 3rd Party Imports
const express = require("express");
// Custom Imports
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/doctors", authController.protect);

module.exports = router;
