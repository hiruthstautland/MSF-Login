import React from "react";
import PropTypes from "prop-types";
import { SuggestionsLiEl, HighlightLetters } from "./_style";
export const AutocompleteList = ({
  suggestions,
  userInput,
  activeSuggestion,
  // onSelectSuggestion,
}) => {
  return (
    <div tabIndex="0">
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => {
            const suggestionArray = suggestion.split(
              new RegExp(`(${userInput})`, "gi")
            );

            // let active = index === activeSuggestion;
            return (
              <SuggestionsLiEl
                active={index === activeSuggestion}
                key={suggestion + index}
                // onClick={() => onSelectSuggestion(suggestion.id)}
              >
                {suggestionArray.map((suggestedLetters, i) => (
                  <HighlightLetters
                    key={i}
                    highlight={
                      suggestedLetters.toLowerCase() !== userInput.toLowerCase()
                    }
                    // className={
                    //   suggestedLetters.toLowerCase() === userInput.toLowerCase()
                    //     ? ""
                    //     : "autocomplete__highlight"
                    // }
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
  // suggestion: PropTypes.number.isRequired,
  suggestions: PropTypes.array.isRequired,
  userInput: PropTypes.string.isRequired,
  // onSelectSuggestion: PropTypes.func.isRequired,
};
