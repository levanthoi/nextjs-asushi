import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import shop from "../../helper/shop";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartSlice";
import { DataVoucher } from "../../data/data";
import Banner from "../../components/Banner/Banner";
import PageAbout from "../../components/PageAbout";
import DefaultLayout from "../../layout/DefaultLayout";

const VoucherDetail = () => {
  const router = useRouter();
  const { voucherId } = router.query;
  const item = DataVoucher.find((ele) => ele.id === Number(voucherId));
  const [voucherDetail, setVoucherDetail] = useState(item);
  const [windowSize, setWindowSize] = useState();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const voucherDetail = DataVoucher.find(
      (ele) => ele.id === Number(voucherId)
    );
    console.log("voucherDetail", voucherDetail);
    setVoucherDetail(voucherDetail);
  }, [voucherId]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize(window.innerWidth);
    }
  }, []);

  let BoxContainer = {};
  if (windowSize > 1024) BoxContainer = { width: 1069, margin: " 0 auto" };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cartItem = {
      id: voucherDetail.id,
      img: voucherDetail.img,
      price: voucherDetail.price,
      name: voucherDetail.name,
      nameJapan: voucherDetail.nameJapan,
      quantity: quantity,
    };
    dispatch(addToCart(cartItem));
  };
  return (
    <DefaultLayout>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Voucher" nameJapan="麺類" />
        <div className="page-voucher page-voucher2 clearfix">
          <div className="container" style={BoxContainer}>
            <div className="voucher-title voucher-title1">
              <div className="voucher-product-content voucher-product2-content">
                <div data-example-id="togglable-tabs">
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
                        {voucherDetail && (
                          <div className="row">
                            <div className="col-detail col-sm-6 col-xs-12">
                              <div className="box-img box-img-product-detail">
                                <a
                                  href="!#"
                                  title={`${voucherDetail.name} - ${voucherDetail.nameJapan}`}
                                >
                                  <img
                                    src={voucherDetail.img}
                                    alt={`${voucherDetail.name} - ${voucherDetail.nameJapan}`}
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-detail col-sm-6 col-xs-12">
                              <div className="box-info-product-detail">
                                <h1>
                                  {voucherDetail.name} <br />
                                  <span> {voucherDetail.nameJapan}</span>
                                </h1>
                                <div className="box-price clearfix">
                                  <span className="price">
                                    {shop.formatProductPrice(
                                      voucherDetail.price
                                    )}{" "}
                                    {/* VND */}
                                  </span>
                                </div>
                                <div className="description-detail">
                                  <p>{voucherDetail.des}</p>
                                  <p>{voucherDetail.des}</p>
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
                                    <Link
                                      href="/product"
                                      // data-params="#product-detail-info"
                                      title="chọn món"
                                    >
                                      <a
                                        className="addtocart"
                                        onClick={() => handleSubmit(e)}
                                      >
                                        <>chọn món</>
                                      </a>
                                    </Link>
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

export default VoucherDetail;
