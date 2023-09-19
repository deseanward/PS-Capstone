import React from "react";
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
  return (
    <PostInputContainer>
      <InputSection>
        <Avatar />
        <Input size={32} type='post' />
      </InputSection>

      <hr className='border-b-2' />

      <PostSection>
        <UploadIcon>
          <BsFillImageFill size='42' />
          Image
        </UploadIcon>

        <UploadIcon>
          <GoVideo size={42} />
          Video
        </UploadIcon>

        <UploadIcon>
          <CgAttachment size={42} />
          Attachment
        </UploadIcon>

        <UploadIcon>
          <SiAudiomack size={42} />
          Audio
        </UploadIcon>

        <Button>Post</Button>
      </PostSection>
    </PostInputContainer>
  );
};

export default PostInput;
