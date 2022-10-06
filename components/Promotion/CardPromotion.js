import React from "react";

const CardPromotion = ({props}) => {
  const {id, title, subtitle, active}= props;
  return (
    <div key={id}
      style={{ cursor: "pointer" }}
      title="Lorem ipsum dolor sit amet"
      name={4}
      className={`title-promotion ms-thumb ${active ? "active" :''}`}
    >
      <i className="icon-news" />
      <h4>{title}</h4>
      <span>
        {subtitle} 
      </span>
      <div className="wrap-social">
        <span className="publicdate">12/09/2016</span>
      </div>
    </div>
  );
};



export default CardPromotion;
