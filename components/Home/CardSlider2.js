import React, { useRef } from "react";
import Slider from "react-slick";
const CardSlider2 = (props) => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className={`ashahi ${props.class1}`}>
      <div id="owl-demo" className="owl-carousel owl-theme">
        <div className="owl-item">
          <Slider {...settings} ref={sliderRef}>
            {props.images.length >= 1 &&
              props.images.map((item, index) => (
                <div key={index}>
                  <img u="image" src={item} />
                </div>
              ))}
          </Slider>
        </div>
        <span u="arrowleft" className="owl-arrow-left" onClick={gotoPrev} />
        <span u="arrowright" className="owl-arrow-right" onClick={gotoNext} />
      </div>
    </div>
  );
};

export default CardSlider2;
