import React from "react";
import Link from "next/link";

const HeaderTopMobile = () => {
  return (
    <div className="header-top" style={{}}>
      <div className="container">
        <div className="header-top-content clearfix">
          <h1 style={{ textIndent: "-9999px", height: 0, margin: 0 }}>Asahi</h1>
          <div className="flower flower-left">
            <i className="icon icon-flower-left"> </i>
          </div>
          <div className="header-top-left">
            <div className="login clearfix">
              <ul>
                <li>
                  <Link style={{}} href="/login" title="Đăng nhập">
                    <a>Đăng nhập</a>
                  </Link>
                </li>
                <li>
                  <Link style={{}} href="/signup" title="Đăng ký">
                    <a>Đăng ký</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-top-right">
            <div className="language">
              <ul>
                <li className="active">
                  <Link
                    href="/set-language.html?lang=vi&actionKey=eyJ1cmwiOiJcLyIsInBhcmFtcyI6W119"
                    title="VN"
                  >
                    <a>VN</a>
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/set-language.html?lang=en&actionKey=eyJ1cmwiOiJcLyIsInBhcmFtcyI6W119"
                    title="EN"
                  >
                    <a>EN</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flower flower-right">
            <i className="icon icon-flower-right"> </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopMobile;
