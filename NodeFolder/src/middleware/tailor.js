// this file is used for checking the token in the header

const jwt = require("jsonwebtoken");
const Tailor = require("../models/Tailor");

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
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
    const tailor = await Tailor.findById(decoded.id);

    if (!tailor) {
      res.status(404).json({
        success: false,
        error: "No user Found with this id",
      });
    }

    req.tailor = tailor;
    next();

  } catch (error) {
    res.status(404).json({
      success: false,
      error: "Not authorized to access this route",
    });
  }
};
