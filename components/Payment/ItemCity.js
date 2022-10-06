import React from "react";
import cities from "../../data/dataCity";
const ItemCity = (props) => {
  const { label, name } = props;
  return (
    <div className="form-group">
      <label
        className="control-label"
        htmlFor={
          label === "Shipping" ? `Shipping_${label}` : `Billing_${label}`
        }
      >
        {name}
      </label>{" "}
      <span className="required">*</span>
      <div className="controls">
        <select
          className=""
          name={
            label === "Shipping" ? `Shipping[${label}]` : `Billing[${label}]`
          }
          id={label === "Shipping" ? `Shipping_${label}` : `Billing_${label}`}
        >
          <option value="">Chọn tỉnh/thành phố</option>
          {cities.map((city, index) => {
            return (
              <option key={index} value={index}>
                {city}
              </option>
            );
          })}
        </select>
        <div
          className="errorMessage"
          id={
            label === "Shipping"
              ? `Shipping_${label}_em_`
              : `Billing_${label}_em_`
          }
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default ItemCity;
