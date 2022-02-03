// this file is used for checking the token in the header
require("dotenv").config({ path: "../confiigs.env" });

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
      error: "Not authorized to access this route Don't Have token",
    });
  }
  try {
 
    // let JWT_SECRETKEYTAILOR = "c6c33726ef763da417699fcb7405fa7a3c91fa8bb919cfaaa7877039d73d79676d90bd"
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEYTAILOR);
    const tailor = await Tailor.findById(decoded.id);

    if (!tailor) {
      res.status(404).json({
        success: false,
        error: "No Tailor Found with this id",
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
