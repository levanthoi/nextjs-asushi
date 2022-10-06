import React, {useState, useEffect} from "react";
import Link from 'next/link';
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import PageAbout from "../PageAbout";
import MenuProd from "./MenuProd";
import { DataProduct } from "src/data/data";
import shop from "src/helper/shop";
import { useDispatch } from "react-redux";
import { addToCart} from "src/redux/reducers/cartSlice";


const ProductDetail = () => {
  const {productIdChild} = useParams();
  const [productDetail, setProductDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  useEffect (() => {
    const productDetail = DataProduct.filter((ele) => `food-name-${ele.id}` === productIdChild)
    setProductDetail(productDetail[0]);
  }, [productIdChild])

  const dispatch = useDispatch();
  const {id, img, des, price, name, nameJapan} = productDetail;

  const width = window.innerWidth;
  let BoxContainer = {};
  if(width > 1024) BoxContainer ={width: 1069, margin:" 0 auto"};

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("quantity", quantity);
    const cartItem ={
      id: id,
      img: img,
      price: price,
      name: name,
      nameJapan: nameJapan,
      quantity: quantity
    }
    dispatch(addToCart(cartItem));
  }
  return (
    <>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Thực đơn" nameJapan="麺類" />
        <div className="page-menu page-menu3 clearfix">
          <div className="container" style={BoxContainer}>
            <div className="menu-title menu-title3">
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
                      <div
                        className="detail-item-product"
                        id="product-detail-info"
                      >
                        <div className="row">
                          <div className="col-detail col-sm-6 col-xs-12">
                            <div className="box-img box-img-product-detail">
                              <a
                                href="!#"
                                title={`${name} - ${nameJapan}`}
                              >
                                <img
                                  src={img}
                                  alt={`${name} - ${nameJapan}`}
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-detail col-sm-6 col-xs-12">
                            <div className="box-info-product-detail">
                              <h1>
                                {name} <br />
                                <span> {nameJapan}</span>
                              </h1>
                              <div className="box-price clearfix">
                                <span className="price">{shop.formatProductPrice(price)} VND</span>
                              </div>
                              <div className="description-detail">
                                <p>
                                  {des}
                                </p>
                                <p>
                                  {des}
                                </p>
                              </div>
                              <div className="box-product-list-bottom box-product-detail-bottom clearfix">
                                <div className="box-qty clearfix">
                                  <div
                                    id="reduction"
                                    className="reduction"
                                    onClick={() => {
                                      if( quantity > 1) setQuantity(pre => pre -1 )
                                    }}
                                  />
                                  <input
                                    id="product_quantity"
                                    type="number"
                                    className="form-control sc-quantity"
                                    max-lenght={3}
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    name="qty"
                                    min={0}
                                    step={0}
                                  />
                                  <div
                                    id="increase"
                                    className="increase"
                                    onClick={() => setQuantity(pre => pre +1)}
                                  />
                                </div>
                                <div className="box-add-cart">
                                  <Link
                                     onClick={handleSubmit}
                                    data-params="#product-detail-info"
                                    className="addtocart"
                                    title="chọn món"
                                  >
                                    chọn món
                                  </Link>
                                </div>
                              </div>
                              <div className="detail-booking">
                                ĐẶT BÀN NGAY : <a href="tel:" title="#" />
                              </div>
                            </div>
                          </div>
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

export default ProductDetail;
