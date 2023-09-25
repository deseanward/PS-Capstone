import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    email: "",
  },

  reducers: {
    setAuth: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    deletePost: (state, action) => {
      const existingPost = state.find(
        (post) => post._id === action.payload._id
      );

      state.splice(existingPost, 1);
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
