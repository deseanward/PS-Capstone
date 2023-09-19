import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],

  reducers: {
    setUsers: (state, action) => {
      state.push(action.payload);

      console.log("FROM REDUX: ", state.users);
      return state;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
