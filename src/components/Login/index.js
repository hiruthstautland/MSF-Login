import React from "react";
import msfEmpImg from "../../content/img/msf_emp.gif";
import { AutoCompleteForm } from "../common/AutocompleteForm";
import {
  LoginWr,
  LoginFormContainer,
  LoginImgContainer,
  LoginImg,
  LoginLogo,
} from "./_style";

export const Login = () => {
  return (
    <LoginWr>
      <LoginFormContainer>
        <AutoCompleteForm />
      </LoginFormContainer>
      <LoginImgContainer>
        <LoginImg imgUrl={msfEmpImg}>
          <LoginLogo>MSF - LOGO</LoginLogo>
        </LoginImg>
      </LoginImgContainer>
    </LoginWr>
  );
};
