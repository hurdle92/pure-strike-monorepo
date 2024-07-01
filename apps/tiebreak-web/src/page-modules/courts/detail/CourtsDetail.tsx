import { Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { Suspense } from "react";
import { useGetCourtsDetail } from "src/apis/courts/queries";
import { Img } from "src/components/img";

export const CourtsDetail = ({ id }: { id: string }) => {
  const { data, isFetching } = useGetCourtsDetail(id);

  return (
    <Suspense
      fallback={<div style={{ minWidth: "420px", maxWidth: "420px" }} />}
    >
      <Stack
        minWidth={"420px"}
        maxWidth={"420px"}
        backgroundColor={"white"}
        borderWidth={"1px"}
        borderColor={"border-gray"}
      >
        <Img src={data.thumbnail} width={"420px"} height={"280px"} />
        <Stack padding={"16px"}>
          <Text fontSize={"24px"} fontWeight={"700"}>
            {data.koName}
          </Text>
          <Spacer height={"16px"} />
          <Flex>
            <Text>{data.address}</Text>
          </Flex>
        </Stack>
      </Stack>
    </Suspense>
  );
};
