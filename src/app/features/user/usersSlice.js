import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],

  reducers: {
    setUsers: (state, action) => {
      state.push(action.payload);

      console.log("FROM REDUX: ", state.users);
      return state;
    },

    deleteUser: (state, action) => {
      const id = action.payload._id;
      console.log("ID: ", id);
      try {
        const user = state.findIndex((user) => user._id === id);
        console.log("USER: ", user);
        if (user) {
          state.splice(user, 1);
          return user;
        }
      } catch (error) {
        console.log("An error occurred when attempting to delete user.", error);
      }
    },
  },
});

export const { setUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
