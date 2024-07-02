import { Spacer, Stack } from "pure-strike-ui";
import Skeleton from "react-loading-skeleton";

export const CourtsDetailSkeleton = () => {
  return (
    <Stack width={"420px"}>
      <Skeleton width={"420px"} height={"280px"} />
      <Stack padding={"16px"}>
        <Skeleton width={"200px"} height={"30px"} />
        <Spacer height={"16px"} />
        <Skeleton width={"300px"} height={"20px"} />
      </Stack>
    </Stack>
  );
};
