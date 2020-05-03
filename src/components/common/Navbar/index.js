import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavLinks, activeStyle } from "./_style";

export const Navbar = () => {
  return (
    <Nav>
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
    </Nav>
  );
};
