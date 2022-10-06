import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";

const CardSlider = (props) => {
  const { images } = props.item;
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
    <div id="slider">
      <div className="slider1_container">
        <Slider {...settings} ref={sliderRef}>
          {images &&
            images.map((item, index) => (
              <Link key={index} href="/">
                <img u="image" src={item} />
              </Link>
            ))}
        </Slider>
      </div>
      <span u="arrowleft" className="jssora05l" onClick={gotoPrev} />
      <span u="arrowright" className="jssora05r" onClick={gotoNext} />
    </div>
  );
};

export default CardSlider;
