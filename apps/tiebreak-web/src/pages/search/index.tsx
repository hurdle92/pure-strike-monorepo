import dynamic from "next/dynamic";
import React from "react";
import Search from "src/page-modules/search/Search";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const SearchPage = () => {
  return (
    <Layout>
      <Search />
    </Layout>
  );
};

export default SearchPage;
