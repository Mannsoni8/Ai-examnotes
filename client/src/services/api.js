import api from "../api/axiosinstance";
import { setUserData } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
  try {
    const re = await api.get("/curr-user");
    console.log(re.data);
    dispatch(setUserData(re.data));
  } catch (error) {
    console.log("errorn in getting current user", error);
  }
};
