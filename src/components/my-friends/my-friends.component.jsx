import React, { useEffect, useState } from "react";

import * as usersService from "../../utils/users/users-service";

import { MyFriendsContainer, ProfileSection } from "./my-friends.styles";
import Avatar from "../../ui/avatar/avatar.ui";

import { BsFillPersonFill } from "react-icons/bs";
// import { SlLocationPin } from "react-icons/sl";
// import { MdWorkOutline } from "react-icons/md";
// import { AiFillLinkedin, AiFillEdit } from "react-icons/ai";
// import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const MyFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      // const myFriends = await usersService.getFriends();
      // setFriends(myFriends);
      // const user = useSelector((state) => state.auth);
      console.log("FRIENDS IN MY FRIENDS: ", friends);
    };

    getFriends();
  }, []);

  return (
    <MyFriendsContainer>
      <h3 className='pb-2 text-xl'>Holla! @Friends</h3>
      {friends.length ? (
        friends.map((friend) => (
          <div key={friend._id}>
            <ProfileSection id='Info' className='hover:bg-slate-800'>
              <Link className='flex gap-2' to={`/profile/${friend._id}`}>
                <Avatar id={friend._id} />
                <span className='name'>
                  <h3 className='mb-0 text-2xl'>{friend.name}</h3>
                  <span className='text-sm'>2 Friends</span>
                </span>
              </Link>

              <span className='icon cursor-pointer'>
                <BsFillPersonFill size={28} />
              </span>
            </ProfileSection>

            <div className='w-[90%] m-auto opacity-20'>
              <hr />
            </div>
          </div>
        ))
      ) : (
        <h3>No Friends Added</h3>
      )}
    </MyFriendsContainer>
  );
};

export default MyFriends;
