import React from "react";
import BoxItem from "./BoxItem";
import CardItemHistory from "./CardItemHistory";

const CardAbout = (props) => {
    const {id, title, desc, items} =props.item;
  return (
    <div className={`ashahi-about-us ashahi-about-us${id} clearfix`}>
      <div className="container">
        <div className={`ashahi-about-us-title ashahi-about-us${id}-title`}>
          <div className="title-about">
            <h2>{title}</h2>
          </div>
          <div className="content-about">
            <p>{desc}</p>
          </div>
        </div>
        <div
          className={`ashahi-about-us-content ashahi-about-us${id}-content clearfix`}
        >
          <div className={`row-about-us${id}`}>
            {items && id===1 && items.map(item => <CardItemHistory key={item.id} item={item}/>)}
            {items && id===2 && items.map(item => <BoxItem key={item.id} item={item}/>)}
          </div>
        </div>
      </div>
    </div>
  )
};

export default CardAbout;
