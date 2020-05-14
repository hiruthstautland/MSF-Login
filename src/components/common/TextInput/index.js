import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { TextLabel, FormInputArea } from "../../../style/_common";
import { AutocompleteList } from "../AutoCompleteList";

export const TextInput = ({
  name,
  label,
  type,
  placeholder,
  error,
  value,
  availableSuggestions,
  updateUser,
}) => {
  // TODO: rewrite to styled componentes
  const inputRef = useRef("");

  const TextInputStyle = {
    width: "100%",
    padding: "1rem .5rem 0 .1rem",
    background: "none",
    border: "none",
    borderBottom: "1px solid white",
    outline: "none",
  };

  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [userInput, setUserInput] = useState(value || "");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  //TODO: Add click outside dropdown list functionallity that closes list

  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && activeSuggestion > 0) {
      // TODO: maybe use ...prevState
      setActiveSuggestion(activeSuggestion - 1);
    } else if (
      e.keyCode === 40 &&
      activeSuggestion < availableSuggestions.length - 1
    ) {
      setActiveSuggestion(activeSuggestion + 1);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      setUserInput(availableSuggestions[activeSuggestion]);
      setShowSuggestions(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput(value);
    if (name === "campaigns" && value.length >= 2) {
      suggestionsByUserInput(value, availableSuggestions);
      setShowSuggestions(true);
    } else if (value.length < 1) {
      setShowSuggestions(false);
    } else {
      setShowSuggestions(false);
    }
    updateUser && updateUser(name, value);
  };

  const handleClick = (item) => {
    setUserInput(item);
    setShowSuggestions(false);
  };

  const suggestionsByUserInput = (userInput, availableSuggestions) => {
    const suggestionArr = availableSuggestions.filter((suggestion) => {
      return suggestion.match(new RegExp(`${userInput}`, "gi"));
    });
    setSuggestions(suggestionArr);
  };

  return (
    <FormInputArea>
      {!error && (
        <>
          <TextLabel htmlFor={label}>{label}</TextLabel>
          <input
            spellCheck="false"
            ref={inputRef}
            style={TextInputStyle}
            name={name ? name : ""}
            type={type ? type : "text"}
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoComplete="off"
          />
          {showSuggestions && (
            <AutocompleteList
              activeSuggestion={activeSuggestion}
              handleClick={handleClick}
              suggestions={suggestions}
              userInput={inputRef.current.value}
              showSuggestions={showSuggestions}
            />
          )}
        </>
      )}
    </FormInputArea>
  );
};

// TODO: add all proptypes
TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string,
};
