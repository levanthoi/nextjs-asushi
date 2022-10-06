import React from "react";
import CardSlider from "../components/Home/CardSlider";
import CardContent from "../components/Home/CardContent";
import DefaultLayout from "../layout/DefaultLayout";
import Head from "next/head";
import { DataCataLog } from "../data/data";

const BoxHome = (props) => {
  const cataLog = props.cataLog;
  if (cataLog.title === null) return <CardSlider item={cataLog} />;
  else return <CardContent item={cataLog} />;
};

const Home = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>Trang chủ</title>
      </Head>
      {DataCataLog.map((cataLog) => {
        return <BoxHome key={cataLog.id} cataLog={cataLog} />;
      })}
    </DefaultLayout>
  );
};

export default Home;
