const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");

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
