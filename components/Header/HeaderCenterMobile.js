import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { DataMenu } from "../../data/data";
import { useSelector } from "react-redux";
import shop from "../../helper/shop";

const HeaderCenterMobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuChild, setShowMenuChild] = useState(false);
  const DataCart = useSelector((state) => state.cart);
  const cartTotal = DataCart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return (
    <>
      <Head></Head>
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
                    <Link href="/cart">
                      <i className="icon icon-shoppingcart"> </i>
                    </Link>
                    <div className="Cart">
                      <div className="box-cart">
                        <a className="close-item-cart">x</a>
                        <div className="header-box-cart">
                          <p>GIỎ HÀNG</p>
                        </div>
                        <div className="cont-cart ">
                          <div className="mush">
                            {DataCart.map((cartItem) => {
                              const {
                                id,
                                name,
                                nameJapan,
                                quantity,
                                price,
                                img,
                              } = cartItem;
                              // const urlCategory = getUrl(id);
                              return (
                                <div key={id} className="box-sp-cart clearfix">
                                  <div className="box-img-cart">
                                    <Link
                                      href={{
                                        pathname: "/product/detail",
                                        query: { food: id },
                                      }}
                                      title={`${name} - ${nameJapan}`}
                                    >
                                      <img
                                        src={img}
                                        alt={`${name} - ${nameJapan}`}
                                      />
                                    </Link>
                                  </div>
                                  <div className="box-info-cart">
                                    <h4 className="title-product-cart">
                                      <Link
                                        href={{
                                          pathname: "/product/detail",
                                          query: { food: id },
                                        }}
                                        title={`${name} - ${nameJapan}`}
                                      >
                                        <a>{`${name} - ${nameJapan}`}</a>
                                      </Link>
                                    </h4>
                                    <p>
                                      <span className="price-cart">
                                        {shop.formatProductPrice(price)}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="number-cart">
                                    <p>
                                      <span>x</span>
                                      <span>{quantity}</span>
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="bottom-cart">
                          <p className="total">
                            <span className="pricetext">
                              {shop.formatProductPrice(cartTotal)}
                            </span>
                            {/* <span className="currencytext">đ</span> */}
                          </p>
                          <Link className="check-out" href="/cart">
                            <a>Giỏ hàng</a>
                          </Link>
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
                <div id="menu-button" onClick={() => setShowMenu(!showMenu)} />
                {showMenu && (
                  <ul className="">
                    {DataMenu.map((item) => (
                      <li
                        key={item.id}
                        className={item.name === "Thực đơn" ? "has-sub" : ""}
                        // onClick={(e) => setWidth(e.target.innerWidth)}
                      >
                        {item.id === 3 && (
                          <span
                            className="submenu-button"
                            onClick={() => setShowMenuChild(!showMenuChild)}
                            // onClick={() => console.log("Da")}
                          />
                        )}

                        <Link
                          href={item.url}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          title={`${item.name} - ${item.nameJapan}`}
                        >
                          <a>
                            {item.name}
                            <br />
                            <span className="menu-language-japan">
                              {item.nameJapan}
                            </span>
                          </a>
                        </Link>
                        {item.children && showMenuChild && (
                          <ul>
                            {item.children.map((curItem) => {
                              const { id, name, nameJapan, url } = curItem;
                              return (
                                <li className=" " key={id}>
                                  <Link href={`/product/${url}`}>
                                    <a title={`${name} - ${nameJapan}`}>
                                      {name} <br />
                                      <span className="menu-language-japan">
                                        {" "}
                                        {nameJapan}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              );
                            })}
                            {/* {item.children.map((category) => {
                              <LiItem
                                key={category.id}
                                url={category.url}
                                name={category.name}
                                nameJapan={category.nameJapan}
                              />;
                            })} */}
                            {/* <li>
                              <a href="/">sa</a>
                            </li>
                            <li>
                              <a href="/">sa</a>
                            </li> */}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
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
    </>
  );
};

const LiItem = (props) => {
  const { url, name, nameJapan } = props;
  return (
    <li className=" ">
      <Link href={url} title={`${name} - ${nameJapan}`}>
        <a>
          {name} <br />
          <span className="menu-language-japan"> {nameJapan}</span>
        </a>
      </Link>
    </li>
  );
};

export default HeaderCenterMobile;
