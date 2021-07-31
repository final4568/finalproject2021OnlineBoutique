const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const TailorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Your Username"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email Address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please Enter Valid Email",
    ],
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: [true, " Please Enter Your Password"],
    minlength: 2,
    select: false,
  },
  address: {
    type: String,
    minlength: 2,
  },
  usertype: {
    type: String,
  },
  bio: {
    type: String,
    minlength: 10,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

TailorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Function for Password bcrypt after inserting into Database

TailorSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Password bcrypt and get token
TailorSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
  return resetToken;
};

// function for getting token
TailorSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRETKEY, {
    expiresIn: process.env.JWT_EXPIRETIME,
  });
};

const Tailor = mongoose.model("Tailor", TailorSchema);
module.exports = Tailor;
