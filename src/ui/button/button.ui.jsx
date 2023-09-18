import React from "react";
import { ButtonContainer, StyledButton } from "./button.ui.styles";

const Button = ({ type, disabled, children }) => {
  return (
    <ButtonContainer>
      <StyledButton type={type} disabled={disabled}>
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};

export default Button;
