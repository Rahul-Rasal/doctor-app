const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Doctor = require("../models/doctorModel");
const User = require("../models/userModel");
const Appointment = require("../models/appointmentModel");
const moment = require("moment");

exports.doctorSignup = catchAsync(async (req, res, next) => {
  // find doctor if already applied
  const doctor = await Doctor.findOne({ email: req.body.email });
  if (doctor)
    return next(
      new AppError(
        "Doctor already applied Please contact your admin clinic",
        400
      )
    );

  const newDoctor = new Doctor({ ...req.body, status: "pending" });
  await newDoctor.save();

  const adminUser = await User.findOne({ isAdmin: true });

  const unseenNotifications = adminUser.unseenNotifications;
  unseenNotifications.push({
    type: "new-doctor-request",
    message: `${newDoctor.fullName} has requested to join as a doctor.`,
    data: {
      doctorId: newDoctor._id,
      name: newDoctor.fullName,
    },
    onClickPath: "/admin/doctors",
  });

  await User.findByIdAndUpdate(adminUser._id, { unseenNotifications });

  res.status(200).send({
    status: true,
    message: "Doctor account applied successfully",
  });
});

exports.notificationSeen = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const unseenNotifications = user.unseenNotifications;
  user.seenNotifications = unseenNotifications;

  user.unseenNotifications = [];

  const updatedUser = await user.save();
  updatedUser.password = undefined;

  res.status(200).send({
    status: true,
    message: "All notifications seen",
    data: updatedUser,
  });
});

exports.deleteNotifications = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  user.seenNotifications = [];
  user.unseenNotifications = [];

  const updatedUser = await user.save();
  updatedUser.password = undefined;

  res.status(200).send({
    status: true,
    message: "All notifications deleted",
    data: updatedUser,
  });
});

exports.getAllDoctors = catchAsync(async (req, res, next) => {
  const doctors = await Doctor.find();

  res.status(200).send({
    status: true,
    message: "All doctors fetched successfully",
    data: doctors,
  });
});

exports.doctorStatus = catchAsync(async (req, res, next) => {
  const { doctorId, status, userId } = req.body;

  const doctor = await Doctor.findByIdAndUpdate(doctorId, { status });
  if (!doctor) return next(new AppError("Doctor not found", 404));

  // Send Notification To User
  const user = await User.findById(userId);
  const unseenNotifications = user.unseenNotifications;
  unseenNotifications.push({
    type: "new-doctor-request-changed",
    message: `Your doctor request has been ${status}`,
    data: {
      name: user.name,
      doctorId: user._id,
    },
    onClickPath: "/notifications",
  });
  user.isDoctor = status === "approved" ? true : false;
  await user.save();

  const doctors = await Doctor.find();

  res.status(200).send({
    status: true,
    message: "Doctor status changed successfully",
    data: doctors,
  });
});

exports.getDoctor = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findOne({ userId: req.params.id });
  if (!doctor) return next(new AppError("Doctor not found", 404));

  res.status(200).send({
    status: true,
    message: "Doctor fetched successfully",
    data: doctor,
  });
});

exports.updateDoctor = catchAsync(async (req, res, next) => {
  const { body } = req.body;

  const doctor = await Doctor.findOneAndUpdate(
    { userId: req.params.id },
    body,
    { new: true }
  );

  if (!doctor) return next(new AppError("Doctor not found", 404));

  res.status(200).send({
    status: true,
    message: "Doctor updated successfully",
    data: doctor,
  });
});

exports.getAllApprovedDoctors = catchAsync(async (req, res, next) => {
  const doctors = await Doctor.find({ status: "approved" });

  res.status(200).send({
    status: true,
    message: "All approved doctors fetched successfully",
    data: doctors,
  });
});

exports.checkBookingAvailability = catchAsync(async (req, res, next) => {
  const date = moment(req.body.date);
  const fromTime = moment(req.body.time).subtract(30, "minutes");

  const toTime = moment(req.body.time).add(15, "minutes");

  const doctorId = req.body.doctorId;

  const appointments = await Appointment.find({
    doctorId,
    date,
    time: { $gte: fromTime, $lte: toTime },
  });

  // Check appointments length
  if (appointments.length > 0) {
    return next(new AppError("Appointment not available", 400));
  } else {
    res.status(200).send({
      status: true,
      message: "Appointment available",
    });
  }
});

exports.doctorAppointments = catchAsync(async (req, res, next) => {
  const doctor = await Doctor.findOne({ userId: req.params.id });
  if (!doctor) return next(new AppError("Doctor not found", 404));

  const appointments = await Appointment.find({ doctorId: doctor.userId });
  res.status(200).json({
    status: "success",
    message: "Appointments fetched successfully.",
    data: appointments,
  });
});
