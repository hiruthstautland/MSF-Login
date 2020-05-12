import React from "react";
import PropTypes from "prop-types";

export const AutocompleteList = ({
  suggestions,
  userInput,
  // onSelectSuggestion,
}) => {
  console.log(suggestions);
  return (
    <div tabIndex="0">
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => {
            const suggestionArray = suggestion.split(
              new RegExp(`(${userInput})`, "gi")
            );
            // const className =
            //   index === suggestion
            //     ? "autocomplete__item -active"
            //     : "autocomplete__item";
            return (
              <li
                // className={className}
                key={suggestion + index}
                // onClick={() => onSelectSuggestion(suggestion.id)}
              >
                {suggestionArray.map((suggestedLetters, i) => (
                  <span
                    key={i}
                    // className={
                    //   suggestedLetters.toLowerCase() === userInput.toLowerCase()
                    //     ? ""
                    //     : "autocomplete__highlight"
                    // }
                  >
                    {suggestedLetters}
                  </span>
                ))}
              </li>
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
