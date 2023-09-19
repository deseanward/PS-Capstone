import React from "react";
import {
  InputContainer,
  SearchIconContainer,
  StyledInput,
} from "./input.ui.styles";
import { BsSearch } from "react-icons/bs";

const Input = ({ type, name, size, value, onChange, required }) => {
  let placeHolder = getPlaceHolder(type);

  const handleSearch = () => {
    alert("TODO");
  };

  function getPlaceHolder(type) {
    let p = "";

    switch (type) {
      case "search":
        p = "Search...";
        break;
      case "post":
        p = "What's on your mind?";
        break;
      default:
        p = "";
        break;
    }
    return p;
  }

  return (
    <InputContainer type={type}>
      <StyledInput
        size={size}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeHolder}
      />
      <SearchIconContainer type={type} onClick={handleSearch}>
        <BsSearch />
      </SearchIconContainer>
    </InputContainer>
  );
};

export default Input;
