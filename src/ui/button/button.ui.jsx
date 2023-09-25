import React from "react";
import { ButtonContainer, StyledButton } from "./button.ui.styles";

const BUTTON_TYPE_CLASSES = {
  delete: "delete",
  submit: "inverted",
  submit_sm: 'submit-sm'
};

const Button = ({ type, children, ...otherProps }) => {
  return (
    <ButtonContainer>
      <StyledButton className={`${BUTTON_TYPE_CLASSES[type]}`} {...otherProps}>
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};

export default Button;
