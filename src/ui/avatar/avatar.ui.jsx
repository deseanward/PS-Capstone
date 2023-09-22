import React from "react";
import { AvatarContainer, AvatarImage } from "./avatar.ui.styles";

const Avatar = ({ className }) => {
  return (
    <AvatarContainer>
      <AvatarImage className={className} src='/images/avatar-placeholder.jpg' />
    </AvatarContainer>
  );
};

export default Avatar;
