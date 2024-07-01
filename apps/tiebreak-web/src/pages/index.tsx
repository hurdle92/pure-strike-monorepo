import dynamic from "next/dynamic";
import React from "react";
import Home from "src/page-modules/home/Home";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
