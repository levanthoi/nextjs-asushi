import React, { useState, useEffect } from "react";
import { DataMenu } from "/data/data";
import Link from "next/link";

const HeaderBottom = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuChild, setShowMenuChild] = useState(false);
  const [width, setWidth] = useState(0);
  // if (typeof window !== "undefined") {
  //   setWidth(window.innerWidth);
  // }

  const handleClick = () => {
    console.log("handle: ", width);
    setWidth(window.innerWidth);
    if (width >= 1025) setShowMenu(false);
    else if (width < 1025) setShowMenu(true);
  };
  // useEffect(() => {
  //   if (width >= 1025) setShowMenu(false);
  //   else if (width < 1025) {
  //     setShowMenu(true);
  //     setShowMenuChild(false);
  //   }
  // }, [width]);
  return (
    <div className="header-bottom">
      <div className="container">
        <nav id="nav" className="nav clearfix">
          <div id="cssmenu" className="cssmenu">
            <div id="menu-line" style={{ width: "121px", left: "0px" }} />
            <div id="menu-button" onClick={() => setShowMenu(!showMenu)} />
            {!showMenu && (
              <ul className="">
                {DataMenu.map((item) => (
                  <li
                    key={item.id}
                    className={item.name === "Thực đơn" ? "has-sub" : ""}
                    onClick={(e) => setWidth(e.target.innerWidth)}
                  >
                    {item.id === 3 && (
                      <span
                        className="submenu-button"
                        onClick={() => setShowMenuChild(true)}
                      />
                    )}

                    <Link
                      href={item.url}
                      className={({ isActive }) => (isActive ? "active" : "")}
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
                    {/* {console.log('id: ', item.id, showMenuChild)} */}
                    {item.id === 3 && showMenuChild && (
                      <ul>
                        {item.children.map((category) => {
                          <LiItem
                            key={category.id}
                            url={category.url}
                            name={category.name}
                            nameJapan={category.nameJapan}
                          />;
                        })}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
        <div className="header-bottom-facebook">
          <a rel="noreferrer" href="http://facebook.com/" target="_blank">
            <i className="icon icon-facebook"> </i>
          </a>
        </div>
      </div>
    </div>
  );
};

const LiItem = (props) => {
  const { url, name, nameJapan } = props;
  return (
    <li className=" ">
      <Link href={url} title={`${name} - ${nameJapan}`}>
        {name} <br />
        <span className="menu-language-japan"> {nameJapan}</span>{" "}
      </Link>
    </li>
  );
};

export default HeaderBottom;
