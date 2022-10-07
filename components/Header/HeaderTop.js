import React from "react";
import Link from "next/link";
import Head from "next/head";

const HeaderTop = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="../../static/css/about.css" />
        <link rel="stylesheet" href="../../static/css/test.css" />
      </Head>
      <div className="header-top" style={{}}>
        <h1 style={{ textIndent: "-9999px", height: "0px", margin: "0px" }}>
          Ashahi
        </h1>
        <div className="container">
          <div className="header-top-left">
            <div className="login clearfix">
              <ul>
                <li>
                  <Link href="/signup">
                    <a>Đăng ký</a>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <a>Đăng nhập</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-top-right"></div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
