import React from 'react';
import Link from 'next/link'
import Banner from '/components/Banner/Banner';
import DefaultLayout from '../layout/DefaultLayout';
import Head from 'next/head';

const Login = () => {
  return (
    <DefaultLayout >
      <Head>
        <title>Đăng kí</title>
      </Head>
      <Banner />
      <main id="main" className="main clearfix">
        <div className="container">
          <div className="form-login">
            <h2 className="header-title">Đăng nhập</h2>
            <form
              className="form-horizontal"
              id="login-form"
              action="/login"
              method="GET"
            >
              <div className="regis control-group form-group">
                <label
                  className="col-sm-3 control-label  required"
                  htmlFor="LoginForm_username"
                >
                  Tên đăng nhập/Email
                  <span className="required">*</span>
                </label>
                <div className="controls col-sm-9">
                  <input
                    className="span9 form-control"
                    name="LoginForm[username]"
                    id="LoginForm_username"
                    type="text"
                  />
                  <div
                    className="errorMessage"
                    id="LoginForm_username_em_"
                    style={{ display: "none" }}
                  >
                    Tên đăng nhập không hợp lệ
                  </div>
                </div>
              </div>
              <div className="regis control-group form-group">
                <label
                  className="col-sm-3 control-label  required"
                  htmlFor="LoginForm_password"
                >
                  Mật khẩu <span className="required">*</span>
                </label>
                <div className="controls col-sm-9">
                  <input
                    className="span9 form-control"
                    name="LoginForm[password]"
                    id="LoginForm_password"
                    type="password"
                  />
                  <div
                    className="errorMessage"
                    id="LoginForm_password_em_"
                    style={{ display: "none" }}
                  >
                    Mật khẩu không hợp lệ.
                  </div>
                </div>
              </div>
              <div className="form-group" style={{ paddingTop: 10 }}>
                <div className="col-sm-offset-3 col-sm-9">
                  <input
                    tabIndex={10}
                    className="btn btn-primary"
                    type="submit"
                    name="yt0"
                    value="Đăng nhập"
                  />
                  <Link href="/signup">
                    <a className="btn btn-info">Đăng ký</a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

    </DefaultLayout >
  )
}

export default Login