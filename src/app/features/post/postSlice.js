import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: [],

  reducers: {
    setPosts: (state, action) => {
      state.unshift(action.payload);
    },

    updatePost: (state, action) => {
      const existingPost = state.find(
        (post) => post._id === action.payload._id
      );

      console.log("Existing: ", existingPost);
    },

    deletePost: (state, action) => {
      const existingPost = state.find(
        (post) => post._id === action.payload._id
      );

      state.splice(existingPost, 1);

    },
  },
});

export const { setPosts, getPosts, updatePost, deletePost } =
  postsSlice.actions;
export default postsSlice.reducer;
