import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],

  reducers: {
    setPosts: (state, action) => {
      console.log("PAYLOAD: ", action.payload);
      state.unshift(action.payload);
    },
  },
});

export const { setPosts, getPosts } = postsSlice.actions;
export default postsSlice.reducer;
