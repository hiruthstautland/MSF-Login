import React from "react";
import msfEmpImg from "../../content/img/msf_emp.gif";
import LoginForm from "./LoginForm";
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
        <LoginForm />
      </LoginFormContainer>
      <LoginImgContainer>
        <LoginImg imgUrl={msfEmpImg}>
          <LoginLogo>MSF - LOGO</LoginLogo>
        </LoginImg>
      </LoginImgContainer>
    </LoginWr>
  );
};
