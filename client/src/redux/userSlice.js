import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    loading: true,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateCreadits: (state, action) => {
      if (state.userData) {
        state.userData.credits = action.payload;
      }
    },
  },
});

export const { setUserData, setLoading, updateCreadits } = userSlice.actions;
export default userSlice.reducer;
