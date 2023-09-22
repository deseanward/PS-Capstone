import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setPosts } from "../../app/features/post/postSlice";

import * as postsService from "../../utils/posts/posts-service";

import PostItem from "../post-item/post-item.component";

import { PostDisplayContainer } from "./post-display.styles";

const PostDisplay = () => {
  const dispatch = useDispatch();

  const postItems = useSelector((state) => state.posts);
  console.log("POST ITEMS: ", postItems);

  const [posts, setPosts] = useState(postItems);

  // console.clear();

  const [postsLoaded, setPostsLoaded] = useState(false);

  // Get the posts from the database
  useEffect(() => {
    const fetchPosts = async () => {
      if (!postsLoaded) {
        try {
          const posts = await postsService.getPosts();
          if (posts.length) {
            dispatch(setPosts(posts));
          }
          setPostsLoaded(true);
        } catch (error) {
          console.log("Error fetching posts: ", error);
        }
      }
    };
    fetchPosts();
  }, [dispatch, postsLoaded]);

  return (
    <PostDisplayContainer>
      {postItems && postItems.length ? (
        postItems.map((post, idx) => {
          return <PostItem key={idx} post={post} />;
        })
      ) : (
        <h3>No posts to display.</h3>
      )}
    </PostDisplayContainer>
  );
};

export default PostDisplay;
