import React, { useState } from "react";
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

const PostInput = () => {
  const initialPostData = {
    message: "",
    imageUrl: "",
    videoUrl: "",
    attachmentUrl: "",
    audioUrl: "",
    author: '',
  };

  const [postData, setPostData] = useState(initialPostData);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({postData})
  };

  return (
    <PostInputContainer onSubmit={handleSubmit}>
      <InputSection>
        <Avatar name='avatar' src='' />
        <Input
          name='message'
          size={32}
          type='post'
          value={postData.message}
          onChange={handleChange}
        />
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

        <Button type='submit'>Post</Button>
      </PostSection>
    </PostInputContainer>
  );
};

export default PostInput;
