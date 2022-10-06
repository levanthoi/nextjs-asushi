import Head from "next/head";
import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import CardAbout from "/components/About/CardAbout";
import Banner from "/components/Banner/Banner";
import { DataAbout } from "/data/data";

const About = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Giới thiệu</title>
      </Head>
      <Banner />
      <main id="main" className="main clearfix">
        <div className="page-about-us">
          <div className="container">
            <div className="page-about-us-title"></div>
          </div>
        </div>
        {DataAbout.map((item) => {
          return <CardAbout key={item.id} item={item} />;
        })}
      </main>
    </DefaultLayout>
  );
};

export default About;
