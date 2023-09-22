import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

import usersReducer from "../features/user/usersSlice";
import postsReducer from "../features/post/postSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  users: usersReducer,
  posts: postsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
});
