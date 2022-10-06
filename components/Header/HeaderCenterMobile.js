import React from "react";
import Link from "next/link";

const HeaderCenterMobile = () => {
  return (
    <div className="header-center clearfix">
      <div className="container">
        <div className="header-center-content clearfix">
          <div className="header-cc">
            <div className="header-center-content-left clearfix">
              <div className="box-img box-img-logo">
                <Link href="/" title="Asahi">
                  <img src="/images/logo.png" alt="Asahi" />
                </Link>
              </div>
            </div>
            <div className="header-center-content-right clearfix">
              <div className="content-hccr">
                <div className="hotline">
                  <Link href="tel:0968 266 266" title="#">
                    <i className="icon icon-hotline"> </i>
                  </Link>
                </div>
                <div className="shoppingcart">
                  <a>
                    <i className="icon icon-shoppingcart"> </i>
                  </a>
                  <div className="Cart">
                    <div className="box-cart">
                      <a className="close-item-cart">x</a>
                      <div className="header-box-cart">
                        <p>GIỎ HÀNG</p>
                      </div>
                      <div className="cont-cart ">
                        <div className="mush">
                          <div className="box-sp-cart clearfix">
                            <div className="box-img-cart">
                              <a
                                href="/food-name-pd,5556"
                                title="Salad Tôm Và Cá Ngừ -  シュリンプと鮪のサラダ"
                              >
                                <img
                                  src="http://w3ni385.nanoweb.com.vn/mediacenter/media/images/products/363/1/s50_50/imgspmenu2.jpg"
                                  alt="Salad Tôm Và Cá Ngừ -  シュリンプと鮪のサラダ"
                                />
                              </a>
                            </div>
                            <div className="box-info-cart">
                              <h4 className="title-product-cart">
                                <a
                                  href="/food-name-pd,5556"
                                  title="Salad Tôm Và Cá Ngừ -  シュリンプと鮪のサラダ"
                                >
                                  Salad Tôm Và Cá Ngừ - シュリンプと鮪のサラダ
                                </a>
                              </h4>
                              <p>
                                {" "}
                                <span className="price-cart"> 40.000 VND</span>
                              </p>
                            </div>
                            <div className="number-cart">
                              <p>
                                <span>x</span>
                                <span>2</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-cart">
                        <p className="total">
                          <span className="pricetext">80.000</span>
                          <span className="currencytext">đ</span>
                        </p>
                        <a className="check-out" href="/gio-hang.html">
                          Giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav id="nav" className="nav clearfix">
            <div id="cssmenu" className="cssmenu">
              <div id="menu-line" style={{ width: 100, left: 0 }} />
              <div id="menu-button" />
              <ul>
                <li className=" active">
                  <a href="/" title="Trang chủ - 杉屋について">
                    Trang chủ <br />
                    <span className="menu-language-japan">
                      {" "}
                      杉屋について
                    </span>{" "}
                  </a>
                </li>
                <li className=" ">
                  <a href="/gioi-thieu.html" title="Chúng tôi - 杉屋について">
                    Chúng tôi <br />
                    <span className="menu-language-japan">
                      {" "}
                      杉屋について
                    </span>{" "}
                  </a>
                </li>
                <li className="has-sub">
                  <span className="submenu-button" />
                  <a href="/san-pham.html" title="Thực đơn - お品書き">
                    Thực đơn <br />
                    <span className="menu-language-japan"> お品書き</span>{" "}
                  </a>
                  <ul>
                    <li className=" ">
                      <a href="/khai-vi-pc,5699" title="Khai vị - アペタイザー">
                        Khai vị <br />
                        <span className="menu-language-japan">
                          {" "}
                          アペタイザー
                        </span>{" "}
                      </a>
                    </li>
                    <li className=" ">
                      <a href="/mon-nuong-pc,5700" title="Món nướng - 焼き">
                        Món nướng <br />
                        <span className="menu-language-japan"> 焼き</span>{" "}
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        href="/sashimi-sushi-pc,5703"
                        title="Sashimi, sushi - 刺身 , 寿司"
                      >
                        Sashimi, sushi <br />
                        <span className="menu-language-japan">
                          {" "}
                          刺身 , 寿司
                        </span>{" "}
                      </a>
                    </li>
                    <li className=" ">
                      <a href="/mon-chien-pc,5723" title="Món chiên - 揚げ">
                        Món chiên <br />
                        <span className="menu-language-japan"> 揚げ</span>{" "}
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        href="/com-chao-pc,5724"
                        title="Cơm, cháo - 米, ポリッジ"
                      >
                        Cơm, cháo <br />
                        <span className="menu-language-japan">
                          {" "}
                          米, ポリッジ
                        </span>{" "}
                      </a>
                    </li>
                    <li className=" ">
                      <a href="/mon-mi-pc,5729" title="Món mì - 麺類">
                        Món mì <br />
                        <span className="menu-language-japan"> 麺類</span>{" "}
                      </a>
                    </li>
                    <li className=" ">
                      <a
                        href="/teppanyaki-pc,5725"
                        title="Teppanyaki - 鉄板焼き"
                      >
                        Teppanyaki <br />
                        <span className="menu-language-japan">
                          {" "}
                          鉄板焼き
                        </span>{" "}
                      </a>
                    </li>
                    <li className=" ">
                      <a href="/mon-om-pc,5726" title="Món om - 煮る">
                        Món om <br />
                        <span className="menu-language-japan"> 煮る</span>{" "}
                      </a>
                    </li>
                    <li className=" ">
                      <a href="/mon-lau-pc,5727" title="Món lẩu - 鍋">
                        Món lẩu <br />
                        <span className="menu-language-japan"> 鍋</span>{" "}
                      </a>
                    </li>
                    <li className=" ">
                      <a href="/mon-dac-biet-pc,5728" title="Món đặc biệt - ?">
                        Món đặc biệt <br />
                        <span className="menu-language-japan"> ?</span>{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a
                    href="/tin-khuyen-mai-poc,61"
                    title="Khuyến mại - プロモーション"
                  >
                    Khuyến mại <br />
                    <span className="menu-language-japan">
                      {" "}
                      プロモーション
                    </span>{" "}
                  </a>
                </li>
                <li className=" ">
                  <a href="/voucher-pc,5704" title="Voucher - クーポン">
                    Voucher <br />
                    <span className="menu-language-japan"> クーポン</span>{" "}
                  </a>
                </li>
                <li className=" ">
                  <a href="/dat-ban.html" title="Đặt bàn - 貸し切り">
                    Đặt bàn <br />
                    <span className="menu-language-japan"> 貸し切り</span>{" "}
                  </a>
                </li>
                <li className=" ">
                  <a href="/bai-viet.html" title="Tin tức - >ニュース">
                    Tin tức <br />
                    <span className="menu-language-japan">
                      {" "}
                      &gt;ニュース
                    </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header-bottom-facebook">
            <a rel="nofollow" href="http://facebook.com" target="_blank">
              <i className="icon icon-facebook"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenterMobile;
