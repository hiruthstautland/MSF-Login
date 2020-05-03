import React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => (
  <div className="main">
    <fieldset>
      <legend>
        <h2>MSF</h2>
      </legend>
      <p>Hello from Landing Page. Velkommen til MSF!</p>
      <Link to="signup">
        <button className="btn-newUser" type="button">
          Registrer ny bruker!
        </button>
      </Link>
      <Link to="login">
        <button className="btn-oldUser" type="button">
          Fortsett til Login!
        </button>
      </Link>
    </fieldset>
  </div>
);
