import React from "react";
import { AvatarContainer, AvatarImage } from "./avatar.ui.styles";

const Avatar = ({ className, src = '/images/avatar-placeholder.jpg' }) => {
  return (
    <AvatarContainer>
      <AvatarImage className={className} src={src} />
    </AvatarContainer>
  );
};

export default Avatar;
