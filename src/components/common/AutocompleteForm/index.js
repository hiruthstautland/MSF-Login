import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Heading,
  ButtonContainer,
} from "../../../style/components/common";
import { AutocompleteFormWr } from "./_style";
import { AutocompleteList } from "./autocompletelist";

export const AutoCompleteForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [onSelectSuggestion, setOnSelectSuggestion] = useState("");

  //   onChangeHandler = (e) => {
  //     setUserInput(e.target);
  //     //use refs
  //   };

  // logout active names

  return (
    <AutocompleteFormWr>
      <form autoComplete="on">
        <fieldset>
          <legend>
            <Heading>Login</Heading>
          </legend>
          <label htmlFor="name">
            <input id="username" type="text" />
          </label>
          <ButtonContainer>
            <Link to="landingpage">
              <Button type="button">Logg inn</Button>
            </Link>
          </ButtonContainer>
        </fieldset>
      </form>
      {showForm && (
        <AutocompleteList
          suggestion={suggestion}
          suggestions={suggestions}
          userInput={userInput}
          onSelectSuggestion={onSelectSuggestion}
        />
      )}
    </AutocompleteFormWr>
  );
};
