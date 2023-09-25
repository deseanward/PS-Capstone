import React, { useEffect, useState } from "react";

import * as usersCtrl from "../../utils/users/users-service";

import { AvatarContainer, AvatarImage } from "./avatar.ui.styles";
import { useSelector } from "react-redux";

const Avatar = ({ className, type = "", id }) => {
  const placeholder = "/images/avatar-placeholder.jpg";
  const [src, setSrc] = useState(placeholder);
  const updatedPhoto = useSelector((state) => state.media);

  useEffect(() => {
    // if (updatedPhoto) setSrc(updatedPhoto.url);

    const getAvatarImage = async () => {
      try {
        //Get the current User from the database
        const user = await usersCtrl.getUserFromDB(id);
        console.log("PROFILE USER: ", user);

        type === "edit" // If loggedin user and in profile view/edit
          ? user.avatar // If avatar currently exists in database
            ? setSrc(user.avatar)
            : updatedPhoto.url
            ? setSrc(updatedPhoto.url)
            : setSrc(placeholder)
          : user.avatar // If not loggedin, but viewing a user's profile and  if avatar exists
          ? setSrc(user.avatar)
          : setSrc(placeholder);
      } catch (error) {
        console.log("AN ERROR OCCURED: ", error);
      }
    };

    getAvatarImage();
  }, [updatedPhoto, id, type]);
  console.log("SRC", src);
  return (
    <AvatarContainer>
      <AvatarImage className={className} src={src} />
    </AvatarContainer>
  );
};

export default Avatar;
