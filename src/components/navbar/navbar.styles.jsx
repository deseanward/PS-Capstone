import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";

export const NavbarContainer = styled.nav`
  ${tw`
   bg-slate-800
   text-white
  `}
`;

export const NavbarContent = styled.section`
  ${tw`
    w-screen
    flex justify-between
    p-4 px-16
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  
`;
