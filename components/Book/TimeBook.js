import React from "react";

const TimeBook = (props) => {
  const { name, text, errorText, class1, class2, class3 } = props;
  return (
    <div className="col-xs-6">
      <div className={`form-group form-group1 ${class1} w3-form-group`}>
        <label
          className={`${class2} control-label control-label1 w3-form-label required`}
        >
          {text} <span style={{ color: "#B94A48" }}>*</span>
        </label>
        <div className={`${class3} w3-form-field w3-form-field1`}>
          <input
            className="form-control w3-form-input input-text"
            name={`BookTable[${name}]`}
            id={`BookTable_${name}`}
            type="text"
            maxLength={255}
          />
          <div
            className="errorMessage"
            id={`BookTable_${name}_em_`}
            style={{ display: "none" }}
          >
            {errorText}
          </div>
        </div>
      </div>
    </div>
  );
};

// ===
export const Item = (props) => {
  const { id, name, text, errorText, maxLength } = props;
  return (
    <div key={id} className="form-group w3-form-group">
      <label className="col-xs-2 control-label w3-form-label required">
        {text}
        <span style={{ color: "#B94A48" }}>*</span>
      </label>
      <div className="col-xs-10 w3-form-field">
        <input
          className="form-control w3-form-input input-text"
          name={`BookTable[${name}]`}
          id={`BookTable_${name}`}
          type="text"
          maxLength={maxLength}
        />
        <div
          className="errorMessage"
          id={`BookTable_${name}_em_`}
          style={{ display: "none" }}
        >
          {errorText}
        </div>
      </div>
    </div>
  );
};


export default TimeBook;
