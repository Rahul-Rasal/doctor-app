const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const Doctor = require("../models/doctorModel");
const User = require("../models/userModel");

exports.doctorSignup = catchAsync(async (req, res, next) => {
  const newDoctor = new Doctor({ ...req.body, status: "pending" });
  await newDoctor.save();

  const adminUser = await User.findOne({ isAdmin: true });

  const unseenNotifications = adminUser.unseenNotifications;
  unseenNotifications.push({
    type: "new-doctor-request",
    message: `${newDoctor.firstName} ${newDoctor.lastName} has requested to join as a doctor.`,
    data: {
      doctorId: newDoctor._id,
      name: newDoctor.firstName + " " + newDoctor.lastName,
    },
    onClickPath: "/admin/doctors",
  });

  await User.findByIdAndUpdate(adminUser._id, { unseenNotifications });

  res.status(200).send({
    status: true,
    message: "Doctor account applied successfully",
  });
});
