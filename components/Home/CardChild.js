import React from "react";

const CardChild = ({ children, boxClass, id, images }) => {
  return (
    <div
      className={`ashahi ${boxClass}`}
      style={
        images.length === 1 && (boxClass == "ashahi2" || boxClass == "ashahi4")
          ? {
              background: `url(${images[0]}) no-repeat center`,
            }
          : {}
      }
    >
      <div className="container">
        <div className={`content-ashahi content-${boxClass} clearfix`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardChild;
