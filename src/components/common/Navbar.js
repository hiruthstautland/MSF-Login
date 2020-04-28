import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const activeStyle = {
    color: "var(--msf-green)",
    textDecoration: "underline",
  };

  const NavLinks = {
    margin: "0 1rem",
    textDecoration: "none",
    letterSpacing: ".1rem",
  };

  return (
    <nav>
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
    </nav>
  );
};
