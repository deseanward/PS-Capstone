import React from "react";
import {
  UserHomeAsideSection,
  UserHomeContainer,
  UserHomeMainSection,
} from "./user-home.styles";
import PostInput from "../../components/post-input/post-input.component";

const UserHomePage = ({ user }) => {
  return (
    <UserHomeContainer>
      <UserHomeAsideSection className='left'>Left</UserHomeAsideSection>
      <UserHomeMainSection className='center'>
        <PostInput>
          
        </PostInput>
      </UserHomeMainSection>
      <UserHomeAsideSection className='right'>Right</UserHomeAsideSection>
    </UserHomeContainer>
  );
};

export default UserHomePage;
