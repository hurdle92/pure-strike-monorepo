import { Stack } from "pure-strike-ui";
import React from "react";
import { InView } from "react-intersection-observer";

export const InfiniteScrollTemplate = ({
  children,
  nextPage,
  isLoading,
  fallbackUI,
}: {
  children: JSX.Element;
  queryKey?: string;
  currentCount: number;
  totalCount?: number;
  nextPage: () => void;
  isLoading?: boolean;
  fallbackUI?: JSX.Element;
}) => {
  return (
    <Stack>
      {children}
      <InView
        onChange={(inView) => {
          inView && nextPage();
        }}
      />
      {isLoading && fallbackUI}
    </Stack>
  );
};
