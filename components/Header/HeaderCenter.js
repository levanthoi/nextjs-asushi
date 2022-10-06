import React from "react";
import { DataHotline } from "/data/data";
import Link from "next/link";

const HeaderCenter = () => {
  const hoverHandle = () => {};
  const HotlinePri = DataHotline.find((item) => item.primary === true);
  // const logo = DataLogo[0].img;

  return (
    <div className="header-center">
      <div className="container">
        <div className="flower flower-left">
          <i className="icon icon-flower-left"> </i>
        </div>
        <div className="header-center-cont1 logo">
          <div className="box-img box-img-logo">
            <Link href="/" title="Asahi">
              <img title="#" src="/images/logo.png" alt="Asahi" />
            </Link>
          </div>
        </div>
        <div className="header-center-cont2 hotline">
          <div className="hotline-content">
            <i className="icon icon-hotline"> </i>
            <div className="text-content">
              <p>Hotline</p>
              <a href={`tel:${HotlinePri.hotline}`}>{HotlinePri.hotline}</a>
            </div>
          </div>
        </div>
        <div className="header-center-cont3 language">
          <div className="language-content">
            <ul>
              <li className="active">
                <a
                  className="language-action"
                  href="http://w3ni385.nanoweb.com.vn/set-language.html?lang=vi&actionKey=eyJ1cmwiOiJcLyIsInBhcmFtcyI6W119"
                >
                  VN{" "}
                </a>
              </li>
              <li>
                <a
                  className="language-action"
                  href="http://w3ni385.nanoweb.com.vn/set-language.html?lang=en&actionKey=eyJ1cmwiOiJcLyIsInBhcmFtcyI6W119"
                >
                  EN{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="header-center-cont4 shoppingcart"
          style={{ height: "110px" }}
          onMouseEnter={hoverHandle}
        >
          <div className="shoppingcart-content">
            <Link className="btn-show-cart" href="/cart">
              <i className="icon icon-shoppingcart"> </i>
            </Link>
            <div className="text-content">
              <Link className="btn-show-cart" href="/cart" title="Giỏ hàng">
                <a>Giỏ hàng</a>
              </Link>
            </div>
          </div>
          <div className="Cart">
            <div className="box-cart">
              <div className="header-box-cart">
                <p>Giỏ hàng</p>
              </div>
              <div id="boxscroll2" className="cont-cart ">
                <div className="mush"></div>
              </div>
              <div className="bottom-cart">
                <p className="total">
                  <span className="pricetext">0</span>
                  {/* <span className="currencytext">đ</span> */}
                </p>
                <Link className="check-out" href="/cart">
                  <a>Giỏ hàng</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flower flower-right">
          <i className="icon icon-flower-right"> </i>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
