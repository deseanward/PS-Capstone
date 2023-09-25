import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { persistStore } from "redux-persist";
import store from "../../app/store/store";
import { deleteUser } from "../../app/features/user/usersSlice";

import * as usersCtrl from "../../utils/users/users-service";

import {
  ProfileHeaderSection,
  ProfilePageContainer,
  ProfileSection,
} from "./profile.styles";

import Avatar from "../../ui/avatar/avatar.ui";
import Textarea from "../../ui/textarea/textarea.ui";
import { AiFillEdit, AiFillCloseSquare } from "react-icons/ai";
import UploadWidget from "../../components/upload-widget/upload-widget.component";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/button/button.ui";

import { ConfirmPopover } from "../../components/popover/popover.component";
import { setAuth } from "../../app/features/auth/authSlice";
import { setMedia } from "../../app/features/media/mediaSlice";
import { BsFillPersonPlusFill } from "react-icons/bs";

const ProfilePage = () => {
  let persistor = persistStore(store);
  const dispatch = useDispatch();

  const userId = usersCtrl.getUser()._id;
  const profile = useParams();

  const navigate = useNavigate();

  // Grab the media currently saved in the state
  const media = useSelector((state) => state.media);

  const [user, setUser] = useState({});
  const [editBio, setEditBio] = useState(false);
  const isEdittable = userId === profile.id;
  const [showConfirm, setShowConfirm] = useState("cancel");

  const initialFormData = {
    _id: userId,
    avatar: user.avatar,
    bio: user.bio,
  };

  const [formData, setFormData] = useState(initialFormData);

  // Handle the content/value changing of form fields in profile
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Updates the on-screen display of bio  when updating
    switch (e.target.name) {
      case "bio":
        user.bio = e.target.value;
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a copy of the postData
      const userFormData = { ...formData };
      console.log("USER DATA", userFormData);

      // Calling post service create post function
      const post = await usersCtrl.updateUser(userFormData);
      console.log("USER UPDATED:", post);
      if (!post) throw new Error("An error occured while creating your post");

      // Add the post to the app's state
      // dispatch(updatePost(post));

      setFormData(initialFormData);
      dispatch(setMedia({ name: null, url: null }));
      navigate("/");
    } catch (error) {
      console.log("An error occured when posting to the database", error);
    }
  };

  const handleDelete = async () => {
    try {
      const user = await usersCtrl.deleteUser(userId);
      if (user) {
        console.log("DELETED USER: ", user);
        dispatch(deleteUser(user));

        persistor.purge();
      } else console.log("USER WAS NOT DELETED");
    } catch (error) {
      console.log("An error occurred when deleting the post", error);
    }
    persistor.purge();
    usersCtrl.logOut();
    dispatch(setAuth({}));
    navigate("/");
  };

  const handleConfirm = () => {
    setShowConfirm("true");
  };

  //* ----- USE EFFECT TO FETCH USER FROM DATABASE ---- *//
  useEffect(() => {
    const getTheUser = async () => {
      try {
        // Fetch the user profile from the database
        const foundUser = await usersCtrl.getUserFromDB(profile.id);
        setUser(foundUser);
      } catch (error) {
        console.log("There was an error fetching the user", error);
      }
    };
    getTheUser();
  }, []);

  //* ----- USE EFFECT TO UPDATE FORM DATA WITH IMAGE CHANGE
  useEffect(() => {
    // Update the formData with uploaded media info
    setFormData({ ...formData, [media.name]: media.url });
    user.avatar = media.url;
  }, [media, user]);

  return (
    <ProfilePageContainer>
      <ProfileHeaderSection id='header'>
        <div>
          {isEdittable ? (
            <UploadWidget
              name='avatar'
              type='edit'
              className='flex flex-col items-center gap-2 cursor-pointer'
            >
              <Avatar type='edit' id={profile.id} className='profile' />
              <h3>Change Photo</h3>
            </UploadWidget>
          ) : (
            <div className='flex gap-4'>
              <Avatar id={profile.id} className='profile' />
              <BsFillPersonPlusFill size={32} />
            </div>
          )}
        </div>
        <h1>{user.name} </h1>
      </ProfileHeaderSection>

      <ProfileSection id='about-me'>
        <div>
          <h2 className='flex gap-2 items-center'>
            About Me
            {/* Edit / Close */}
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

          {/* Bio / Edit */}
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

      <ProfileSection className='flex gap-2 justify-end'>
        <Button
          className='inverted cancel'
          onClick={() => {
            persistor.purge(["mediaSlice"]);
            navigate("/");
          }}
        >
          Cancel
        </Button>
        <Button className='inverted' onClick={handleSubmit}>
          Update
        </Button>
        <Button className='delete' onClick={handleConfirm}>
          Delete Profile
        </Button>
      </ProfileSection>
      <ConfirmPopover
        show={showConfirm}
        onConfirm={handleDelete}
        onCancel={setShowConfirm}
      />
    </ProfilePageContainer>
  );
};

export default ProfilePage;
