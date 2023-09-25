import React from "react";
import {
  UserHomeAsideSection,
  UserHomeContainer,
  UserHomeMainSection,
} from "./user-home.styles";

import PostInput from "../../components/post-input/post-input.component";
import PostDisplay from "../../components/post-display/post-display.component";
import MiniProfile from "../../components/mini-profile/mini-profile.component";
import NewMembers from "../../components/new-members/new-members.component";
import MyFriends from "../../components/my-friends/my-friends.component";

const UserHomePage = () => {
  // const [post, setPost] = useState([]);
  return (
    <UserHomeContainer>
      <UserHomeAsideSection className='left'>
        <MiniProfile />
      </UserHomeAsideSection>
      <UserHomeMainSection className='center'>
        <PostInput />
        <PostDisplay />
      </UserHomeMainSection>
      <UserHomeAsideSection className='right'>
        <NewMembers />
        <MyFriends />
      </UserHomeAsideSection>
    </UserHomeContainer>
  );
};

export default UserHomePage;
