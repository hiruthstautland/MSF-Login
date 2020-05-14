import React from "react";
import PropTypes from "prop-types";
import { TextLabel } from "../../../style/_common";

export const TextInput = ({
  name,
  label,
  placeholder,
  error,
  value,
  onChange,
}) => {
  const CheckboxInputStyle = {
    margin: "1rem 0",
    width: "100%",
    background: "none",
    border: "none",
    borderBottom: "1px solid white",
  };
  return (
    <>
      {!error && (
        <>
          <TextLabel htmlFor={label}>{label}</TextLabel>
          <div>
            <label>
              <input type="checkbox" style={CheckboxInputStyle} CHECKED />
              Checkbox
            </label>
            <label>
              <input type="checkbox" class="option-input checkbox" />
              Checkbox
            </label>
            <label>
              <input type="checkbox" class="option-input checkbox" />
              Checkbox
            </label>
          </div>
          <div>
            <label>
              <input type="radio" class="option-input radio" name="example" />
              Radio option
            </label>
            <label>
              <input type="radio" class="option-input radio" name="example" />
              Radio option
            </label>
            <label>
              <input type="radio" class="option-input radio" name="example" />
              Radio option
            </label>
          </div>
        </>
      )}
    </>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
