import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment/moment";
import * as postsService from "../../utils/posts/posts-service";
import { getUser } from "../../utils/users/users-service";

import { deletePost } from "../../app/features/post/postSlice";

import { PostItemContainer } from "./post-item.styles";
import Link from "../../ui/link/link.ui";
import Button from "../../ui/button/button.ui";
import Avatar from "../../ui/avatar/avatar.ui";

const PostItem = ({ post }) => {
  const id = post._id;
  const authorId = post.authorId;
  const userId = getUser()._id;

  // Verifies if the post belongs to the signed in user
  const isAuthor = authorId === userId;

  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const post = await postsService.deletePost(id);

      // const posts = await postsService.getPosts();
      dispatch(deletePost(post));
    } catch (error) {
      console.log("An error occurred when deleting the post", error);
    }
  };
  return (
    <PostItemContainer>
      <div className='flex gap-4 justify-between items-center mb-4'>
        <div className='flex gap-2 items-center'>
          <Avatar className='post' />
          <div className='pt-2'>
            <div className=''>{post.author}</div>
            <div className='text-sm mb-4'>
              {moment(post.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}
            </div>
          </div>
        </div>
        <div className={isAuthor ? "flex gap-4 w-fit" : "hidden"}>
          <Link to={`/posts/${post._id}`}>Edit</Link>
          <Button
            className='delete flex items-center justify-center border-2 rounded-lg cursor-pointer px-[0.75em] pb-[0.25em]'
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
      <div className='mb-4'>{post.body}</div>
      <div id='postImg' className='max-w-[20em] m-auto'>
        <img src={post.imageUrl} alt='' />
      </div>
    </PostItemContainer>
  );
};

export default PostItem;
