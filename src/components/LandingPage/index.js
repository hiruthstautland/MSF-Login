import React from "react";
import { Link } from "react-router-dom";
import { Heading, Container, Button } from "../../style/components/common";
export const LandingPage = () => (
  <Container>
    <fieldset>
      <legend>
        <Heading>MSF</Heading>
      </legend>
      <p>Hello from Landing Page. Velkommen til MSF!</p>
      <Link to="signup">
        <Button type="button">Registrer ny bruker!</Button>
      </Link>
      <Link to="login">
        <Button type="button">Fortsett til Login!</Button>
      </Link>
    </fieldset>
  </Container>
);
