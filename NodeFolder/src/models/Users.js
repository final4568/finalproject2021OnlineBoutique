const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
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
  },
  address: {
    type: String,
    minlength: 2,
  },
  birthday: {
    type: Date,
    required: true,
    trim: true,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
  return resetToken;
};

// function for getting token
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, 
    process.env.JWT_SECRETKEYUSER, {
    expiresIn:60*100
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
