import React from "react";
import PropTypes from "prop-types";
import { TextLabel } from "../../../style/_common";

export const TextInput = ({
  name,
  label,
  type,
  placeholder,
  error,
  value,
  onChange,
}) => {
  const TextInputStyle = {
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
          <input
            style={TextInputStyle}
            name={name ? name : ""}
            type={type ? type : "text"}
            value={value ? value : ""}
            onChange={onChange}
            placeholder={placeholder}
          />
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
