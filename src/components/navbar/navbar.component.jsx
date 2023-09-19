import React from "react";
import * as usersService from "../../utils/users/users-service";

import { NavbarContainer, NavbarContent, StyledLink } from "./navbar.styles";
import Input from "../../ui/input/input.ui";

const Navbar = ({ setUser }) => {
  const user = usersService.getUser();

  const handleLogout = () => {
    usersService.logOut();
    setUser(null);
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
