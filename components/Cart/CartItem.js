import React, { useState, useEffect } from "react";
import shop from "../../helper/shop";
import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  increaseCart,
  decreaseCart,
  updateCart,
  deleteFromCart,
} from "../../redux/reducers/cartSlice";
import Head from "next/head";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, img, price, quantity, nameJapan } = props.item;
  const [tempPrice, setTempPrice] = useState(price);
  // const categoryUrl = shop.getUrl(id);
  useEffect(() => {
    setTempPrice(quantity * price);
  }, [quantity]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="../../static/css/product.css" />
        {/* <link rel="stylesheet" href="../../static/css/main.min.css" /> */}
      </Head>
      <div className={`item-cart productid-${id}`}>
        <div style={{ width: "18%" }} className="image">
          <Link
            className="product-image"
            title={name}
            href={{
              pathname: "/product/detail",
              query: { food: id },
            }}
          >
            <img width={75} height="auto" src={img} />
          </Link>
        </div>
        <div style={{ width: "31%" }} className="a-left">
          <h2 className="product-name">
            <Link
              href={{
                pathname: "/product/detail",
                query: { food: id },
              }}
              title={name}
            >
              {`${name} - ${nameJapan}`}
            </Link>
          </h2>
        </div>
        <div style={{ width: "15%" }} className="a-right">
          <span className="item-price">
            <span className="price">
              <span className="pricetext">
                {shop.formatProductPrice(price)}
              </span>
              {/* <span className="currencytext">đ</span> */}
            </span>
          </span>
        </div>
        <div style={{ width: "14%", display: "flex" }} className="a-center">
          <button
            className="reduced items-count btn-minus"
            type="button"
            onClick={() => dispatch(decreaseCart(props.item))}
          >
            –
          </button>
          <input
            type="text"
            maxLength={3}
            min={1}
            step={1}
            className="input-text number-sidebar qtyItem"
            id="quantity-5572"
            name="qty"
            value={quantity}
            onChange={() => dispatch(updateCart(props.item))}
          />
          <button
            className="increase items-count btn-plus"
            type="button"
            onClick={
              () =>
                // console.log("increaseCart", increaseCart())
                dispatch(increaseCart(props.item))
              // dispatch({
              //   type: increaseCart.type,
              //   payload: increaseCart.payload,
              // })
            }
          >
            +
          </button>
        </div>
        <div style={{ width: "15%" }} className="a-center">
          <span className="cart-price">
            <span className="price">
              <span className="pricetext">
                {shop.formatProductPrice(tempPrice)}
              </span>
              {/* <span className="currencytext">đ</span> */}
            </span>
          </span>
        </div>
        <div style={{ width: "7%" }}>
          <a
            // onClick={() => removeFromCart(props.item)}
            className="button remove-item remove-item-cart"
            title="Xóa"
            onClick={() => {
              dispatch(deleteFromCart(props.item));
              setTempPrice();
            }}
          />
        </div>
      </div>
    </>
  );
};

export const CartItemMobile = (props) => {
  const dispatch = useDispatch();
  const { id, name, img, price, quantity, nameJapan } = props.item;
  const [tempPrice, setTempPrice] = useState(price);
  // const categoryUrl = shop.getUrl(id);
  useEffect(() => {
    setTempPrice(quantity * price);
  }, [quantity]);
  return (
    <li className={`item productid-${id}`}>
      <Link
        href={{
          pathname: "/product/detail",
          query: { food: id },
        }}
      >
        <a className="product-image" title={`${name} - ${nameJapan}`}>
          <img
            width={75}
            height="auto"
            alt={`${name} - ${nameJapan}`}
            src={img}
          />
        </a>
      </Link>
      <div className="detail-item">
        <div className="product-details">
          <a
            title="Xóa"
            className="remove-item-cart fa fa-trash-o"
            onClick={() => {
              dispatch(deleteFromCart(props.item));
              // setTempPrice();
            }}
          />
          <p className="product-name">
            <Link href="/product" title={`${name} - ${nameJapan}`}>
              <a>
                {name} - {nameJapan}
              </a>
            </Link>
          </p>
        </div>
        <div className="product-details-bottom">
          <span className="price">
            <span className="pricetext">{shop.formatProductPrice(price)}</span>
            {/* <span className="currencytext">đ</span> */}
          </span>
          <div className="quantity-select">
            <button
              className="reduced items-count btn-minus"
              type="button"
              onClick={() => dispatch(decreaseCart(props.item))}
            >
              –
            </button>
            <input
              type="text"
              maxLength={3}
              min={1}
              className="input-text number-sidebar qtyMobile"
              id="qtyMobile"
              name="qty"
              value={quantity}
              onChange={() => console.log("a")}
            />
            <button
              className="increase items-count btn-plus"
              type="button"
              // onClick={() => dispatch(increaseCart.type)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
