import React from "react";
import Link from "next/link";
import CardChild from "./CardChild";
import CardSlider2 from "./CardSlider2";

const CardContent = (props) => {
  const { id, title, content, desc, images } = props.item;
  let boxClass = "";
  const changeId = () => {
    console.log(id);
    if (id === 2) {
      boxClass += "ashahi1 ashahi2";
    } else if (id === 3) {
      boxClass += "ashahi3 ashahi4";
    } else if (id === 4) {
      boxClass += "ashahi5 ashahi51";
    } else if (id === 5) {
      boxClass += "ashahi6";
    }
    // if (id === 2) {
    //   props.item.id = 1;
    // } else if (id === 4) {
    //   props.item.id = 5;
    // } else if (id === 5) {
    //   props.item.id = 6;
    // }
  };
  changeId();
  let box1 = boxClass.slice(0, 7);
  let box2 = boxClass.slice(8);
  console.log("box1", box1, "box2", box2);
  // console.log("id", props.item.id);
  return (
    <>
      <CardChild {...props.item} boxClass={box1}>
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
      {id === 4 && <CardSlider2 class1="ashahi51" images={images} />}
      {/* {console.log("props", props.item.id, id)} */}
      {images.length === 1 && (
        <CardChild boxClass={box2} id={id} images={images}>
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
