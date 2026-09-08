import api from "../api/axiosinstance";

export const getCurrentUser = async (dispatch) => {
  try {
    const re = await api.get("/curr-user");
    console.log(re.data);
  } catch (error) {
    console.log("errorn in getting current user", error);
  }
};
