const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const Appointment = require("../models/appointmentModel");
const moment = require("moment");

exports.verifyUser = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "User verified successfully.",
    data: req.user,
  });
});

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  const filteredUsers = users.map((user) => {
    return {
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };
  });

  res.status(200).json({
    status: "success",
    message: "Users fetched successfully.",
    data: filteredUsers,
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: "success",
    message: "User fetched successfully.",
    data: user,
  });
});

exports.bookAppointment = catchAsync(async (req, res, next) => {
  req.body.status = "pending";
  req.body.date = moment(req.body.date, "DD-MM-YYYY").toISOString();
  req.body.time = moment(req.body.time, "HH:mm").toISOString();

  const newAppointment = new Appointment(req.body);
  await newAppointment.save();

  // Find doctor and send notification
  const user = await User.findById(req.body.doctorInfo.userId);
  user.unseenNotifications.push({
    type: "new-appointment-request",
    message: `A new appointment request has been made by ${req.body.userInfo.name}`,
    data: {
      name: req.body.userInfo.name,
    },
    onClickPath: "/doctor/appointments",
  });
  await user.save();

  res.status(200).json({
    status: "success",
    message: "Appointment booked successfully.",
  });
});
