import { Spacer, Stack } from "pure-strike-ui";
import Skeleton from "react-loading-skeleton";

export const CourtsDetailSkeleton = () => {
  return (
    <Stack width={"420px"}>
      <Skeleton width={"420px"} height={"280px"} />
      <Stack padding={"16px 16px 32px 16px"}>
        <Skeleton width={"200px"} height={"30px"} />
        <Spacer height={"16px"} />
        <Skeleton width={"300px"} height={"20px"} />
        <Spacer height={"16px"} />
        <Skeleton width={"100px"} height={"20px"} />
        <Spacer height={"48px"} />
        <Skeleton width={"120px"} height={"30px"} />
        <Spacer height={"16px"} />
        <Skeleton width={"100%"} height={"60px"} />
        <Spacer height={"80px"} />
        <Skeleton width={"120px"} height={"30px"} />
        <Spacer height={"16px"} />
        <Skeleton width={"100%"} height={"60px"} />
      </Stack>
    </Stack>
  );
};
