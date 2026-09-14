import api from "../api/axiosinstance";
import { setUserData, setLoading } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const re = await api.get("/curr-user");
    dispatch(setUserData(re.data));
  } catch (error) {
    console.log("Error getting current user:", error);
    dispatch(setUserData(null));
  }
};
