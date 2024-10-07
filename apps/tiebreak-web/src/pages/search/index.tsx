import React from "react";
import Search from "src/page-modules/search/Search";
import { SearchResultSkeleton } from "src/page-modules/courts/search/components/skeleton/SearchResultSkeleton";
import CourtsLayout from "src/components/layout/courts/CourtsLayout";

const SearchPage = () => {
  return (
    <CourtsLayout>
      <Search fallback={<SearchResultSkeleton />} />
    </CourtsLayout>
  );
};

export default SearchPage;
