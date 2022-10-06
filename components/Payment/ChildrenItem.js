import React from "react";

const ChildrenItem = (props) => {
    const {label, label2,name} = props;
  return (
    <div className="form-group">
      <label className="control-label" htmlFor={`${label2}_${label}`}>
        {name}
      </label>{" "}
      <span className="required">*</span>
      <div className="controls">
        {label==='note' ?
          <textarea rows={6} name={`${label2}[${label}]`} id={`${label2}_${label}`} defaultValue={""}/>   
          :    
          <input
            className="form-control"
            style={{ width: "100%" }}
            placeholder={`Vui lòng nhập ${name}`}
            name={`${label2}[${label}]`}
            id={`${label2}_${label}`}
            type="text"
          />
        }
        <div
          className="errorMessage"
          id={`${label2}_${label}_em_`}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default ChildrenItem;
