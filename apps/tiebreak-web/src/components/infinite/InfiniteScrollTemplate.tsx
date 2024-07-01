import { Stack } from "pure-strike-ui";
import React from "react";
import { InView } from "react-intersection-observer";

export const InfiniteScrollTemplate = ({
  children,
  nextPage,
  isLoading,
  fallback,
}: {
  children: React.ReactElement | React.ReactElement[];
  queryKey?: string;
  currentCount: number;
  totalCount?: number;
  nextPage: () => void;
  isLoading?: boolean;
  fallback?: React.ReactElement;
}) => {
  return (
    <Stack>
      {children}
      <InView
        onChange={(inView) => {
          inView && nextPage();
        }}
      />
      {isLoading && fallback}
    </Stack>
  );
};
