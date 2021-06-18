// this file is used for checking the token in the header

const jwt = require("jsonwebtoken");
const Users = require("../models/Users");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401).json({
      success: false,
      error: "Not authorized to access this route",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEYUSER);
    const user = await Users.findById(decoded.id);

    if (!user) {
      res.status(404).json({
        success: false,
        error: "No user Found with this id",
      });
    }

    req.user = user;
    next();

  } catch (error) {
    res.status(404).json({
      success: false,
      error: "Not authorized to access this route",
    });
  }
};
