import Head from 'next/head';
import React, { useState, useEffect, useCallback } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderCenter from './HeaderCenter';
import HeaderCenterMobile from './HeaderCenterMobile';
import HeaderTop from './HeaderTop';
import HeaderTopMobile from './HeaderTopMobile';

const Header = () => {

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

  const isBreakpoint = useMediaQuery(1024);
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="../static/css/style-menu-mobile.css" /> */}
      </Head>
      <header id="header" className="header clearfix">
        {/* <HeaderTop />
        <HeaderCenter />
        <HeaderBottom /> */}
        {!isBreakpoint ?
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

        }
      </header>
    </>
  )
}

export default Header;