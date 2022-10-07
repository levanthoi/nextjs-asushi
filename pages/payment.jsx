import React from 'react';
import Link from 'next/link'
import ItemLogin from '../components/Accout/ItemLogin';
import Head from 'next/head';

const Payment = () => {
  return (
    <>
      <Head>
        <title>Thanh toán</title>
        <link rel="stylesheet" href="../static/css/product.css" />
        <link rel="stylesheet" href="../static/css/main.min.css" />
        <link rel="stylesheet" href="../static/css/payment.css" />
      </Head>
      <div className="content-wrap">
        <div className="payment-step1-page">
          <div className="container">
            <div className="sc sc-checkout">
              <h2 className="sc-title">Đặt hàng và thanh toán</h2>
              <div className="row sc-userinfo">
                <div className="col-xs-12 col-lg-6 col-md-6 col-sm-6 sc-account-box">
                  <h3 className="sc-account-text">Thông tin tài khoản</h3>
                  <h3 className="sc-user-text">Bạn là khách hàng mới?</h3>
                  <p>
                    Đăng ký với chúng tôi để thanh toán nhanh hơn, để theo dõi tình
                    trạng đặt hàng của bạn và nhiều hơn nữa. Bạn cũng có thể thanh
                    toán mà không cần đăng ký tài khoản.
                  </p>
                  <a href="/pages/dang-ky.html" className="btn btn-sm btn-success">
                    Đăng ký tài khoản mới
                  </a>
                  <Link
                    href="/paymentDetail"
                  >
                    <a className="btn btn-sm btn-success"> Đặt hàng không cần tài khoản</a>
                  </Link>
                </div>
                <div className="col-xs-12 col-lg-6 col-md-6 col-sm-6 full-inmobile">
                  <div className="sc-user-login">
                    <h3 className="sc-user-text">Bạn đã có tài khoản</h3>
                    <form
                      className="form-horizontal"
                      id="login-form"
                      action="/login"
                      method="GET"
                    >
                      <div className="row">
                        <ItemLogin label='username' name='Tên đăng nhập / Email' />
                        &ensp;
                        <ItemLogin label='password' name='Mật khẩu' />

                        <div className="control-group form-group">
                          <div className="col-sm-offset-3 col-sm-9">
                            <input
                              id="ytLoginForm_rememberMe"
                              type="hidden"
                              defaultValue={0}
                              name="LoginForm[rememberMe]"
                            />
                            <input
                              className="fieldremem"
                              name="LoginForm[rememberMe]"
                              id="LoginForm_rememberMe"
                              defaultValue={1}
                              type="checkbox"
                            />
                            <label className="choice" htmlFor="fieldremem">
                              Nhớ đăng nhập
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                              className="btn btn-sm btn-primary"
                              type="submit"
                              name="yt0"
                              Value="Đăng nhập"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment;