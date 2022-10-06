import React from "react";

const ColItem = ({ children }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div className="form-infor-user">
        <div className="panel-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ColItem;
