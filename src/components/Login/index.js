import React from "react";
import msfEmpImg from "../../content/img/msf_emp.gif";
import { AutoCompleteForm } from "../common/AutocompleteForm";
import {
  LoginContainer,
  LoginFormContainer,
  LoginImgContainer,
  LoginImg,
} from "./_style";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginFormContainer>
        <AutoCompleteForm />
      </LoginFormContainer>
      <LoginImgContainer>
        <LoginImg imgUrl={msfEmpImg}>MSF - LOGO</LoginImg>
      </LoginImgContainer>
    </LoginContainer>
  );
};
