import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavLinks, activeStyle } from "../../../style/navbar/_navbar";

export const Navbar = () => {
  return (
    <Nav>
      {" | "}
      <NavLink to="/" style={NavLinks} activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/login" style={NavLinks} activeStyle={activeStyle}>
        Logg inn
      </NavLink>
      {" | "}
      <NavLink to="/signup" style={NavLinks} activeStyle={activeStyle}>
        Ny bruker
      </NavLink>
      {" | "}
      <NavLink to="/users" style={NavLinks} activeStyle={activeStyle}>
        Aktive brukere
      </NavLink>
      {" | "}
    </Nav>
  );
};
