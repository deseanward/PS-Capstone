import React from "react";
import moment from "moment/moment";
import { PostItemContainer } from "./post-item.styles";
import Link from "../../ui/link/link.ui";

const PostItem = ({ post }) => {
  return (
    <PostItemContainer>
      <div className=''>{post.author}</div>
      <div className='text-sm mb-4'>
        {moment(post.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
      </div>
      <div className='mb-4'>{post.body}</div>

      <div className='w-fit self-end'>
        <Link to={`/posts/${post._id}`}>Edit</Link>
      </div>
    </PostItemContainer>
  );
};

export default PostItem;
