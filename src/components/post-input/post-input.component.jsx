import React, { useEffect, useState } from "react";

import { persistStore } from "redux-persist";
import store from "../../app/store/store";

import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../utils/users/users-service";
import * as postsService from "../../utils/posts/posts-service";
import * as usersService from "../../utils/users/users-service";

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
  // const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let persistor = persistStore(store);
  const media = useSelector((state) => state.media);

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
  const [selecting, setSelecting] = useState(false);
  // Grab the media currently saved in the state

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSelecting(false);
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
    if (selecting) {
      setPostData({ ...postData, [media.name]: media.url });
    }
    persistor.purge(["mediaSlice"]);
  }, [media, selecting]);

  return (
    <PostInputContainer onSubmit={handleSubmit}>
      <InputSection>
        <Avatar id={user._id} />
        <Input
          name='body'
          size={32}
          type='post'
          value={postData.body}
          onChange={handleChange}
        />
      </InputSection>

      <div className='w-[90%] m-auto opacity-20'>
        <hr />
      </div>

      <PostSection onClick={() => setSelecting(true)}>
        <UploadWidget name='imageUrl'>
          <UploadIcon name='image'>
            {postData.imageUrl.length ? (
              <span className='w-full md:w-12'>
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

        <Button className='submit'>Post</Button>
      </PostSection>
    </PostInputContainer>
  );
};

export default PostInput;
