import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  background: #eee;
`;

export const activeStyle = {
  color: "var(--msf-green)",
  textDecoration: "underline",
};

export const NavLinks = {
  margin: "0 1rem",
  textDecoration: "none",
  letterSpacing: ".1rem",
};
