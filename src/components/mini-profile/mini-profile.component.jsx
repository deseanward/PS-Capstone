import React from "react";

import * as usersService from "../../utils/users/users-service";

import { MiniProfileContainer, ProfileSection } from "./mini-profile.styles";
import Avatar from "../../ui/avatar/avatar.ui";

import { BsFillPersonFill, BsGithub } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MdWorkOutline } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const MiniProfile = () => {
  const user = usersService.getUser();

  return (
    <MiniProfileContainer>
      <ProfileSection id='Info'>
        <Avatar />
        <span className='name'>
          <h3 className='mb-0 text-2xl'>{user.name}</h3>
          <span className='text-sm'>2 Friends</span>
        </span>

        <span className='icon'>
          <BsFillPersonFill size={28} />
        </span>
      </ProfileSection>

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
