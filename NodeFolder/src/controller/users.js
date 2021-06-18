const User = require("../models/Users");

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
    res.status(200).json({
      success: true,
      message: "User Register Successfully...!",
    });
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

    res.status(200).json({
      success: true,
      message: "Successfully Logged In",
    });
  } catch (error){
      next(error);
  }
};
