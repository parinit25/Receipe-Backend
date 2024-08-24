const jwt = require("../utils/jwt");

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "Authentication required" });

  try {
    const decoded = jwt.verifyToken(token);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
