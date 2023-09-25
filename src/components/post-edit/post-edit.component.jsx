import React, { useEffect, useState } from "react";

import { persistStore } from "redux-persist";
import store from "../../app/store/store";

import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../utils/users/users-service";
import * as postsService from "../../utils/posts/posts-service";

import { updatePost } from "../../app/features/post/postSlice";

import {
  InputSection,
  PostSection,
  PostInputContainer,
} from "./post-edit.styles";

import Textarea from "../../ui/textarea/textarea.ui";
import UploadIcon from "../../ui/upload-icon/upload-icon.ui";
import { BsFillImageFill } from "react-icons/bs";
import { SiAudiomack } from "react-icons/si";
import { CgAttachment } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import Button from "../../ui/button/button.ui";
import { useNavigate, useParams } from "react-router-dom";
import UploadWidget from "../upload-widget/upload-widget.component";

const PostInput = () => {
  const user = getUser();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [post, setPost] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getThePost = async () => {
      // Fetch the post from the database
      const post = await postsService.getPost(id);
      setPost(post);
    };
    getThePost();
  }, [dispatch, id]);

  const initialPostData = {
    _id: id,
    authorId: user._id,
    author: user.name,
    body: post.body,
    imageUrl: post.imageUrl,
    videoUrl: post.videoUrl,
    attachmentUrl: post.attachmentUrl,
    audioUrl: post.audioUrl,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
  };

  const [postData, setPostData] = useState(initialPostData);

  console.log("POST DATA", postData);

  // Grab the media currently saved in the state
  const media = useSelector((state) => state.media);
  let persistor = persistStore(store);

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

  // Set the inital image url if currently exists
  useEffect(() => {
    setPostData({ ...postData, imageUrl: post.imageUrl });
  }, [postData]);

  useEffect(() => {
    // Update the postData with uploaded media info
    if (media.name && media.url)
      setPostData({ ...postData, [media.name]: media.url });
    else setPostData({ ...postData, [postData.imageUrl]: post.imageUrl });
  }, [media]);

  return (
    <PostInputContainer onSubmit={handleSubmit}>
      <InputSection>
        <Textarea
          name='body'
          size={32}
          rows={5}
          type='post'
          value={post.body}
          onChange={handleChange}
          placeHolder={post.body}
          className='w-[64em] bg-white'
        ></Textarea>
      </InputSection>

      <hr className='border-b-2' />

      <PostSection>
        <UploadWidget name='imageUrl'>
          <UploadIcon name='image'>
            {postData.imageUrl ? (
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
