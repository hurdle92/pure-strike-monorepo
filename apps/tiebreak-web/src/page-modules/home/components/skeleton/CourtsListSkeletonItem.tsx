import { Flex, Spacer, Stack } from "pure-strike-ui";
import Skeleton from "react-loading-skeleton";

export const CourtsListSkeletonItem = () => {
  return (
    <Stack padding={"16px"}>
      <Skeleton borderRadius={"8px"} height={"180px"} />
      <Spacer height={"12px"} />
      <Skeleton borderRadius={"4px"} width={"160px"} height={"20px"} />
      <Spacer height={"4px"} />
      <Skeleton borderRadius={"4px"} width={"240px"} height={"20px"} />
      <Spacer height={"8px"} />
      <Flex gap={"4px"}>
        {Array.from({ length: 3 }, (_, i) => i).map((item) => (
          <Skeleton
            key={item}
            borderRadius={"4px"}
            width={"40px"}
            height={"16px"}
          />
        ))}
      </Flex>
    </Stack>
  );
};
