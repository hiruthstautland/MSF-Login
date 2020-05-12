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
  suggestions,
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

  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [userInput, setUserInput] = useState(inputRef.current.value);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && activeSuggestion > 0) {
      // TODO: maybe use ...prevState
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40 && activeSuggestion < suggestions.length - 1) {
      setActiveSuggestion(activeSuggestion + 1);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      setUserInput(suggestions[activeSuggestion]);
      setShowSuggestions(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "campaigns" && value.length >= 2) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
    updateUser(name, value);
  };

  return (
    <FormInputArea>
      {!error && (
        <>
          <TextLabel htmlFor={label}>{label}</TextLabel>
          <input
            ref={inputRef}
            style={TextInputStyle}
            name={name ? name : ""}
            type={type ? type : "text"}
            value={userInput ? userInput : value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoComplete="off"
          />
          {showSuggestions && (
            <AutocompleteList
              activeSuggestion={activeSuggestion}
              // onSelectSuggestion={onSelectSuggestion}
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
