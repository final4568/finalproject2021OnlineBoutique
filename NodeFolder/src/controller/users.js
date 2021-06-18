
const Users = require("../models/Users");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendemail");



exports.register = async (req, res, next) => {
  const { username, email, phone, gender, password, address, birthday } =
    req.body;
  try {
    const users = await User.create({
      username,
      email,
      phone,
      gender,
      password,
      address,
      birthday,
    });
    sendToken(users, 201, res);
  } catch {
    res.status(500).json({
      success: false,
      error: error().message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({
      success: false,
      error: "Please Provides Both email and Password...!",
    });
  }

  try {
    const users = await Users.findOne({ email }).select("+password");
    if (!users) {
      res.status(404).json({
        success: false,
        error: "Email Not Found, Try with Valid Email",
      });
    }
    const isMatch = await users.matchPasswords(password);
    if (!isMatch) {
      res.status(404).json({
        success: false,
        error: "Password Not Match",
      });
    }
    sendToken(users, 201, res);

   
  } catch (error){
      next(error);
  }
};


exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const users = await Users.findOne({ email });
    
    if (!users) {
      res.status(404).json({
        success: false,
        error: "Email could not be sent",
      });
    }
    const resetToken = users.getResetPasswordToken();
    await users.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
    const message = `
            <h1>Hi, You have requested a password Reset</h1>
            <p> Please go to this link to reset your passowrd</p>
            <a href="${resetUrl}" clicktracking = off> ${resetUrl} </a>
            `;
    try {
      await sendEmail({
        to: users.email,
        subject: "Password Reset Request",
        text: message,
      });
      res.status(200).json({
        success: true,
        data: "Email send successfully...! Check Your Email",
      });
    } catch (error) {
      users.getResetPasswordToken = undefined;
      users.getResetPasswordExpire = undefined;
      await users.save();
      res.status(500).json({
        success: false,
        error: "Email could not be sent",
      });
    }
  } catch (error) {
    next(error);
  }
};


exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");
  try {
    const users = await Users.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!users) {
      res.status(400).json({
        success: false,
        error: "Invalid Reset Token xyz",
      });
    }
    users.password = req.body.password;
    users.resetPasswordToken = undefined;
    users.resetPasswordExpire = undefined;
    await users.save();
    res.status(201).json({
      success: true,
      data: "Password Reset Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
  next(error);
};


const sendToken = (users, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token, users });
};