import React from "react";

const PageAbout = (props) => {
  return (
    <div className="page-about-us">
      <div className="container">
        <div className="page-about-us-title ">
          <h2>
            <i className="bg-pau bg-pau-left"> </i>
            {props.name} <br />
            <span className="language-japan">{props.nameJapan}</span>
            <i className="bg-pau bg-pau-right"> </i>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageAbout;
