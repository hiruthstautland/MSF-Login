import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  NavLinks,
  activeStyle,
  NavbarWideWr,
  NavbarNarrowWr,
} from "./_style";

export const Navbar = () => (
  <Nav>
    <NavbarWideWr>
      <NavLink to="/" style={NavLinks} activeStyle={activeStyle} exact>
        Back
      </NavLink>
      <NavLink to="/login" style={NavLinks} activeStyle={activeStyle}>
        Logg inn
      </NavLink>
      <NavLink to="/signup" style={NavLinks} activeStyle={activeStyle}>
        Ny bruker
      </NavLink>
      <NavLink to="/users" style={NavLinks} activeStyle={activeStyle}>
        Aktive brukere
      </NavLink>
      <NavLink to="/admin" style={NavLinks} activeStyle={activeStyle}>
        Admin Side{" "}
      </NavLink>
    </NavbarWideWr>
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
