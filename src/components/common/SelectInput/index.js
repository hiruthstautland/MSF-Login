import React from "react";
import PropTypes from "prop-types";

export const SelectInput = ({
  name,
  label,
  value,
  options,
  defaultOption,
  error,
  onChange,
}) => {
  return (
    <>
      {error ? (
        <> Error: {error} </>
      ) : (
        <>
          <label htmlFor={label}>{label}</label>
          <select name={name} value={value} onChange={onChange}>
            <option value="">{defaultOption}</option>
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {" "}
                  {option.text}{" "}
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
