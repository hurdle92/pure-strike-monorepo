import { useRouter } from "next/router";
import { Stack } from "pure-strike-ui";

export const CourtsDetail = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <Stack
      minWidth={"420px"}
      backgroundColor={"white"}
      borderWidth={"1px"}
      borderColor={"border-gray"}
    ></Stack>
  );
};
