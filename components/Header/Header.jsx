import Head from 'next/head';
import React from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderCenter from './HeaderCenter';
import HeaderCenterMobile from './HeaderCenterMobile';
import HeaderTop from './HeaderTop';
import HeaderTopMobile from './HeaderTopMobile';

const Header = () => {
  return (
    <>
      <Head>
        {/* <link rel="stylesheet" href="../static/css/style-menu-mobile.css" /> */}
      </Head>
      <header id="header" className="header clearfix">
        <HeaderTop />
        {/* <HeaderTopMobile /> */}
        {/* <HeaderCenterMobile /> */}
        <HeaderCenter />
        <HeaderBottom />
      </header>
    </>
  )
}

export default Header;