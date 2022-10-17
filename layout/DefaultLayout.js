import React from "react";
import { useState, useEffect, useCallback } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("resize", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("resize", updateTarget);
  }, []);

  return targetReached;
};

const DefaultLayout = ({ children }) => {
  const isBreakpoint = useMediaQuery(1024);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="../static/css/css" />
        {isBreakpoint ? (
          <>
            <link rel="stylesheet" href="../static/css/style-menu-mobile.css" />
            <link rel="stylesheet" href="../static/css/main.min.css" />
            <link rel="stylesheet" href="../static/css/style-mobile.css" />
            <link
              rel="stylesheet"
              href="../static/css/owl-carousel-mobile.css"
            />
          </>
        ) : (
          <>
            <link rel="stylesheet" href="../static/css/main.min.css" />
            <link rel="stylesheet" href="../static/css/about.css" />
            <link rel="stylesheet" href="../static/css/test.css" />
            <link rel="stylesheet" href="../static/css/owl.carousel.css" />
          </>
        )}
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
