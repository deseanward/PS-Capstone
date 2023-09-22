import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as postsService from "../../utils/posts/posts-service";

import PostItem from "../post-item/post-item.component";

import { PostDisplayContainer } from "./post-display.styles";

const PostDisplay = () => {
  // Monitors state change of newly added posts add triggers a re-render
  const postItems = useSelector((state) => state.posts);

  const [posts, setPosts] = useState([]);

  // Get the posts from the database
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await postsService.getPosts();
        if (posts.length) {
          setPosts(posts);
        }
      } catch (error) {
        console.log("Error fetching posts: ", error);
      }
    };
    fetchPosts();
  }, [postItems]);

  return (
    <PostDisplayContainer>
      {posts && posts.length ? (
        posts.map((post, idx) => {
          return <PostItem key={idx} post={post} />;
        })
      ) : (
        <h3>No posts to display.</h3>
      )}
    </PostDisplayContainer>
  );
};

export default PostDisplay;
