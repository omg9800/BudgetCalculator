import React, { Component } from "react";

const Select = ({
  name,
  label,
  value,
  onChange,
  options,
  error,
  to,
  ...rest
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        //autoFocus={focus}
        aria-describedby="emailHelp"
        className="form-control"
      >
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
