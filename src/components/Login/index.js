import React from "react";
import msfEmpImg from "../../content/img/msf_emp.gif";
import { AutoCompleteForm } from "../common/AutocompleteForm";
import {
  LoginContainer,
  LoginFormContainer,
  LoginImgContainer,
  LoginImg,
  LoginLogo,
} from "./_style";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginFormContainer>
        <AutoCompleteForm />
      </LoginFormContainer>
      <LoginImgContainer>
        <LoginImg imgUrl={msfEmpImg}>
          <LoginLogo>MSF - LOGO</LoginLogo>
        </LoginImg>
      </LoginImgContainer>
    </LoginContainer>
  );
};
