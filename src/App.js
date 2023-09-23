import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { getUser } from "./utils/users/users-service";

import "./App.css";
import NewOrderPage from "./pages/New-Order/new-order.page";
import AuthPage from "./pages/Auth/auth.page";
import Navbar from "./components/navbar/navbar.component";
import DefaultLayout from "./layout";
import UserHomePage from "./pages/User-Home/user-home.page";
import PostEditPage from "./pages/Post-Edit/post-edit.page";
import ProfilePage from "./pages/Profile/profile.page";

function App() {
  const [user, setUser] = useState(getUser);
  
  return (
    <div className='app'>
      {user ? (
        <>
          <Navbar setUser={setUser} />
          <DefaultLayout>
            <Routes>
              <Route path='/' element={<UserHomePage />}></Route>
              <Route path='/posts/:id' element={<PostEditPage />}></Route>
              <Route path='/profile/:id' element={<ProfilePage />}></Route>
            </Routes>
          </DefaultLayout>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
