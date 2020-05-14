import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, activeStyle, NavbarWideList, NavbarNarrowWr } from "./_style";
import styled from "styled-components";

const NavLinks = styled(NavLink)`
  color: gray;
  background: transparent;
  padding: 20px;
  width: 100%;
  text-decoration: none;
  display: inline-block;
  &:hover {
    color: black;
  }
`;

export const Navbar = () => (
  <Nav>
    <NavbarWideList>
      <NavLinks to="/" activeStyle={activeStyle} exact>
        Back
      </NavLinks>
      <NavLinks to="/login" activeStyle={activeStyle}>
        Logg inn
      </NavLinks>
      <NavLinks to="/signup" activeStyle={activeStyle}>
        Ny bruker
      </NavLinks>
      <NavLinks to="/users" activeStyle={activeStyle}>
        Brukere
      </NavLinks>
      <NavLinks to="/admin" activeStyle={activeStyle}>
        Admin
      </NavLinks>
    </NavbarWideList>
    {/* <NavbarNarrowWr>
      <span> *</span>
      <ul>
        <li>
          <a>Back</a>
        </li>
        <li>
          <a>Logg inn</a>
        </li>
        <li>
          <a>Back</a>
        </li>
        <li>
          <a>Ny bruker</a>
        </li>
        <li>
          <a>Aktive Brukere</a>
        </li>
        <li>
          <a>Admin Side</a>
        </li>
      </ul>
    </NavbarNarrowWr> */}
  </Nav>
);
