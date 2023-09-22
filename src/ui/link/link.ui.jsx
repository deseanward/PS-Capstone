import React from "react";
import { LinkContainer, StyledLink } from "./link.ui.styles";

const Link = ({ to, children }) => {
  return (
    <LinkContainer>
      <StyledLink to={to}>{children}</StyledLink>
    </LinkContainer>
  );
};

export default Link;
