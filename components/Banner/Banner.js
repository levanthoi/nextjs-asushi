import React from "react";
import { DataBanner } from "/data/data";
import Link from "next/link";

const Banner = () => {
  const banner = DataBanner[0];
  return (
    <div id="banner-page" className="banner-page clearfix">
      <div className="banner-page-content">
        <div className="box-img-banner-page">
          <Link href="/about" target="_blank">
            <img
              width="100%"
              src={banner.img}
              alt="Cùng Asahi khám phá - ẩm thực Nhật"
            />
          </Link>
        </div>
        <div className="box-info-banner-page">
          <div className="banner-page-title bounceInLeft animated">
            <p className="banner-page-title1">{banner.title} </p>
            <p className="banner-page-title2"> {banner.subtitle}</p>
          </div>
          <div className="banner-page-view-all bounceInLeft animated">
            <Link href="/about" title="Xem thêm">
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
