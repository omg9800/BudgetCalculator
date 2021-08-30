import React from "react";

const Input = ({ name, label, focus, error, type, value, onChange }) => {
  //console.log(name, ":", value);
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        id={name}
        //autoFocus={focus}
        aria-describedby="emailHelp"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
