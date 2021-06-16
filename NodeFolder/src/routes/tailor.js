const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
  getalltailors,
  deletetailor,
  tailorprofile,
  update
} = require("../controller/tailor");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpasswords/:resetToken").put(resetpassword);
router.route("/getalltailors").get(getalltailors);
router.route("/delete/:id").delete(deletetailor);
router.route("/tailorprofile/:id").get(tailorprofile);
router.route("/update/:id").put(update);

module.exports = router;
