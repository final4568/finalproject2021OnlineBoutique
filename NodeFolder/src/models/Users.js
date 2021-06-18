
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
    phone:{
      type: Number,
      required: true,
      minlength:10
    },
    gender:{
      type:String,
      required: true,
    },
    password: {
      type: String,
      require: [true, " Please Enter Your Password"],
      minlength: 2,
      select: false,
    },
    address:{
      type:String,
      minlength: 2,
  
    },
    birthday: { 
        type: Date,
        required: true,
        trim: true
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

  const User = mongoose.model("User", UserSchema);
  module.exports = User;