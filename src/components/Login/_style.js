import styled from "styled-components";

export const LoginWr = styled.div`
  display: flex;
  width: 100vw;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  background: #d3d3d3;
`;
export const LoginFormWr = styled.div`
  margin: 2rem;
  text-align: left;
`;

export const LoginImgContainer = styled.div`
  width: 50%;
  height: 100vh;
`;
export const LoginImg = styled.div`
  background: center no-repeat url(${(props) => props.imgUrl});
  background-size: cover;
  height: 100%;
`;
export const LoginLogo = styled.span`
  position: relative;
  top: 2rem;
  left: 2rem;
  color: darkred;
  font-size: 22px;
`;
