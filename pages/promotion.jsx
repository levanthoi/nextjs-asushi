import Head from "next/head";
import React, { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import Banner from "/components/Banner/Banner";
import PageAbout from "/components/PageAbout";
import { useSelector } from "react-redux";


const Promotion = () => {
  const [active, setActive] = useState(1);
  const handleClick = (id) => {
    setActive(id);
  }

  //get data promotion
  const DataPromotion = useSelector(state => state.promotion.value);
  return (
    <DefaultLayout>
      <Head>
        <title>Khuyến mãi</title>
      </Head>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Khuyến mại" nameJapan="麺類" />
        <div className="page-promotion clearfix">
          <div className="container">
            <div className="promotion-content clearfix">
              <div className="promotion-content-left">
                <div className="list-promotion">
                  <div className="mush" dir="rtl">
                    {DataPromotion.map((item) => (
                      <div key={item.id}
                        style={{ cursor: "pointer" }}
                        title={item.title}
                        name={4}
                        className={`title-promotion ms-thumb ${active === item.id ? 'active' : ''}`}
                        onClick={() => handleClick(item.id)}
                      >
                        <i className="icon-news" />
                        <h4>{item.title}</h4>
                        <span>
                          {item.subtitle}
                        </span>
                        <div className="wrap-social">
                          <span className="publicdate">{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="promotion-content-right">
                {
                  DataPromotion.map(item => {
                    return (
                      <div
                        key={item.id}
                        className={`content-promotion content-promotion-${item.id}`}
                        style={active === item.id ? { display: "block" } : { display: "none" }}

                      >
                        <img
                          alt=""
                          src={item.img}
                        // style={{ width: 635, height: 890 }}
                        />
                      </div>
                    )
                  })
                }


              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Promotion;
