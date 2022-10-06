import React from "react";
import Link from "next/link";
import Banner from "/components/Banner/Banner";
import PageAbout from "/components/PageAbout";
import MenuProd from "/components/Product/MenuProd";
import { DataCategory } from "/data/data";
import DefaultLayout from "../../layout/DefaultLayout";
import Head from "next/head";

const Product = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Sản phẩm</title>
      </Head>
      <Banner />
      <main id="main" className="main clearfix">
        <PageAbout name="Thực đơn" nameJapan="麺類" />
        <div className="page-menu page-menu1 clearfix">
          <div className="container">
            <div className="menu-title menu-title1">
              <div data-example-id="togglable-tabs">
                <MenuProd />
                <div id="myTabContent" className="tab-content">
                  <div className="menu-product-content menu-product1-content">
                    {DataCategory.map((category) => {
                      const { id, name, nameJapan, url, img } = category;
                      return (
                        <div key={id} className="item-product">
                          <div className="box-img-product">
                            <Link
                              href={`/product/${url}`}
                              title={`${name} - ${nameJapan}`}
                            >
                              <img src={img} alt={name} />
                            </Link>
                          </div>
                          <div className="box-info-product">
                            <h2>
                              <Link
                                // href={`/product/${url}`}
                                href={{
                                  pathname: "/product/[slug]",
                                  query: { slug: url },
                                }}
                                title={`${name} - ${nameJapan}`}
                              >
                                <a>
                                  <i className="bg-bip bg-bip-top"> </i>
                                  {name} <br />
                                  <span className="language-japan">
                                    {nameJapan}
                                  </span>
                                  <i className="bg-bip bg-bip-bottom"> </i>
                                </a>
                              </Link>
                            </h2>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
};

export default Product;
