import React from 'react';
import Banner from '/components/Banner/Banner';
import TimeBook from '/components/Book/TimeBook';
import PageAbout from '/components/PageAbout';
import { Item } from '/components/Book/TimeBook';
import { DataAddress, DataHotline } from '/data/data';
import DefaultLayout from '../layout/DefaultLayout';
import Head from 'next/head';


const formGroup = [
  {
    id: 1,
    name: 'name',
    text: 'HỌ VÀ TÊN',
    maxLength: '255',
    errorText: 'Họ và tên không được phép rỗng.'
  },
  {
    id: 2,
    name: 'email',
    text: 'Email',
    maxLength: '255',
    // errorText: 'Họ và tên không được phép rỗng.'
  },
  {
    id: 3,
    name: 'phone',
    text: 'ĐIỆN THOẠI',
    maxLength: '20',
    errorText: ' Số điện thoại không được phép rỗng.'
  },
  {
    id: 4,
    name: 'quantity',
    text: 'SỐ KHÁCH',
    // maxLength: '20',
    errorText: '  Số lượng không được phép rỗng'
  }
];

const Book = () => {
  const HotlinePri = DataHotline.find(item => item.primary === true);
  return (
    <DefaultLayout>
      <Head>
        <title>Đặt bàn</title>
        <link rel="stylesheet" href="../static/css/book.css" />
      </Head>
      <Banner />
      <div className="book-global">
        <main id="main" className="main clearfix">
          <PageAbout name="Đặt bàn" nameJapan="麺類" />
          <div className="page-order clearfix">
            <div className="container">
              <div className="order-content">
                <div className="order-content-left">
                  <form
                    className="form-horizontal"
                    id="book-table"
                    action="/pages/dat-ban.html"
                    method="post"
                  >
                    {
                      formGroup.map(({ id, name, text, errorText, maxLength }) => (
                        <Item key={id} name={name} text={text} errorText={errorText} maxLength={maxLength} />
                      ))
                    }

                    <div className="form-group w3-form-group">
                      <div className="row row-order">
                        <TimeBook text='THỜI GIAN' name='book_time' errorText='Thời gian không được phép rỗng.' class1='' class2="col-xs-4" class3="col-xs-8" />
                        <TimeBook text='NGÀY' name='book_date' errorText='Ngày không được phép rỗng.' class1='form-group2' class2="col-xs-3" class3="col-xs-9" />
                      </div>
                    </div>
                    <div className="form-group w3-form-group">
                      <label className="col-xs-2 control-label w3-form-label required">
                        Tin nhắn{" "}
                      </label>
                      <div className="col-xs-10 w3-form-field">
                        <textarea
                          className="form-control w3-form-input input-textarea"
                          placeholder="Tin nhắn"
                          name="BookTable[message]"
                          id="BookTable_message"
                          defaultValue={""}
                        />
                        <div
                          className="errorMessage"
                          id="BookTable_message_em_"
                          style={{ display: "none" }}
                        >
                          Tin nhắn không được phép rỗng.
                        </div>
                      </div>
                    </div>
                    <div className="bottom-total clearfix">
                      <div className="w3-form-group">
                        <div className="w3-form-button">
                          <input
                            className="btn btn-primary w3-btn w3-btn-sb back"
                            type="submit"
                            name="yt0"
                            defaultValue="ĐẶT BÀN"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="order-content-right">
                  {DataAddress.map(({ id, title, subtitle, address, hotline, fax }) => (
                    <div key={id} className={`order-content-address order-content-address${id}`}>
                      <div className="title">
                        <h2>{title}</h2>
                        <p>{subtitle}</p>
                      </div>
                      <div className="content">
                        <ul>
                          <li>{address}</li>
                          <li>{hotline}</li>
                          <li>{fax}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                  <div className="order-content-address order-content-address4">
                    <div className="text-content">
                      <p>Hotline</p>
                      <a href="tel:0902 286 286">{HotlinePri.hotline}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </DefaultLayout>
  )
}

export default Book