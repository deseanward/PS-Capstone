import React, { useEffect, useState } from "react";

import * as usersCtrl from "../../utils/users/users-service";

import { MiniProfileContainer, ProfileSection } from "./mini-profile.styles";
import Avatar from "../../ui/avatar/avatar.ui";

import { BsGithub } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MdWorkOutline } from "react-icons/md";
import { AiFillLinkedin, AiFillEdit } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const MiniProfile = () => {
  const user = usersCtrl.getUser();

  // const user = useSelector((state) => state.auth);

  return (
    <MiniProfileContainer>
      <Link to={`/profile/${user._id}`}>
        <ProfileSection id='Info' className='hover:bg-slate-800'>
          <Avatar id={user._id} />
          <span className='name'>
            <h3 className='mb-0 text-2xl'>{user.name}</h3>
            <span className='text-sm'>2 Friends</span>
          </span>

          <span className='icon cursor-pointer'>
            <AiFillEdit size={28} />
          </span>
        </ProfileSection>
      </Link>

      <div className='w-[90%] m-auto opacity-20'>
        <hr />
      </div>

      <ProfileSection id='location' className='flex flex-col gap-2'>
        <span className='w-full flex items-center gap-2'>
          <SlLocationPin size={28} />
          <span className='mb-0 text-gray-400'>Somewhere in America, USA</span>
        </span>

        <span className='w-full flex items-center gap-2'>
          <MdWorkOutline size={28} />
          <span className='mb-0 text-gray-400'>I Build Stuff @Per Scholas</span>
        </span>
      </ProfileSection>

      <div className='w-[90%] m-auto opacity-20'>
        <hr />
      </div>

      <ProfileSection id='location' className='flex flex-col gap-2'>
        <span className='w-full flex items-center justify-between'>
          <span>Who's view your profile</span>
          <span className='mb-0 text-gray-400'>6725</span>
        </span>

        <span className='w-full flex items-center justify-between'>
          <span>Your number of posts</span>
          <span className='mb-0 text-gray-400'>124</span>
        </span>
      </ProfileSection>

      <div className='w-[90%] m-auto opacity-20'>
        <hr />
      </div>

      <ProfileSection className='flex flex-col gap-2'>
        <h3 className='text-2xl self-start'>Social Hub</h3>

        <span className='w-full flex items-center justify-between'>
          <AiFillLinkedin size={28} className='mr-2' />
          <span className='mr-auto'>LinkedIn</span>
          <FiExternalLink size={14} />
        </span>

        <span className='w-full flex items-center justify-between'>
          <BsGithub size={28} className='mr-2' />
          <span className='mr-auto'>Github</span>
          <FiExternalLink size={14} />
        </span>

        <span className='icon'></span>
      </ProfileSection>
    </MiniProfileContainer>
  );
};

export default MiniProfile;
