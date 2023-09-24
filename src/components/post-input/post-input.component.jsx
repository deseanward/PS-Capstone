import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../utils/users/users-service";
import * as postsService from "../../utils/posts/posts-service";

import { setPosts } from "../../app/features/post/postSlice";

import {
  InputSection,
  PostSection,
  PostInputContainer,
} from "./post-input.styles";

import Avatar from "../../ui/avatar/avatar.ui";
import Input from "../../ui/input/input.ui";
import UploadIcon from "../../ui/upload-icon/upload-icon.ui";
import { BsFillImageFill } from "react-icons/bs";
import { SiAudiomack } from "react-icons/si";
import { CgAttachment } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import Button from "../../ui/button/button.ui";
import UploadWidget from "../upload-widget/upload-widget.component";

const PostInput = () => {
  const user = getUser();
  const dispatch = useDispatch();

  const initialPostData = {
    body: "",
    imageUrl: "",
    videoUrl: "",
    attachmentUrl: "",
    audioUrl: "",
    author: user.name,
    authorId: user._id,
  };

  const [postData, setPostData] = useState(initialPostData);

  console.log("Rendered...");
  const media = useSelector((state) => state.media);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a copy of the postData
      const userPostData = { ...postData };

      // Calling post service create post function
      const post = await postsService.createPost(userPostData);

      if (!post) throw new Error("An error occured while creating your post");

      // Add the post to the app's state
      dispatch(setPosts(post));

      setPostData(initialPostData);
    } catch (error) {
      console.log("An error occured when posting to the database", error);
    }
  };

  useEffect(() => {
    // Update the postData with uploaded media info
    setPostData({ ...postData, [media.name]: media.url });
  }, [media]);

  return (
    <PostInputContainer onSubmit={handleSubmit}>
      <InputSection>
        <Avatar />
        <Input
          name='body'
          size={32}
          type='post'
          value={postData.body}
          onChange={handleChange}
        />
      </InputSection>

      <hr className='border-b-2' />

      <PostSection>
        <UploadWidget name='imageUrl'>
          <UploadIcon name='image'>
            {postData.imageUrl.length ? (
              <span className='w-full md:w-12 bg-black'>
                <img src={postData.imageUrl} alt='' />
              </span>
            ) : (
              <span>
                <BsFillImageFill size='42' />
              </span>
            )}
            Image
          </UploadIcon>
        </UploadWidget>

        <UploadWidget name='videoUrl'>
          <UploadIcon name='video'>
            <GoVideo size={42} />
            Video
          </UploadIcon>
        </UploadWidget>

        <UploadWidget name='attachmentUrl'>
          <UploadIcon name='attachment'>
            <CgAttachment size={42} />
            Attachment
          </UploadIcon>
        </UploadWidget>

        <UploadWidget name='audioUrl'>
          <UploadIcon name='audio'>
            <SiAudiomack size={42} />
            Audio
          </UploadIcon>
        </UploadWidget>

        <Button type='submit'>Post</Button>
      </PostSection>
    </PostInputContainer>
  );
};

export default PostInput;
