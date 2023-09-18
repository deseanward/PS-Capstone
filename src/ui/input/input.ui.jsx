import React from "react";
import { InputContainer, StyledInput } from "./input.ui.styles";

const Input = ({ type, name, value, onChange, required }) => {
  return (
    <InputContainer>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </InputContainer>
  );
};

export default Input;
