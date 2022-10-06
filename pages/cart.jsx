import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link'
import CartButton from '../components/Cart/CartButton';
import CartItem, { CartItemMobile } from '../components/Cart/CartItem';
import shop from '../helper/shop';
import Head from 'next/head';
import SecondLayout from '../layout/SecondLayout';


const Cart = () => {
  const DataCart = useSelector(state => state.cart);
  const cartTotal = DataCart.reduce((total, item) => total + item.quantity * item.price, 0);
  const [total, setTotal] = useState(cartTotal);
  const [countProduct, setCountProduct] = useState(0);
  const getTotalPrice = (data) => {
    return data.reduce((total, item) => total + item.quantity * item.price, 0);
  }
  useEffect(() => {
    if (DataCart.length > 0 && DataCart !== undefined) {
      setTotal(getTotalPrice(DataCart));
      setCountProduct(DataCart.length);
    }
  }, [DataCart])
  return (
    <SecondLayout>
      <Head>
        <title>Giỏ hàng</title>
        <link rel="stylesheet" href="../static/css/product.css" />
      </Head>
      <div className="bg-cart-page hidden-xs">
        {DataCart.length > 0 ?
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div className="bg-scroll">
                <div className="cart-thead">
                  <div style={{ width: "18%" }}>Ảnh sản phẩm</div>
                  <div style={{ width: "31%" }}>
                    <span className="nobr">Tên sản phẩm</span>
                  </div>
                  <div style={{ width: "15%" }} className="a-right">
                    <span className="nobr">Giá sản phẩm</span>
                  </div>
                  <div style={{ width: "14%" }} className="a-center">
                    Số lượng
                  </div>
                  <div style={{ width: "15%" }} className="a-center">
                    Tạm tính
                  </div>
                  <div style={{ width: "7%" }}>Xóa</div>
                </div>
                <div className="cart-tbody">
                  {DataCart.map((item) => {
                    return (
                      <CartItem key={item.id} item={item} />
                    )
                  })}
                </div>
              </div>
            </div>
            <div
              className="cart-collaterals col-lg-4 col-md-4 col-sm-12 col-xs-12"
              style={{ position: "static" }}
            >
              <div className="totals">
                <h3>Tổng cộng</h3>
                <div className="inner">
                  <table
                    className="table shopping-cart-table-total"
                    id="shopping-cart-totals-table"
                  >
                    <colgroup>
                      <col />
                      <col />
                    </colgroup>
                    <tfoot>
                      <tr>
                        <td colSpan={1} className="a-left">
                          <strong>Tổng tiền</strong>
                        </td>
                        <td>
                          <strong>
                            <span>
                              <span className="pricetext">{shop.formatProductPrice(total)}</span>
                              {/* <span className="currencytext">đ</span> */}
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <ul className="checkout">
                    <CartButton title='Tiến hành đặt Ngay' path="/payment" class1="btn-proceed-checkout" />
                    <CartButton title='Tiếp tục mua hàng' path="/product" class1="btn-continue" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="row">
            <div className=" col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <p className="text-warning">Chưa có sản phẩm nào trong giỏ hàng </p>
            </div>
            <div
              className="cart-collaterals col-lg-4 col-md-4 col-sm-12 col-xs-12"
              style={{ position: "static" }}
            >
              <div className="totals">
                <h3>Tổng cộng</h3>
                <div className="inner">
                  <ul className="checkout">
                    <li>
                      <CartButton title='Tiếp tục mua hàng' path="/product" class1="btn-continue" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }

      </div>

      <div className="bg-cart-page-mobile cart-droplist visible-xs">
        <div className="cart-droplist__content arrow_box">
          <div className="cart-droplist__status">
            <i className="fa fa-check" aria-hidden="true" />
            <span className="cart-counter-list">{countProduct}</span> Sản phẩm trong giỏ hàng
          </div>
          <div className="mini-list">
            {DataCart.length > 0 ?
              <ul className="list-item-cart">
                {DataCart.map((item) => {
                  return (
                    <CartItemMobile key={item.id} item={item} />
                  )
                })}
              </ul> :
              <p className="text-warning">Chưa có sản phẩm nào trong giỏ hàng</p>}
            <div className="top-subtotal">
              Tổng cộng:
              <span className="price total-price">
                <span className="pricetext">{shop.formatProductPrice(total)}</span>
                {/* <span className="currencytext">đ</span> */}
              </span>
            </div>
            <div className="actions">
              <button
                className="btn-checkout"
                type="button"
                aria-label="Tiến hành đặt hàng"
              >
                <Link href='/payment'>
                  <span>
                    <i className="fa fa-money" aria-hidden="true" /> Đặt hàng
                  </span>
                </Link>

              </button>
              <button
                className="btn-checkout btn-return"
                type="button"
                aria-label="Tiếp tục mua hàng"
              >
                <Link href='/product'>
                  <span>
                    <i className="fa fa-arrow-circle-left" aria-hidden="true" />
                    Tiếp tục mua hàng
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SecondLayout>


  )
}

export default Cart;