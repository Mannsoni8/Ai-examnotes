import userModel from "../models/user.model.js";
import { getToken } from "../utils/token.js";

export const googleAuthController = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await userModel.findOne({ email });
    if(!user){
        user = await userModel.create({name,email})
    }
    const token = await getToken(user._id)
  } catch (error) {}
};
