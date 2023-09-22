import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../utils/users/users-service";
import * as postsService from "../../utils/posts/posts-service";

import { updatePost } from "../../app/features/post/postSlice";

import {
  InputSection,
  PostSection,
  PostInputContainer,
} from "./post-edit.styles";

import Avatar from "../../ui/avatar/avatar.ui";
import Textarea from "../../ui/textarea/textarea.ui";
import UploadIcon from "../../ui/upload-icon/upload-icon.ui";
import { BsFillImageFill } from "react-icons/bs";
import { SiAudiomack } from "react-icons/si";
import { CgAttachment } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import Button from "../../ui/button/button.ui";
import { useNavigate, useParams } from "react-router-dom";

const PostInput = () => {
  const user = getUser();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [post, setPost] = useState({});

  const navigate = useNavigate();

  // const post = useSelector((state) =>
  //   state.posts.find((post) => post._id === id)
  // );
  // console.log('IS THE POST READY: ', post)

  useEffect(() => {
    const getThePost = async () => {
      const post = await postsService.getPost(id);
      setPost(post);
    };
    getThePost();
  }, [dispatch, id]);

  const initialPostData = {
    _id: id,
    authorId: user._id,
    author: user.name,
    body: "",
    imageUrl: post.imageUrl,
    videoUrl: post.videoUrl,
    attachmentUrl: post.attachmentUrl,
    audioUrl: post.audioUrl,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  };

  const [postData, setPostData] = useState(initialPostData);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a copy of the postData
      const userPostData = { ...postData };


      // Calling post service create post function
      const post = await postsService.updatePost(userPostData);
      if (!post) throw new Error("An error occured while creating your post");

      // Add the post to the app's state
      // dispatch(updatePost(post));

      setPostData(initialPostData);

      navigate("/");
    } catch (error) {
      console.log("An error occured when posting to the database", error);
    }
  };

  return (
    <PostInputContainer onSubmit={handleSubmit}>
      <InputSection>
        <Avatar name='avatar' src='' />
        <Textarea
          name='body'
          size={32}
          rows={5}
          type='post'
          value={postData.body}
          onChange={handleChange}
          placeHolder={post.body}
          className='text-white w-[64em]'
        ></Textarea>
      </InputSection>

      <hr className='border-b-2' />

      <PostSection>
        <UploadIcon name='image'>
          <BsFillImageFill size='42' />
          Image
        </UploadIcon>

        <UploadIcon name='video'>
          <GoVideo size={42} />
          Video
        </UploadIcon>

        <UploadIcon name='attachment'>
          <CgAttachment size={42} />
          Attachment
        </UploadIcon>

        <UploadIcon name='audio'>
          <SiAudiomack size={42} />
          Audio
        </UploadIcon>

        <Button type='submit'>Update</Button>
      </PostSection>
    </PostInputContainer>
  );
};

export default PostInput;
