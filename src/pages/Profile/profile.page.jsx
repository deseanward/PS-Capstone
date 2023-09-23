import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as usersCtrl from "../../utils/users/users-service";

import {
  ProfileHeaderSection,
  ProfilePageContainer,
  ProfileSection,
} from "./profile.styles";

import Avatar from "../../ui/avatar/avatar.ui";
import Textarea from "../../ui/textarea/textarea.ui";
import { AiFillEdit, AiFillCloseSquare } from "react-icons/ai";

const ProfilePage = () => {
  const userId = usersCtrl.getUser()._id;
  const profile = useParams();

  const [user, setUser] = useState({});
  const [editBio, setEditBio] = useState(false);
  const isEdittable = userId === profile.id;

  const initialFormData = {
    bio: user.bio,
  };

  const [formData, setFormData] = useState(initialFormData);

  //   const handleEditBio = () => {
  //     setEditBio(!editBio);
  //   };

  const handleOnChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });

    switch (e.target.name) {
      case "bio":
        user.bio = e.target.value;
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const getTheUser = async () => {
      try {
        const foundUser = await usersCtrl.getUserFromDB(profile.id);
        setUser(foundUser);
      } catch (error) {
        console.log("There was an error fetching the user", error);
      }
    };
    getTheUser();
  }, []);

  return (
    <ProfilePageContainer>
      <ProfileHeaderSection id='header'>
        <Avatar className='profile' />
        <h1>{user.name}</h1>
      </ProfileHeaderSection>

      <ProfileSection id='about-me'>
        <div>
          <h2 className='flex gap-2 items-center'>
            About Me
            <span
              className={isEdittable ? "block" : "hidden"}
              onClick={() => setEditBio(!editBio)}
            >
              <AiFillEdit
                className={!editBio ? "block cursor-pointer" : "hidden"}
              />
              <AiFillCloseSquare
                className={editBio ? "block cursor-pointer" : "hidden"}
              />
            </span>
          </h2>
          <span className={!editBio ? "block" : "hidden"}>{user.bio}</span>
        </div>
        <Textarea
          name='bio'
          rows={5}
          placeHolder={user.bio}
          className={editBio ? "block" : "hidden"}
          value={formData.bio}
          onChange={handleOnChange}
        />
      </ProfileSection>
    </ProfilePageContainer>
  );
};

export default ProfilePage;
