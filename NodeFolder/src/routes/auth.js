


const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
  adminprofile,
  adminupdate,
  getadmin
} = require("../controller/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);
router.route("/adminprofile").get(adminprofile);
router.route("/adminupdate/:id").put(adminupdate);
router.route("/getadmin/:id").get(getadmin);


module.exports = router;
