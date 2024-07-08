import dynamic from "next/dynamic";
import React from "react";
import Search from "src/page-modules/search/Search";
import { SearchResultSkeleton } from "src/page-modules/courts/search/components/skeleton/SearchResultSkeleton";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const SearchPage = () => {
  return (
    <Layout>
      <Search fallback={<SearchResultSkeleton />} />
    </Layout>
  );
};

export default SearchPage;
