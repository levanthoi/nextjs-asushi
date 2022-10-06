import React from "react";
import dataCity from "../data/dataCity";

const CardInput = (props) => {
  const { box, item } = props;
  const { name, field } = item;
  // console.log("item",item);
  // console.log("box",box);
  // console.log("field",field);
  const { classOne, classTwo, classThree, classFour, label } = box;

  const InputChild = () => {
    switch (field) {
      case "note":
        return (
          <textarea
            rows={6}
            name={`${label}[${field}]`}
            id={`${label}_${field}`}
            defaultValue={""}
          />
        );
      case "city":
      case "district":
        return (
          <select className="" name={`${label}[${field}]`}>
            <option value="">Chọn {name}</option>
            {dataCity.map((city, index) => {
              return (
                <option key={index} value={index}>
                  {city}
                </option>
              );
            })}
          </select>
        );
      default:
        return (
          <input
            className={`form-control ${classFour}`}
            style={{ width: "100%" }}
            placeholder={`Vui lòng nhập ${name}`}
            name={`${label}[${field}]`}
            id={`${label}_${field}`}
            type="text"
            // maxLength={2}
          />
        );
    }
  };
  return (
    <div className={`${classOne} form-group`}>
      <label
        className={`${classTwo} control-label`}
        htmlFor={`${label}_${field}`}
      >
        {name}
      </label>
      <span className="required">*</span>
      <div className={`controls ${classThree}`}>
        <InputChild />
        <div
          className="errorMessage"
          id={`${label}_${field}_em_`}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default CardInput;
