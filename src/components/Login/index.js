import React from "react";
import {
  LoginContainer,
  LoginFormContainer,
  LoginImgContainer,
} from "./_style";
import { AutoCompleteForm } from "../common/AutocompleteForm";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginFormContainer>
        <AutoCompleteForm />
      </LoginFormContainer>
      <LoginImgContainer>Hello</LoginImgContainer>
    </LoginContainer>
  );
};
