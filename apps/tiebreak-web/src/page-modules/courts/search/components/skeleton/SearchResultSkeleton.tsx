import { Stack } from "pure-strike-ui";
import React from "react";
import { CourtsListSkeleton } from "src/page-modules/courts/list/components/skeleton/CourtsListSkeleton";

export const SearchResultSkeleton = () => {
  return (
    <Stack
      width={"420px"}
      backgroundColor={"white"}
      borderWidth={"1px"}
      borderColor={"border-gray"}
    >
      <CourtsListSkeleton />
    </Stack>
  );
};
