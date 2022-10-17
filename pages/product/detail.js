import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner from "../../components/Banner/Banner";
import PageAbout from "../../components/PageAbout";
import MenuProd from "../../components/Product/MenuProd";
import { DataProduct, DataVoucher } from "../../data/data";
import shop from "../../helper/shop";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";
import DefaultLayout from "../../layout/DefaultLayout";
import Head from "next/head";

const ProductDetail = () => {
  const router = useRouter();
  const { food } = router.query;
  const [productDetail, setProductDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const productDetail =
      DataProduct.find((curEle) => curEle.id === food - 0) ||
      DataVoucher.find((curEle) => curEle.id === food - 0);
    setProductDetail(productDetail);
  }, [food]);

  const dispatch = useDispatch();
  const [windowSize, setWindowSize] = useState();
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      // function handleResize() {
      // Set window width/height to state
      setWindowSize(window.innerWidth);
      // }

      // Add event listener
      // window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      // handleResize();

      // Remove event listener on cleanup
      // return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  let BoxContainer = {};
  if (windowSize > 1024) BoxContainer = { width: 1069, margin: " 0 auto" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("quantity", quantity);
    const cartItem = {
      id: productDetail.id,
      img: productDetail.img,
      price: productDetail.price,
      name: productDetail.name,
      nameJapan: productDetail.nameJapan,
      quantity: quantity,
    };
    dispatch(addToCart(cartItem));
  };
  return (
    <DefaultLayout>
      <Head>
        <title>{productDetail && `${productDetail.name}`}</title>
      </Head>
      {/* <h1>aaa</h1> */}
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
                        {productDetail && (
                          <div className="row">
                            <div className="col-detail col-lg-6 col-xs-12">
                              <div className="box-img box-img-product-detail">
                                <a
                                  href="!#"
                                  title={`${productDetail.name} - ${productDetail.nameJapan}`}
                                >
                                  <img
                                    src={productDetail.img}
                                    alt={`${productDetail.name} - ${productDetail.nameJapan}`}
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-detail col-lg-6 col-xs-12">
                              <div className="box-info-product-detail">
                                <h1>
                                  {productDetail.name} <br />
                                  <span> {productDetail.nameJapan}</span>
                                </h1>
                                <div className="box-price clearfix">
                                  <span className="price">
                                    {shop.formatProductPrice(
                                      productDetail.price
                                    )}{" "}
                                    VND
                                  </span>
                                </div>
                                <div className="description-detail">
                                  <p>{productDetail.des}</p>
                                  <p>{productDetail.des}</p>
                                </div>
                                <div className="box-product-list-bottom box-product-detail-bottom clearfix">
                                  <div className="box-qty clearfix">
                                    <div
                                      id="reduction"
                                      className="reduction"
                                      onClick={() => {
                                        if (quantity > 1)
                                          setQuantity((pre) => pre - 1);
                                      }}
                                    />
                                    <input
                                      id="product_quantity"
                                      type="number"
                                      className="form-control sc-quantity"
                                      max-lenght={3}
                                      value={quantity}
                                      onChange={(e) =>
                                        setQuantity(Number(e.target.value))
                                      }
                                      name="qty"
                                      min={0}
                                      step={0}
                                    />
                                    <div
                                      id="increase"
                                      className="increase"
                                      onClick={() =>
                                        setQuantity((pre) => pre + 1)
                                      }
                                    />
                                  </div>
                                  <div className="box-add-cart">
                                    <a
                                      onClick={handleSubmit}
                                      data-params="#product-detail-info"
                                      className="addtocart"
                                      title="chọn món"
                                    >
                                      <>chọn món</>
                                    </a>
                                  </div>
                                </div>
                                <div className="detail-booking">
                                  ĐẶT BÀN NGAY : <a href="tel:" title="#" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default ProductDetail;
