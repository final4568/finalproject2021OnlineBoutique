


const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const sendEmail = require("../utils/sendemail");

exports.register = async (req, res, next) => {
  const { username, email, phone, gender, password, address,usertype, bio } = req.body;
  try {
    const admin = await Admin.create({
      username,
      email,
      phone, 
      gender,
      password,
      address,
      usertype,
      bio
    });

    sendToken(admin, 201, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
    //next(error);
  }
};

exports.login = async (req, res, next) => {
  //    res.send("this is login route");
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Please Provides email and password",
    });
    //  return next(new ErrorResponse("Please Provides email and password", 400));
  }
  try {
    const admin = await Admin.findOne({ email }).select("+password");
    
    if (!admin) {
      res.status(404).json({
        success: false,
        error: "Invalid Email",
      });
      //return next(new ErrorResponse("Invalid Codrentails", 401));
    }
    const isMatch = await admin.matchPasswords(password);
    if (!isMatch) {
      res.status(404).json({
        success: false,
        error: "Invalid Codrentails",
      });
      //return next(new ErrorResponse("Invalid Codrentails", 401));
    }
    sendToken(admin, 200, res, admin.id);
  } catch (error) {
    next(error);
  }
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      // return next(new ErrorResponse("Email could not be sent yes", 404));
      res.status(404).json({
        success: false,
        error: "Email could not be sent",
      });
    }
    const resetToken = admin.getResetPasswordToken();
    await admin.save();

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
    const message = `
            <h1>Hi, You have requested a password Reset</h1>
            <p> Please go to this link to reset your passowrd</p>
            <a href="${resetUrl}" clicktracking = off> ${resetUrl} </a>
            `;
    try {
      await sendEmail({
        to: admin.email,
        subject: "Password Reset Request",
        text: message,
      });
      res.status(200).json({
        success: true,
        data: "Email send successfully...! Check Your Email",
      });
    } catch (error) {
      admin.getResetPasswordToken = undefined;
      admin.getResetPasswordExpire = undefined;
      await admin.save();
      //  return next(new ErrorResponse("Oh Email could not be sent", 500));
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
    const admin = await Admin.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!admin) {
      // return next(new ErrorResponse("Invalid Reset Token xyz", 400))
      res.status(400).json({
        success: false,
        error: "Invalid Reset Token xyz",
      });
    }
    admin.password = req.body.password;
    admin.resetPasswordToken = undefined;
    admin.resetPasswordExpire = undefined;
    await admin.save();
    res.status(201).json({
      success: true,
      data: "Password Reset Successfully",
    });
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   error: error.message,
    // }); 
    next(error);
  }
 
};





exports.adminprofile = async (req, res) => {
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
        .json({ success: false, error: "Not authorized to access this" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id);

    if (!admin) {
      res.status(404).json({
        success: false,
        error: "No user Found with this id",
      });
    }

    res.status(200).json(admin);
    
  } catch {
    res.status(400).json({
      success: false,
      message: "Person's Profile Not Available",
    });
  }
};


exports.getadmin = (req, res) =>{
  try{
    const id = req.params.id
    Admin.findById(id, (err, admin)=>{
      res.json(admin)
    });   

  }catch{
    res.status(400).json({
    success: false,
    message: "Admin Not Available"
    });
  }
};


exports.adminupdate =  (req, res)=>{
 Admin.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  .then((admin) => res.status(200).send(admin))
  .catch((err) => res.status(500).send(err.message)); 
};



const sendToken = (admin, statusCode, res) => {
  const token = admin.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token, admin });
};
