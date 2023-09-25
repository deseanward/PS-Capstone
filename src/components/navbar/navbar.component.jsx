import React from "react";
import * as usersService from "../../utils/users/users-service";

import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../app/features/auth/authSlice";

import { NavbarContainer, NavbarContent, StyledLink } from "./navbar.styles";
import Input from "../../ui/input/input.ui";

const Navbar = ({ setUser }) => {
  // const user = usersService.getUser();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    usersService.logOut();
    dispatch(setAuth({}));
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <div className='flex gap-4 items-center'>
          <h2>Welcome, {user.name}</h2>
          <Input size={32} type='search' />
        </div>
        <div>
          <StyledLink to='/orders'>Order History</StyledLink> | {""}
          <StyledLink to='/orders/new'>New History</StyledLink> | {""}
          <StyledLink to='' onClick={handleLogout}>
            Log Out
          </StyledLink>
        </div>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
