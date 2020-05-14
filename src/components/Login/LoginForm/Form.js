import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Button, Heading, ButtonContainer } from "../../../style/_common";
import { LoginFormWr } from "../_style";
import { TextInput } from "../../common/TextInput";

export const Form = ({
  userInput,
  handleChange,
  password,
  handleLoginAttempt,
  error,
}) => {
  return (
    <LoginFormWr>
      {error && (
        <div style={{ color: "red" }}>
          {`MAYDAY, some kind of error: ${error}`}
        </div>
      )}
      <form>
        <fieldset>
          <legend>
            <Heading>Login</Heading>
          </legend>
          <TextInput
            name="name"
            label="Navn"
            placeholder=""
            value={userInput}
            onChange={handleChange}
            // error={errors.title}
          />
          <TextInput
            name="password"
            label="Passord"
            placeholder=""
            type="password"
            value={password}
            onChange={handleChange}
            // error={errors.title}
          />
          <ButtonContainer>
            <Button type="button" onClick={handleLoginAttempt}>
              Logg inn
            </Button>
          </ButtonContainer>
        </fieldset>
      </form>
    </LoginFormWr>
  );
};

Form.propTypes = {
  userInput: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
