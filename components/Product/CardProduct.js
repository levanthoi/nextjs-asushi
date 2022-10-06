import React, { useState, useEffect } from "react";
import Link from 'next/link';
import images from "/static/images/images";
import Banner from "../Banner/Banner";
import PageAbout from "../PageAbout";
import MenuProd from "./MenuProd";
import { DataProduct } from "/data/data";
import { DataCategory } from "/data/data";
import shop from "/helper/shop";
import { useDispatch } from "react-redux";
import { addToCart } from "/redux/reducers/cartSlice";

const CardProduct = () => {
  const { productId } = useParams();
  const category = DataCategory.filter((menu) => menu.url === productId)[0];
  const product = DataProduct.filter(
    (product) => product.categoryId === category.id
  );
  const [listProduct, setListProduct] = useState(product);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = DataProduct.filter(
      (product) => product.categoryId === category.id
    );
    setListProduct(product);
  }, [productId]);

  // categories is your top level categories object and data is the children you posted
// const tree = DataCategory.map(category => {
//   return { 
//     ...category,
//     children: DataProduct.filter(child => child.categoryId === category.id)
//   }
// })
// console.log("DataProduct", DataProduct);
// console.log("tree", tree);

  const handleSubmit = (id, quantity, name, nameJapan, price, img) => {
    // e.preventDefault();
    const cartItem = {
      id: id,
      img: img,
      name: name,
      nameJapan: nameJapan,
      price: price,
      quantity: quantity
    }
    dispatch(addToCart(cartItem));
  }

  const updateQuantity = (id, e, type) => {
    const item = listProduct.filter((item) => item.id === id)[0];
    console.log("item", item);
    const updateCart = listProduct.map((curElem) => {
      if (curElem.id === id) {
        switch(type){
          case 'increase':
            return { ...curElem, quantity: curElem.quantity + 1 };
            break;
          case 'decrease':
            if(curElem.quantity>1) return { ...curElem, quantity: curElem.quantity - 1 };
            break;
          case 'change':
            if(curElem.quantity>=1) return {...curElem, quantity: e.target.value };
            break;
        }
      }
      return curElem;
    });
    setListProduct(updateCart);
  };

  return (
    <>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Thực đơn" nameJapan="麺類" />
        <div className="page-menu page-menu2 clearfix">
          <div className="container">
            <div className="menu-title menu-title2">
              <div className="menu-product-content menu-product2-content">
                <div data-example-id="togglable-tabs">
                  <MenuProd />
                  <div id="myTabContent" className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="product-1"
                      aria-labelledby="product-1-tab"
                    >
                      <div className="item-product item-product2">
                        <div className="box-img-product">
                          <Link
                            href={`/product/${category.url}`}
                            title="Khai vị - アペタイザー"
                          >
                            <img
                              src={images[category.img]}
                              alt="Khai vị - アペタイザー"
                            />
                          </Link>
                        </div>
                        <div className="box-info-product">
                          <h2>
                            <Link
                              href={`/product/${category.url}`}
                              title={`${category.name} - ${category.nameJapan}`}
                            >
                              <i className="bg-bip bg-bip-top"> </i>
                              {category.name} <br />
                              <span className="language-japan">
                                {" "}
                                {category.nameJapan}
                              </span>
                              <i className="bg-bip bg-bip-bottom"> </i>
                            </Link>
                          </h2>
                        </div>
                      </div>
                      <div className="list-item-product">
                        <div className="row">
                          {listProduct.map((item) => {
                            const {
                              id,
                              img,
                              price,
                              name,
                              quantity,
                              nameJapan,
                            } = item;
                            return (
                              <div
                                key={id}
                                className="col-list col-md-4 col-sm-6 col-xs-6"
                              >
                                <div className="col-list-content">
                                  <div className="box-img box-img-product-list">
                                    <Link
                                      href={`/product/${category.url}/food-name-${id}`}
                                      title={`${name} - ${nameJapan}`}
                                    >
                                      <img
                                        src={img}
                                        alt={`${name} - ${nameJapan}`}
                                      />
                                    </Link>
                                  </div>
                                  <div className="box-info-product-list">
                                    <h4>
                                      <Link
                                        href={`/product/${category.url}/food-name-${id}`}
                                        title={`${name} - ${nameJapan}`}
                                      >
                                        {name}
                                        <br />
                                        <span> {nameJapan}</span>
                                      </Link>
                                    </h4>
                                    <div className="box-price clearfix">
                                      <span className="price">
                                        {shop.formatProductPrice(price)} VNĐ
                                      </span>
                                    </div>
                                    <div className="box-product-list-bottom clearfix">
                                      <div className="box-qty clearfix">
                                        <div
                                          className="reduction"
                                          onClick={(e) =>
                                            updateQuantity(id,e, "decrease")
                                          }
                                        />
                                        <input
                                          type="number"
                                          className="qty-5556 form-control sc-quantity"
                                          max-lenght={3}
                                          value={quantity}
                                          onChange={(e) =>
                                            updateQuantity(id, e, "change")
                                          }
                                          name="qty"
                                          max={100}
                                          min={0}
                                          step={0}
                                        />
                                        <div
                                          className="increase"
                                          onClick={(e) =>
                                            updateQuantity(id,e,  "increase")
                                          }
                                        />
                                      </div>
                                      <div className="box-add-cart">
                                        <a
                                          onClick={() => handleSubmit(id, quantity, name, nameJapan, price, img)}
                                          className="btn_add_food"
                                          name={5556}
                                          title="chọn món"
                                        >
                                          chọn món
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CardProduct;
