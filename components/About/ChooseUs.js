import React from "react";
import { useParams } from "react-router-dom";
import { DataAbout } from "/data/data";
import Banner from "../Banner/Banner";

const ChooseUs = () => {
  const aboutId = useParams();
  const item = DataAbout
                .find((curEle) => curEle.items).items
                  .find(
                    (curEle) => curEle.id == aboutId.aboutId
                  );
  return (
    <>
      <Banner />
      <main id="main" className="main clearfix">
        <div className="page-about-us">
          <div className="container">
            <div className="page-about-us-title">
              <h2>
                <i className="bg-pau bg-pau-left"> </i>
                Tin tức <br />
                <span className="language-japan">ニュース</span>
                <i className="bg-pau bg-pau-right"> </i>
              </h2>
            </div>
          </div>
        </div>
        <div className="page-new page-new2 clearfix">
          <div className="container">
            <div className="new-content new-content2">
              <div className="box-description box-description-new">
                <h1>{item.name}</h1>
                <p>
                  <span
                    style={{
                      color: "rgb(34, 34, 34)",
                      fontFamily: "Consolas Lucida Console monospace",
                      fontSize: 12,
                      whiteSpace: "pre-wrap",
                      backgroundColor: "rgb(255, 255, 255)",
                    }}
                  >
                    {item.desc}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChooseUs;
