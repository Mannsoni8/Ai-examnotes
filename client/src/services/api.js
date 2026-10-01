import api from "../api/axiosinstance";
import { setUserData, setLoading } from "../redux/userSlice";

export const getCurrentUser = async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const res = await api.get("/auth/curr-user");

    dispatch(setUserData(res.data));
  } catch (error) {
    console.log("Error getting current user:", error);
    dispatch(setUserData(null));
  }
};

export const generateNotes = async (payload) => {
  try {
    const result = await api.post("/notes/generate-notes", payload);

    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
