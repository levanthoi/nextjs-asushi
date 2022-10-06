import React from "react";

const ItemLogin = (props) => {
    const {label, name} = props;
  return (
    <div className="control-group form-group">
      <label className="col-sm-3 control-label" htmlFor={`LoginForm_${label}`}>
        {name}
      </label>
      <div className="controls col-sm-9">
        <input
          className="form-control"
          placeholder={`${name}`}
          name={`LoginForm[${label}]`}
          id={`LoginForm_${label}`}
          type="text"
        />
        <div
          className="errorMessage"
          id={`LoginForm_${label}_em_`}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default ItemLogin;
