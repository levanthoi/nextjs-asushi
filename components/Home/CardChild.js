import React from "react";

const CardChild = ({ children, id, images }) => {
  return (
    <div
      className={`ashahi ashahi${id}`}
      style={
        images.length === 1 && id % 2 === 0
          ? {
              background: `url(${images[0]}) no-repeat center`,
            }
          : {}
      }
    >
      <div className="container">
        <div className={`content-ashahi content-ashahi${id} clearfix`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardChild;
