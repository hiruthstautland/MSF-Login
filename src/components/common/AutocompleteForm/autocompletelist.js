import PropTypes from "prop-types";

export const AutocompleteList = ({
  suggestion,
  suggestions,
  userInput,
  onSelectSuggestion,
}) => {
  return (
    <div className="autocomplete__suggestion" tabIndex="0">
      {suggestions.length > 0 && (
        <ul className="autocomplete__list">
          {suggestions.map((suggestion, index) => {
            const suggestionArray = suggestion.id.split(
              new RegExp(`(${userInput})`, "gi")
            );
            const className =
              index === suggestion
                ? "autocomplete__item -active"
                : "autocomplete__item";
            return (
              <li
                className={className}
                key={suggestion.id + index}
                onClick={() => onSelectSuggestion(suggestion.id)}
              >
                {suggestionArray.map((suggestedLetters, i) => (
                  <span
                    key={i}
                    className={
                      suggestedLetters.toLowerCase() === userInput.toLowerCase()
                        ? ""
                        : "autocomplete__highlight"
                    }
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
  suggestion: PropTypes.number.isRequired,
  suggestions: PropTypes.array.isRequired,
  userInput: PropTypes.string.isRequired,
  onSelectSuggestion: PropTypes.func.isRequired,
};
