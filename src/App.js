import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./app/features/auth/authSlice";

import { getUser } from "./utils/users/users-service";

import "./App.css";
import AuthPage from "./pages/Auth/auth.page";
import Navbar from "./components/navbar/navbar.component";
import DefaultLayout from "./layout";
import UserHomePage from "./pages/User-Home/user-home.page";
import PostEditPage from "./pages/Post-Edit/post-edit.page";
import ProfilePage from "./pages/Profile/profile.page";

function App() {
  const loggedIn = getUser();
  console.log("LOGGED IN: ", loggedIn);
  const dispatch = useDispatch();

  // Dispatch the current user
  loggedIn
    ? dispatch(setAuth(loggedIn))
    : dispatch(setAuth({ name: null, email: null }));

  const user = useSelector((state) => state.auth);

  return (
    <div className='app'>
      {user.name && user.email ? (
        <>
          <Navbar />
          <DefaultLayout>
            <Routes>
              <Route path='/' element={<UserHomePage />}></Route>
              <Route path='/posts/:id' element={<PostEditPage />}></Route>
              <Route path='/profile/:id' element={<ProfilePage />}></Route>
            </Routes>
          </DefaultLayout>
        </>
      ) : (
        <AuthPage />
      )}
    </div>
  );
}

export default App;
