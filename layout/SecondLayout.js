import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

const payment = [
  { id: 1, link: "/cart", title: "Giỏ hàng" },
  { id: 2, link: "/paymentDetail", title: "Thanh toán" },
  { id: 3, link: "/bill", title: "Hóa đơn" },
];

const SecondLayout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="stylesheet" href="../static/css/product.css" />
        <link rel="stylesheet" href="../static/css/main.min.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="content-wrap">
        <div className="shopping-cart-page payment-step1-page">
          <section id="cart" className="cart">
            <div className="container">
              <div className="process-payment">
                <ul>
                  {payment.map(({ id, link, title }) => (
                    <li
                      key={id}
                      className={router.pathname == link ? "active" : ""}
                    >
                      <Link href={link}>
                        <a>{title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {children}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SecondLayout;
