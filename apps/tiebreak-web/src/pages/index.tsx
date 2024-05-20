import dynamic from "next/dynamic";
import React from "react";

const Home = dynamic(() => import("src/page-modules/home/Home"), {
  ssr: false,
});

const HomePage = () => {
  return <Home />;
};

export default HomePage;
