import userModel from "../models/user.model.js";
import { getToken } from "../utils/token.js";

export const googleAuthController = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      user = await userModel.create({ name, email });
    }
    let token = await getToken(user._id);
    res.cookies("token", token, {
      httpOnly: true,
      secure: false,
      samesite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
        message:"User is register",
        user
    })
  } catch (error) {
    return res.status(400).json({message:`Error in google siguo ${error}`})
  }
};
