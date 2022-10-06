import Head from "next/head";
import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Banner from "/components/Banner/Banner";
import CardNew from "/components/New/CardNew";
import PageAbout from "/components/PageAbout";
import { DataNews } from "/data/data";

const New = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Tin mới</title>
        <link rel="stylesheet" href="../../static/css/new.css" />
      </Head>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Tin tức" nameJapan="麺類" />
        <div className="page-new page-new1 clearfix">
          <div className="container">
            <div
              className="new-content new-content1"
              style={{ marginBottom: 20 }}
            >
              <div className="row">
                {DataNews.map((item) => (
                  <CardNew key={item.id} itemNew={item} />
                ))}
              </div>
            </div>
            <div
              className="news-page"
              style={{ marginBottom: 68, textAlign: "center" }}
            ></div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default New;
