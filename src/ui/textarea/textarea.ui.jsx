import React from "react";
import { TextareaContainer, StyledTextarea } from "./textarea.styles";

const Textarea = ({
  type,
  name,
  size,
  rows,
  value,
  onChange,
  required,
  placeHolder,
}) => {
  return (
    <TextareaContainer type={type}>
      <StyledTextarea
        size={size}
        rows={rows}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeHolder}
      />
    </TextareaContainer>
  );
};

export default Textarea;
