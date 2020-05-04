import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
`;

export const LoginFormContainer = styled.div`
  display: inline-block;
  width: 50%;
  height: 100vh;
  background: #d3d3d3;
`;

export const LoginImgContainer = styled.div`
  display: inline-block;
  width: 50%;
  height: 100vh;
  background: #eee;
`;
export const LoginImg = styled.div`
  background: center no-repeat url(${(props) => props.imgUrl});
  background-size: cover;
  height: 100vh;
  text-align: center;
  padding: 1rem;
`;
