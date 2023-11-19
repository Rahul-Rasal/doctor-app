const catchAsync = require("../utils/catchAsync");

exports.verifyUser = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "User verified successfully.",
    data: req.user,
  });
});
