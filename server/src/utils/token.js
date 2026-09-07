import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const getToken = async (userId) => {
  try {
    const token = jwt.sign({ userId }, config.JWT_SECRET, { expiresIn: "7d" });
    return token;
  } catch (error) {
    console.log("Error in geting token", error);
  }
};
