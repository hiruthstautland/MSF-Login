import React from "react";
import PropTypes from "prop-types";
import { SuggestionsLiEl, HighlightLetters } from "./_style";
export const AutocompleteList = ({
  suggestions,
  userInput,
  activeSuggestion,
  handleClick,
}) => {
  return (
    <div tabIndex="0">
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => {
            const suggestionArray = suggestion.split(
              new RegExp(`(${userInput})`, "gi")
            );
            return (
              <SuggestionsLiEl
                active={index === activeSuggestion}
                key={suggestion + index}
                onClick={() => handleClick(suggestion)}
              >
                {suggestionArray.map((suggestedLetters, i) => (
                  <HighlightLetters
                    key={i}
                    highlight={
                      suggestedLetters.toLowerCase() !== userInput.toLowerCase()
                    }
                  >
                    {suggestedLetters}
                  </HighlightLetters>
                ))}
              </SuggestionsLiEl>
            );
          })}
        </ul>
      )}
    </div>
  );
};
AutocompleteList.propTypes = {
  activeSuggestion: PropTypes.number.isRequired,
  suggestions: PropTypes.array.isRequired,
  userInput: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
