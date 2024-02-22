const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "authHeader problem",
    });
  }

  const token = authHeader.split(" ")[2];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    console.log(decoded);
    req.userId = decoded.userId;
    console.log(decoded.userId);
    next();
  } catch (error) {
    res.status(403).json({
      message: "Verifying problem" + error,
    });
  }
};

module.exports = {
  authMiddleware,
};
