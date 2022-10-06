import React from "react";
import { useRouter } from "next/router";
import Banner from "../../components/Banner/Banner";
import PageAbout from "../../components/PageAbout";
import { DataNews } from "../../data/data";
import DefaultLayout from "../../layout/DefaultLayout";
import Head from "next/head";

const NewDetail = () => {
  const router = useRouter();
  const { newId } = router.query;
  const itemNew = DataNews.find((item) => item.id === newId - 0);

  // const { title, content, image } = itemNew;
  return (
    <DefaultLayout>
      <Head>
        <title>{itemNew && itemNew.title}</title>
        <link rel="stylesheet" href="../../static/css/new.css" />
      </Head>
      <Banner />
      {itemNew && (
        <main id="main" className="main clearfix">
          <PageAbout name="Tin tức" nameJapan="麺類" />
          <div className="page-new page-new2 clearfix">
            <div className="container">
              <div className="new-content new-content2">
                <div className="box-description box-description-new">
                  <h1>{itemNew.title}</h1>
                  <div
                    className="box-img-main-franchise-en"
                    style={{ lineHeight: "20.8px" }}
                  >
                    <p>{itemNew.content}</p>
                    <p>{itemNew.content}</p>
                    <img
                      alt=""
                      src={itemNew.image[0]}
                      style={{ width: 524, height: 323 }}
                    />
                    &nbsp;
                    <img
                      alt=""
                      src={itemNew.image[1]}
                      style={{ width: 524, height: 323 }}
                    />
                    <p>{itemNew.content}</p>
                    <p>{itemNew.content}</p>
                    <img
                      alt=""
                      src={itemNew.image[2]}
                      style={{ width: 524, height: 323 }}
                    />
                    &nbsp;
                    <img
                      alt=""
                      src={itemNew.image[3]}
                      style={{ width: 524, height: 323 }}
                    />
                    <p>{itemNew.content}</p>
                    <p>{itemNew.content}</p>
                  </div>
                  <>
                    <div data-field="body">
                      <p>&nbsp;</p>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </DefaultLayout>
  );
};

export default NewDetail;
