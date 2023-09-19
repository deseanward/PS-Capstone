import React, { useEffect } from "react";
import PostItem from "../post-item/post-item.component";
import { PostDisplayContainer } from "./post-display.styles";

const PostDisplay = ({ post }) => {
  const postItems = [];

  useEffect(() => {
    if (post) {
      postItems.push(post.postData);
      console.log("POST ITEMS:", postItems[0]);
    }
  }, [postItems, post]);

  return (
    <PostDisplayContainer>
      {postItems ? (
        postItems.map((post, idx) => {
          return <PostItem key={idx} post={post.postData} />;
        })
      ) : (
        <h3>No Posts To Display</h3>
      )}
    </PostDisplayContainer>
  );
};

export default PostDisplay;
