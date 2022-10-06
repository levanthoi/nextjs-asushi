import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="../static/css/main.min.css" />
        <link rel="stylesheet" href="../static/css/style.css" />
        {/* <link rel="stylesheet" href="../static/css/style-mobile.css" /> */}
        <link rel="stylesheet" href="../static/css/style-menu.css" />
        <link rel="stylesheet" href="../static/css/owl.carousel.css" />
        <link rel="stylesheet" href="../static/css/css" />
      </Head>
      <Header />
      <div className="">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
