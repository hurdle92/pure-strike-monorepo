import { count } from "console";
import { useRouter } from "next/router";
import { Flex, Stack, Text } from "pure-strike-ui";
import { useGetCourtsSearch } from "src/apis/courts/queries";
import { CourtItemInterface } from "src/types/courts";
import { CourtsItem } from "../courts/list/components/courtsItem/CourtsItem";
import { SearchResult } from "../courts/search/SearchResult";

const Search = () => {
  const {
    query: { keyword },
  } = useRouter();
  const searchKeyword = Array.isArray(keyword) ? keyword[0] : keyword || "";
  const { data } = useGetCourtsSearch(searchKeyword);

  const { data: searchData, count } = data as {
    data: CourtItemInterface[];
    count: number;
  };

  return <SearchResult data={searchData} count={count} isEmpty={count === 0} />;
};

export default Search;
