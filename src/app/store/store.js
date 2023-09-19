import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/usersSlice";

export default configureStore({
  reducer: {
    users: userReducer,
  },
});
