import React, { useEffect, useState } from "react";

import * as usersService from "../../utils/users/users-service";

import { NewMembersContainer, ProfileSection } from "./new-members.styles";
import Avatar from "../../ui/avatar/avatar.ui";

import { BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const NewMembers = () => {
  const myProfile = usersService.getUser();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getTheUsers = async () => {
      const allUsers = await usersService.getAllUsers();
      setUsers(allUsers);
      // const user = useSelector((state) => state.auth);
    };

    getTheUsers();
  }, []);

  useEffect(() => {
    console.log("MY PROFILE", myProfile);
  }, [myProfile]);

  return (
    <NewMembersContainer>
      <h3 className='pl-4 pt-2 text-xl'>Latest Members</h3>
      {users ? (
        users.map((user) => (
          <div key={user._id}>
            <ProfileSection id='Info' className='hover:bg-slate-800'>
              <Link className='flex gap-2' to={`/profile/${user._id}`}>
                <Avatar id={user._id} />
                <span className='name'>
                  <h3 className='mb-0 text-2xl'>{user.name}</h3>
                  <span className='text-sm'>2 Friends</span>
                </span>
              </Link>

              <span
                className='icon cursor-pointer'
                onClick={() => myProfile.friends.push(user._id)}
              >
                <BsFillPersonPlusFill size={28} />
              </span>
            </ProfileSection>

            <div className='w-[90%] m-auto opacity-20'>
              <hr />
            </div>
          </div>
        ))
      ) : (
        <h2>No New Members</h2>
      )}
    </NewMembersContainer>
  );
};

export default NewMembers;
