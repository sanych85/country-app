import React from "react";
import { StyledInputWrapper, StyledInput } from "./Input.style";
const Input = ({ type, getInputName, value, disabled, placeholder }) => {
  return (
    <StyledInputWrapper>
      <StyledInput
        type={type || "string"}
        onChange={(e) => getInputName(e.target.value)}
        value={value}
        disabled={disabled}
        placeholder={placeholder}></StyledInput>
    </StyledInputWrapper>
  );
};

export default Input;
