import React from "react";
import { Link } from "react-router-dom";
import { Heading, Button, ButtonContainer } from "../../style/_common";
export const LandingPage = () => (
  <fieldset>
    <Heading> Velkommen til MSF Norge!</Heading>
    <ButtonContainer>
      <Link to="signup">
        <Button type="button">Registrer ny bruker!</Button>
      </Link>
      <Link to="login">
        <Button type="button">Fortsett til Login!</Button>
      </Link>
    </ButtonContainer>
  </fieldset>
);
