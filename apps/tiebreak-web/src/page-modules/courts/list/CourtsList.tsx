import { useInfiniteQuery } from "@tanstack/react-query";
import { Flex, Stack } from "pure-strike-ui";
import React from "react";
import { InfiniteScrollTemplate } from "src/components/infinite/InfiniteScrollTemplate";
import { PER_PAGE } from "src/constants/page";
import { supabase } from "src/utils/apis/supabase/supabase";
import { CourtItemInterface } from "src/types/courts";
import { CourtsItem } from "./components/courtsItem/CourtsItem";
import { CourtsListSkeleton } from "./components/skeleton/CourtsListSkeleton";

export const CourtsList = () => {
  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["courts"],
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

  const currentCount = React.useMemo(() => {
    return data?.pages.flatMap((page) => page).length || 0;
  }, [data]);

  const listData = React.useMemo(() => {
    return data?.pages.flatMap((page: any) => page?.data);
  }, [data]);

  return (
    <Stack
      width={"420px"}
      backgroundColor={"white"}
      borderWidth={"1px"}
      borderColor={"border-gray"}
    >
      <InfiniteScrollTemplate
        nextPage={() => fetchNextPage()}
        currentCount={currentCount}
        isLoading={isFetching}
        fallbackUI={<CourtsListSkeleton />}
      >
        <Flex direction={"column"} gap={"16px"}>
          {listData?.map((item: CourtItemInterface) => {
            return <CourtsItem key={item.id} item={item} />;
          })}
        </Flex>
      </InfiniteScrollTemplate>
    </Stack>
  );
};
