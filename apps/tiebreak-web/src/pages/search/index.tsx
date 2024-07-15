import React from "react";
import Search from "src/page-modules/search/Search";
import { SearchResultSkeleton } from "src/page-modules/courts/search/components/skeleton/SearchResultSkeleton";
import Layout from "src/components/layout/Layout";

const SearchPage = () => {
  return (
    <Layout>
      <Search fallback={<SearchResultSkeleton />} />
    </Layout>
  );
};

export default SearchPage;
