import React from "react";
import { FormContainer, StyledForm } from "./form.ui.styles";

const Form = ({ children }) => {
  return (
    <FormContainer>
      <StyledForm>{children}</StyledForm>
    </FormContainer>
  );
};

export default Form;
