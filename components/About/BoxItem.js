import React from "react";

const BoxItem = (props) => {
  const { id, name, img, desc, cook } = props.item;
  return (
    <div className="col-about-us2">
      <div className="box-img-about-us2">
        <a href="!#" title="MIOSHIKAWA">
          <img src={img} alt="MIOSHIKAWA" />
        </a>
      </div>
      <div className="box-info-about-us2">
        <div className="name-teacher">
          <h3>
            <a href="!#" title="MIOSHIKAWA">
              {name}
            </a>
          </h3>
          <p>{cook}</p>
        </div>
        <div className="about-us2-description">
          <span>“{desc} ”</span>
        </div>
      </div>
    </div>
  );
};

export default BoxItem;
