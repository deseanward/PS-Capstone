import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import * as postsService from "../../utils/posts/posts-service";
import * as usersCtrl from "../../utils/users/users-service";

import { deletePost } from "../../app/features/post/postSlice";

import { PostItemContainer } from "./post-item.styles";
import Link from "../../ui/link/link.ui";
import Button from "../../ui/button/button.ui";
import Avatar from "../../ui/avatar/avatar.ui";
import { ConfirmPopover } from "../popover/popover.component";

const PostItem = ({ post }) => {
  const [showConfirm, setShowConfirm] = useState("cancel");
  const id = post._id;
  const authorId = post.authorId;
  const user = usersCtrl.getUser();
  // const user = useSelector(state => state.auth)

  // Verifies if the post belongs to the signed in user
  const isAuthor = authorId === user._id;

  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const post = await postsService.deletePost(id);
      if (!post) throw new Error("An error occured while creating your post");
      // const posts = await postsService.getPosts();
      dispatch(deletePost(post));
    } catch (error) {
      console.log("An error occurred when deleting the post", error);
    }
  };

  const handleConfirm = () => {
    handleDelete();
  };

  return (
    <PostItemContainer>
      <div className='flex gap-4 justify-between items-center mb-4'>
        <div className='flex gap-2 items-center'>
          <Avatar className='post' id={authorId} />
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
            onClick={() => setShowConfirm("true")}
          >
            Delete
          </Button>
        </div>
      </div>

      <div className='w-full m-auto opacity-20 mb-4'>
        <hr />
      </div>

      <div className='mb-4 '>{post.body}</div>
      <div id='postImg' className='max-w-[20em] m-auto mb-4'>
        <img src={post.imageUrl} className='rounded-lg' alt='' />
      </div>
      <ConfirmPopover
        show={showConfirm}
        onConfirm={handleConfirm}
        onCancel={setShowConfirm}
      />
    </PostItemContainer>
  );
};

export default PostItem;
