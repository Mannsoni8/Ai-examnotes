import config from "../config/config.js";
import jwt from "jsonwebtoken";
export const authMiddleware = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      return res.status(400).json({
        messahe: "Token is not found",
      });
    }
    let verifyToken = jwt.verify(token, config.JWT_SECRET);
    if (!verifyToken) {
      return res.status(400).json({
        messahe: "User does not have valid token",
      });
    }
    req.userId = verifyToken.userId;
    next();
  } catch (error) {
     return res.status(500).json({
        messahe: `Erro in auth ${error}`,
      });
  }
};
