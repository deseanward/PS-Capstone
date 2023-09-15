import React from "react";
import * as usersService from "../../utils/users/users-service";
import { NavbarContainer, StyledLink } from "./navbar.styles";

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => {
    usersService.logOut();
    setUser(null);
  };

  return (
    <NavbarContainer>
      <h1>Welcome, {user.name}</h1>
      <StyledLink to='/orders'>Order History</StyledLink> | {""}
      <StyledLink to='/orders/new'>New History</StyledLink> | {""}
      <StyledLink to='' onClick={handleLogout}>
        Log Out
      </StyledLink>
    </NavbarContainer>
  );
};

export default Navbar;
