import { Flex, Stack } from "pure-strike-ui";
import React from "react";
import { InfiniteScrollTemplate } from "src/components/infinite/InfiniteScrollTemplate";
import { CourtItemInterface } from "src/types/courts";
import { CourtsItem } from "./components/courtsItem/CourtsItem";
import { CourtsListSkeleton } from "./components/skeleton/CourtsListSkeleton";
import { useGetInfiniteCourtsList } from "src/apis/courts/queries";

export const CourtsList = () => {
  const { data, fetchNextPage, isFetching } = useGetInfiniteCourtsList();

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
        fallback={<CourtsListSkeleton />}
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
