import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
    <div>
      <form autoComplete="on">
        <fieldset>
          <legend>
            <h2>Login</h2>
          </legend>
          <label htmlFor="name">
            Navn
            <input id="username" type="text" />
          </label>
          <Link to="landingpage">
            <button type="button">Logg inn</button>
          </Link>
          <Link to="/">
            <button type="button">Tilbake</button>
          </Link>
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
    </div>
  );
};
