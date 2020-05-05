import styled from "styled-components";

export const Nav = styled.div`
  margin-bottom: 1px;
  width: 100vw;
  height: 2rem;
  background: #eee;
  -webkit-box-shadow: 0px 0px 1px 1px gray;
  -moz-box-shadow: 0px 0px 1px 1px gray;
  box-shadow: 0px 0px 1px 1px gray;
`;

export const NavbarWideWr = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
//make a drop down menu
export const NavbarNarrowWr = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

//inline fix
// TODO: rewrite nav remove inline styling
export const activeStyle = {
  color: "red",
};

export const NavLinks = {
  color: "gray",
  margin: "0 1rem",
  textDecoration: "none",
  letterSpacing: ".1rem",
  "&:hover": {
    color: "black",
  },
};
//  export const NavLinks::hover {
// opacity: 0.5;
//   }
