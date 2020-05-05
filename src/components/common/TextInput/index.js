import React from "react";
import PropTypes from "prop-types";

export const TextInput = ({
  name,
  label,
  placeholder,
  error,
  value,
  onChange,
}) => {
  return (
    <>
      {!error && (
        <label htmlFor={label}>
          <input
            name={name}
            type="text"
            value={value}
            onChange={onChange}
            placeholder={name || "Brukernavn"}
          />
        </label>
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
