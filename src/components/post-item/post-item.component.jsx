import React from "react";
import moment from "moment/moment";
import * as postsService from "../../utils/posts/posts-service";

import { deletePost } from "../../app/features/post/postSlice";

import { PostItemContainer } from "./post-item.styles";
import Link from "../../ui/link/link.ui";
import Button from "../../ui/button/button.ui";
import { useDispatch } from "react-redux";

const PostItem = ({ post }) => {
  const id = post._id;

  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      console.log("Attemping to delete...");
      const post = await postsService.deletePost(id);

      // const posts = await postsService.getPosts();
      dispatch(deletePost(post));
    } catch (error) {
      console.log("An error occurred when deleting the post", error);
    }
  };
  return (
    <PostItemContainer>
      <div className=''>{post.author}</div>
      <div className='text-sm mb-4'>
        {moment(post.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
      </div>
      <div className='mb-4'>{post.body}</div>

      <div className='flex gap-4 w-fit self-end'>
        <Link to={`/posts/${post._id}`}>Edit</Link>
        <Button
          className='delete flex items-center justify-center border-2 rounded-lg cursor-pointer px-[0.75em] pb-[0.25em]'
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </PostItemContainer>
  );
};

export default PostItem;
