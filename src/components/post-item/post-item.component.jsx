import React from "react";
import { PostItemContainer } from "./post-item.styles";

const PostItem = ({ post }) => {
  console.log('POST ITEM FROM POST: ', post)
  return (
    <PostItemContainer>
      <div>{post.author}</div>
      <div>{post.message}</div>
    </PostItemContainer>
  );
};

export default PostItem;
