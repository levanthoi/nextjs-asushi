import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderCenter from './HeaderCenter';
import HeaderCenterMobile from './HeaderCenterMobile';
import HeaderTop from './HeaderTop';
import HeaderTopMobile from './HeaderTopMobile';

const Header = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWidth(window.innerWidth);
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  console.log("width", width);
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="../static/css/style-menu-mobile.css" /> */}
      </Head>
      <header id="header" className="header clearfix">
        <HeaderTop />
        <HeaderCenter />
        <HeaderBottom />
        {/* {width && width > 1024 ?
          <>
            <HeaderTop />
            <HeaderCenter />
            <HeaderBottom />
          </>
          :
          <>
            <HeaderTopMobile />
            <HeaderCenterMobile />
          </>

        } */}
      </header>
    </>
  )
}

export default Header;