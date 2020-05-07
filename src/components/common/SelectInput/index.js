import React from "react";
import PropTypes from "prop-types";
import { TextLabel } from "../../../style/_common";

export const SelectInput = ({
  name,
  label,
  value,
  options,
  defaultOption,
  error,
  onChange,
}) => {
  const SelectInputStyle = {
    margin: "1rem 0",
    width: "100%",
    background: "none",
    border: "none",
    borderBottom: "1px solid white",
  };
  return (
    <>
      {error ? (
        <> Error: {error} </>
      ) : (
        <>
          <TextLabel htmlFor={label}>{label}</TextLabel>
          <select
            name={name}
            value={value}
            onChange={onChange}
            style={SelectInputStyle}
          >
            <option value="">{defaultOption}</option>
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              );
            })}
          </select>
        </>
      )}
    </>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.string,
};
