import React, { useState, useEffect } from 'react';
import { DataAddress, DataHotline } from '/data/data';
import images from '/static/images/images';



const Footer = () => {
  const HotlinePri = DataHotline.find(item => item.primary === true);
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);
  return (
    <>
      <footer id="footer" className="footer clearfix">
        <div className="container">
          <div className="footer-top clearfix">
            <div className="footer-top-left">
              <div className="ftl-content">
                <ul>
                  <li>
                    <img src="/images/app_store.jpg" alt="app store" title="app store" />
                  </li>
                  <li>
                    <img src="/images/google_play.jpg" alt="google play" title="google play" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-top-right">
              <div className="ftr-content">
                <div className="ftr-content-top">
                  {DataAddress.slice(0, 2).map(item => {
                    const { id, title, address, hotline } = item;
                    return (
                      <div key={id} className="ftr-address ftr-address1">
                        <span className="text-bold">{title} :</span>
                        <span className="text-nomarl">
                          {`Địa chỉ: ${address}/Điện thoại: ${hotline}`}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <div className="ftr-content-bottom">
                  <div className="ftr-copyright">
                    <span />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="footer-top-scroll"
              id="footer-top-scroll"
              style={visible ? { display: "block", opacity: "0.9", zIndex: "9999999", cursor: "pointer" } : { display: "none" }}
              onClick={scrollToTop}
            >
              <div title="Scroll Back to Top">
                <i className="icon icon-scroll"> </i>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="support-in">
        <div className="panel panel-default categorybox">
          <div className="panel-body">
            <ul>
              <li>
                {" "}
                <a href="/" target="_blank" rel="noreferrer">
                  <i className="icon-fb" />
                </a>
              </li>
              <li className="hotline">
                <span />
                <span style={{ color: "red" }}>{HotlinePri.hotline}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer