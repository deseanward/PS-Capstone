import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "./utils/users/users-service";
import * as postsService from "./utils/posts/posts-service";
import { setPosts } from "./app/features/post/postSlice";

import "./App.css";
import NewOrderPage from "./pages/New-Order/new-order.page";
import AuthPage from "./pages/Auth/auth.page";
import OrderHistoryPage from "./pages/Order-History/order-history.page";
import Navbar from "./components/navbar/navbar.component";
import DefaultLayout from "./layout";
import UserHomePage from "./pages/User-Home/user-home.page";
import PostEditPage from "./pages/Post-Edit/post-edit.page";

function App() {
  const [user, setUser] = useState(getUser);
  // const dispatch = useDispatch();

  // Get the posts to the state from the database
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const posts = await postsService.getPosts();
  //       console.log("DB POSTS: ", posts);
  //       if (posts.length) {
  //         dispatch(setPosts(posts));

  //       }

  //     } catch (error) {
  //       console.log("Error fetching posts: ", error);
  //     }
  //   };
  //   fetchPosts();
  // }, [dispatch]);

  return (
    <div className='app'>
      {user ? (
        <>
          <Navbar setUser={setUser} />
          <DefaultLayout>
            <Routes>
              <Route path='/' element={<UserHomePage />}></Route>
              <Route path='/posts/:id' element={<PostEditPage />}></Route>
              <Route path='/orders/new' element={<NewOrderPage />}></Route>
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
