import React from "react";
import Link from "next/link";
import CardChild from "./CardChild";
import CardSlider2 from "./CardSlider2";

const CardContent = (props) => {
  const { id, title, content, desc, images } = props.item;
  const changeId = () => {
    if (id === 2) {
      props.item.id = 1;
    } else if (id === 4) {
      props.item.id = 5;
    } else if (id === 5) {
      props.item.id = 6;
    }
  };
  changeId();
  console.log("id change", id);
  return (
    <>
      <CardChild {...props.item}>
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="short-description">
          <span>{desc}</span>
        </div>
        {content && (
          <div className="description">
            <p>{content}</p>
          </div>
        )}
      </CardChild>
      {id == 5 && <CardSlider2 images={images} />}
      {images.length === 1 && (
        <CardChild id={props.item.id + 1} images={images}>
          <div className="view">
            <Link href={id === 3 ? "/product" : "/about"}>
              {id === 3 ? "Xem thực đơn của ASAHI" : "Xem thêm về chúng tôi"}
            </Link>
          </div>
        </CardChild>
      )}
    </>
  );
};

export default CardContent;
