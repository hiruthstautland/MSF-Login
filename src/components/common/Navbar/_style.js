import styled from "styled-components";

export const Nav = styled.div`
  margin-bottom: 1px;
  width: 100vw;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #eee;
  -webkit-box-shadow: 0px 0px 1px 1px gray;
  -moz-box-shadow: 0px 0px 1px 1px gray;
  box-shadow: 0px 0px 1px 1px gray;
`;

//inline fix
// TODO: rewrite nav
export const activeStyle = {
  color: "red",
};

export const NavLinks = {
  color: "gray",
  margin: "0 1rem",
  padding: "1rem",
  textDecoration: "none",
  letterSpacing: ".1rem",
};
