import Head from "next/head";
import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Banner from "/components/Banner/Banner";
import PageAbout from "/components/PageAbout";
import CardVoucher from "/components/Voucher/CardVoucher";
import { DataVoucher } from "/data/data";

const Voucher = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Voucher</title>
      </Head>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Voucher" nameJapan="麺類" />
        <div className="page-voucher page-voucher1 clearfix">
          <div className="container">
            <div className="voucher-title voucher-title1"></div>
            <div className="voucher-content voucher-content1">
              <div className="row">
                {DataVoucher.map((item) => (
                  <CardVoucher key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="loading-shoppingcart" style={{ display: "none" }}>
          Loading...
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Voucher;
