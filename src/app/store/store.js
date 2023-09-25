import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

import usersReducer from "../features/user/usersSlice";
import postsReducer from "../features/post/postSlice";
import mediaReducer from "../features/media/mediaSlice";
import authReducer from "../features/auth/authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  media: mediaReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});
