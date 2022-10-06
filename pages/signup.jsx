import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner/Banner';
import DefaultLayout from '../layout/DefaultLayout';
import cities from '/data/dataCity';

const SignUp = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Đăng kí</title>
      </Head>
      <Banner />
      <main id="main" className="main clearfix">
        <div className="container">
          <div className="form-regis">
            <div className="regis">
              <h2 className="header-title">Đăng ký tài khoản</h2>
              <div className="form">
                <form
                  className="form-horizontal"
                  id="user-form"
                  action="/pages/dang-ky.html"
                  method="post"
                >
                  <h3 className="user-title">Thông tin tài khoản</h3>
                  <FormInput type="text" label='emai' name='Email' />
                  <FormInput type="password" label='password' name='Mật khẩu' />
                  <FormInput type="password" label='passwordConfirm' name='Nhập lại mật khẩu' />

                  <h3 className="user-title">Thông tin cá nhân</h3>
                  <FormInput type="text" label='name' name='Họ và tên' />

                  <div
                    className="regis control-group form-group"
                    style={{ marginTop: 5 }}
                  >
                    <label className="col-sm-3 control-label " htmlFor="Users_sex">
                      Giới tính
                    </label>
                    <div className="sex-res controls col-sm-9">
                      <select
                        className="span9 form-control"
                        name="Users[sex]"
                        id="Users_sex"
                      >
                        <option value="" selected="selected">
                          Chưa xác định
                        </option>
                        <option value="">Nam</option>
                        <option value="">Nữ</option>
                      </select>
                    </div>
                  </div>
                  <FormInput type="text" label='phone' name='Số điện thoại' />
                  <FormInput type="text" label='address' name='Địa chỉ' />
                  <FormInput label='province_id' name='Thành phố/Tỉnh' />
                  <FormInput label='district_id' name='Quận/Huyện/TX' />

                  <div className="form-group" style={{ paddingTop: 10 }}>
                    <div className="col-sm-offset-3 col-sm-9">
                      <input
                        tabIndex={10}
                        className="regis btn btn-primary"
                        type="submit"
                        name="yt0"
                        defaultValue="Đăng ký"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </main>
    </DefaultLayout>
  )
}

const FormInput = (props) => {
  const { label, name, type } = props;
  return (
    <div className="regis control-group form-group">
      <label
        className="col-sm-3 control-label  required"
        htmlFor={`Users_${label}`}
      >
        {name} <span className="required">*</span>
      </label>
      <div className="controls col-sm-9">
        {label === 'province_id' || label === 'district_id' ?
          <select
            className="span9 form-control"
            name={`Users[${label}]`}
            id={`Users_${label}`}
          >
            <option value=''>--- Chọn tỉnh/TP ---</option>
            {cities.map((city, index) => {
              return (
                <option key={index} value={index}>{city}</option>
              )
            })}
          </select>
          :
          <input
            className="span9 form-control"
            name={`Users[${label}]`}
            id={`Users_${label}`}
            type={type === "text" ? "text" : "password"}
            maxLength={100}
          />}

        <div
          className="errorMessage"
          id={`Users_${label}_em_`}
          style={{ display: "none" }}
        >Vui lòng không để rỗng.</div>
      </div>
    </div>
  )
}

export default SignUp