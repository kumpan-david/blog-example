const User = require("../models/user");

exports.authorize = (role) => (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const data = User.verifyToken(token);

      if (data.role && data.role !== role) {
        throw new Error("Invalid role");
      }

      req.user = data;
      next();
    } else {
      throw new Error("No auth header");
    }
  } catch (error) {
    res.status(403).json({
      error: "Forbidden",
    });
  }
};

exports.admin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      error: "Forbidden",
    });
  }
  next();
};
