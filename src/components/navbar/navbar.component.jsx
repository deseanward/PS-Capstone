import React from "react";
import * as usersService from "../../utils/users/users-service";

import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../app/features/auth/authSlice";

import { persistStore } from "redux-persist";
import store from "../../app/store/store";

import { NavbarContainer, NavbarContent, StyledLink } from "./navbar.styles";
import Input from "../../ui/input/input.ui";

const Navbar = ({ setUser }) => {
  const persistor = persistStore(store);

  // const user = usersService.getUser();
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    persistor.purge();
    usersService.logOut();
    dispatch(setAuth({}));
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <div className='flex gap-4 items-center'>
          <StyledLink to='/'>
            <h2>Holla!</h2>
          </StyledLink>
          <Input size={32} type='search' />
        </div>

        <div className='flex gap-4'>
          <h3>Welcome, {user.name}!</h3>| {""}
          <StyledLink to='' onClick={handleLogout}>
            Log Out
          </StyledLink>
        </div>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
