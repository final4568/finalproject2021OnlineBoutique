
const Tailor = require("../models/Tailor");
const crypto = require("crypto");
const sendEmail = require("../utils/sendemail");
const ErrorResponse = require("../utils/ErrorRespinse")



exports.register = async (req, res, next) => {

   const { username, email, phone, gender, password, address,usertype, bio} = req.body;
   try {
     const tailor = await Tailor.create({
      username, 
      email, 
      phone, 
      gender, 
      password, 
      address,
      usertype, 
      bio
     });
       res.status(200).json({
       success:true,
       mssage:  " Registered Successfully....!"
     })
    //  sendToken(tailor, 201, res);
   } catch (error) {
       
     next(error);
   }
};



exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        error: "Please Provides email and password",
      });
    }

    try {
      const tailor = await Tailor.findOne({ email }).select("+password");

      if (!tailor) {
        res.status(404).json({
          success: false,
          error: "This Email not registered...!",
        });

        //return next(new ErrorResponse("Invalid Codrentails", 401));
      }
    const isMatch = await tailor.matchPasswords(password);

      if (!isMatch) {
        res.status(404).json({
          success: false,
          error: "Passswor Not Match ",
        });
        //return next(new ErrorResponse("Invalid Codrentails", 401));
      }
      sendToken(tailor, 200, res);

    } catch (error) {
      next(error);
     
    }

};


exports.forgotpassword = async (req, res, next) => {
    
    const { email } = req.body;
  try {
    const tailor = await Tailor.findOne({ email });
    if (!tailor) {
      // return next(new ErrorResponse("Email could not be sent yes", 404));
        res.status(404).json({
        success: false,
        error: "Email could not be sent",
      });
    }
    const resetToken = tailor.getResetPasswordToken();
    await tailor.save();
    //http://localhost:8000/
    const resetUrl = `http://localhost:3000/tailorpasswordreset/${resetToken}`;
    const message = `
            <h1>Hi, You have requested a password Reset</h1>
            <p> Please go to this link to reset your passowrd</p>
            <a href="${resetUrl}" clicktracking = off> ${resetUrl} </a>
            `;
    try {
      await sendEmail({
        to: tailor.email,
        subject: "Password Reset Request",
        text: message,
      });
      res.status(200).json({
        success: true,
        data: "Email send successfully...! Check Your Email",
      });
    } catch (error) {
        tailor.getResetPasswordToken = undefined;
        tailor.getResetPasswordExpire = undefined;
      await tailor.save();
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
    const tailor = await Tailor.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    if (!tailor) {
      // return next(new ErrorResponse("Invalid Reset Token xyz", 400))
      res.status(400).json({
        success: false,
        error: "Invalid Reset Token xyz",
      });
    }
    tailor.password = req.body.password;
    tailor.resetPasswordToken = undefined;
    tailor.resetPasswordExpire = undefined;
    await tailor.save();
    res.status(201).json({
      success: true,
      data: "Password Reset Successfully",
    });
  } catch (error) {
    next(error);
  }
   
};


exports.getalltailors = (req, res, next)=>{
 Tailor.find((err, docs)=>{
  if (err) {
    console.log(err);
  } else {
    res.json(docs);
  }
 })
};

exports.deletetailor = async (req, res)=>{
  try{
    await Tailor.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "deteleted...!"
  });

  }catch{
    res.status(400).json({
    success: false,
    message: "Not deteleted...!"
    });
  }
  
};



exports.tailorprofile = async(req, res) =>{
  // res.send("this is tailor profile")

  try{
    const id = req.params.id
    Tailor.findById(id, (err, tailor)=>{
      res.json(tailor)
    });   

  }catch{
    res.status(400).json({
    success: false,
    message: "Person's Profile Not Available"
    });
  }
};

exports.update = async(req, res)=>{
  const id = req.params.id;
  Tailor.findOneAndUpdate({ _id: id }, req.body, { new: true })
  .then((tailor) => res.status(200).send(tailor))
  .catch((err) => res.status(500).send(err.message)); 

};


const sendToken = (tailor, statusCode, res) => {
    const token = tailor.getSignedJwtToken();
    res.status(statusCode).json({ success: true, token });
  };
  