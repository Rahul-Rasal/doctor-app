const mongoose = require("mongoose");
const validator = require("validator");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: [true, "Please tell us your first name!"],
    },
    lastName: {
      type: String,
      required: [true, "Please tell us your last name!"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    phoneNumber: {
      type: String,
      required: [validator.isMobilePhone, "Please provide your phone number"],
    },
    website: {
      type: String,
      required: [true, "Please provide your website"],
    },
    address: {
      type: String,
      required: [true, "Please provide your address"],
    },
    specialization: {
      type: String,
      required: [true, "Please provide your specialization"],
    },
    experience: {
      type: String,
      required: [true, "Please provide your experience"],
    },
    feePerConsultation: {
      type: Number,
      required: [true, "Please provide your fee per consultation"],
    },
    fromTime: {
      type: String,
      required: [true, "Please provide your from time"],
    },
    toTime: {
      type: String,
      required: [true, "Please provide your to time"],
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
