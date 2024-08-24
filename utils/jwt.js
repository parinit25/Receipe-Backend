const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "secret";

exports.generateToken = (userId) => {
  return jwt.sign({ id: userId }, SECRET, { expiresIn: "1d" });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};
