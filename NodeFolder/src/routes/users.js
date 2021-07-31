const express = require("express");
const router = express.Router();

const {
  register,
  registerbyauth,
  login,
  forgotpassword,
  resetpassword,
  getallusers,
  deleteUser,
  Userprofile,
  Userupdate,
  loggeduserprofile,
} = require("../controller/users");

router.route("/register").post(register);
router.route("/registerbyauthority").post(registerbyauth);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);
router.route("/getallusers").get(getallusers);
router.route("/deleteUser/:id").delete(deleteUser);
router.route("/userprofile/:id").get(Userprofile);
router.route("/userupdate/:id").put(Userupdate);
router.route("/LoggedUserProfile").get(loggeduserprofile);

module.exports = router;
