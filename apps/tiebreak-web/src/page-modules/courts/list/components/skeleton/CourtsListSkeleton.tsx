import { Flex } from "pure-strike-ui";
import { CourtsListSkeletonItem } from "./CourtsListSkeletonItem";

const SKELETON_COUNT = 3;

export const CourtsListSkeleton = () => {
  return (
    <Flex direction={"column"}>
      {Array.from({ length: SKELETON_COUNT }, (_, i) => i).map((item) => (
        <CourtsListSkeletonItem key={item} />
      ))}
    </Flex>
  );
};
