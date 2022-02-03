const User = require("../models/Users");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendemail");

exports.register = async (req, res,next) => {
  const { username, email, phone, gender, password, address, birthday } =
    req.body;
    try {
      const user = await User.create({
        username,
        email,
        phone,
        gender,
        password,
        address,
        birthday
      });
      sendToken(user, 200, res);
          //  sendToken(tailor, 201, res);
    } catch (error) {
      next(error);
    }
};

exports.registerbyauth = async (req, res) => {
  const { username, email, phone, gender, password, address, birthday } =
    req.body;
  try {
    const user = await User.create({
      username,
      email,
      phone,
      gender,
      password,
      address,
      birthday,
    });

    res.status(200).json({
      success: true,
      message: "Registered User successfully..!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
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
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(404).json({
        success: false,
        error: "Email Not Found, Try with Valid Email",
      });
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      res.status(404).json({
        success: false,
        error: "Password Not Match",
      });
    }
    sendToken(user, 201, res);
  } catch(error) {
   next(error)
  }
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({
        success: false,
        error: "Email could not be sent",
      });
    }
    const resetToken = user.getResetPasswordToken();
    await user.save();

    const resetUrl = `http://localhost:3000/Userpasswordreset/${resetToken}`;
    const message = `
            <h1>Hi, You have requested a password Reset</h1>
            <p> Please go to this link to reset your passowrd</p>
            <a href="${resetUrl}" clicktracking = off> ${resetUrl} </a>
            `;
    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });
      res.status(200).json({
        success: true,
        data: "Email send successfully...! Check Your Email",
      });
    } catch (error) {
      user.getResetPasswordToken = undefined;
      user.getResetPasswordExpire = undefined;
      await user.save();
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
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!user) {
      res.status(400).json({
        success: false,
        error: "Invalid Reset Token xyz",
      });
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
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

exports.getallusers = (req, res, next) => {
  User.find((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.json(docs);
    }
  });
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "deteleted...!",
    });
  } catch {
    res.status(400).json({
      success: false,
      message: "Not deteleted...!",
    });
  }
};

exports.Userprofile = async (req, res) => {
  try {
    const id = req.params.id;
    User.findById(id, (err, user) => {
      res.json(user);
    });
  } catch {
    res.status(400).json({
      success: false,
      message: "Person's Profile Not Available",
    });
  }
};

exports.Userupdate = async (req, res) => {
  const id = req.params.id;
  User.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(500).send(err.message));
};

exports.loggeduserprofile = async (req, res) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res
        .status(401)
        .json({ success: false, error: "Not authorized to access this route" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEYUSER);
    const user = await User.findById(decoded.id);
    if (!user) {
      res.status(404).json({
        success: false,
        error: "No user Found with this id",
      });
    }
    res.status(200).json(user);
  } catch {
    res.status(400).json({
      success: false,
      message: "User's Profile Not Available",
    });
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token, user });
};
