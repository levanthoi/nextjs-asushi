import React from "react";
import { Link } from "react-router-dom";

const CardBanner = (props) => {
  console.log("props", props);
  const { id } = props.id;
  return (
    <div
      className={`ashahi ashahi${id}`}
      style={{
        background: `url(${arrImg[0]}) no-repeat center`,
      }}
    >
    <div className="container">
    <div className={`content-ashahi content-ashahi${id} clearfix`}>
      <div className="view">
        <Link to={id === 3 ? "/product" : "/about"}>
          {id === 3 ? "Xem thực đơn của ASAHI" : "Xem thêm về chúng tôi"}
        </Link>
      </div>
    </div>
     </div>
     </div>
  );
};

export default CardBanner;
