import {
  useInfiniteQuery,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { PER_PAGE } from "src/constants/page";
import { supabase } from "src/utils/supabase/supabase";
import { CourtsDetailInterface } from "./types";

const enum QueryKeys {
  CourtsList = "courtsList",
  CourtsDetail = "courtsDetail",
}

export const useGetInfiniteCourtsList = () => {
  return useInfiniteQuery({
    queryKey: [QueryKeys.CourtsList],
    queryFn: ({ pageParam }) => {
      return supabase
        .from("courts")
        .select("*")
        .eq("isUse", true)
        .order("priority", { ascending: false })
        .limit(30)
        .range(pageParam * PER_PAGE, (pageParam + 1) * PER_PAGE - 1);
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
    queryFn: async () => {
      const { data } = await supabase
        .from("courts")
        .select("*")
        .eq("id", courtId)
        .single();
      return data;
    },
  });
};
