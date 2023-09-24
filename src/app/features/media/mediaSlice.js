import { createSlice } from "@reduxjs/toolkit";

export const mediaSlice = createSlice({
  name: "media",
  initialState: {
    name: null,
    url: null,
  },

  reducers: {
    setMedia: (state, action) => {
      const { name, url } = action.payload;
      state.name = name;
      state.url = url;
    },
  },
});

export const { setMedia } = mediaSlice.actions;
export default mediaSlice.reducer;
