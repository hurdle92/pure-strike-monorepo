import { useInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getCourtsDetail, getCourtsList, getCourtsSearchList } from "./api";
import { CourtsDetailInterface } from "./types";

const enum QueryKeys {
  CourtsList = "courtsList",
  CourtsDetail = "courtsDetail",
  CourtsSerach = "courtsSearch",
}

export const useGetInfiniteCourtsList = () => {
  return useInfiniteQuery({
    queryKey: [QueryKeys.CourtsList],
    queryFn: ({ pageParam }) => {
      return getCourtsList({ pageParam });
    },
    initialPageParam: 0,
    getNextPageParam: (_, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage;
    },
  });
};

export const useGetCourtsDetail = (courtId: string) => {
  return useSuspenseQuery<CourtsDetailInterface>({
    queryKey: [QueryKeys.CourtsDetail, courtId],
    queryFn: () => getCourtsDetail({ courtId }),
  });
};

export const useGetCourtsSearch = (keyword: string) => {
  return useSuspenseQuery({
    queryKey: [QueryKeys.CourtsSerach, keyword],
    queryFn: () => getCourtsSearchList({ keyword }),
  });
};
