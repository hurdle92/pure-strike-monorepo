import { Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { useGetCourtsDetail } from "src/apis/courts/queries";
import { Img } from "src/components/img";
import { withSuspense } from "src/hoc/withSuspense";

const CourtsDetail = ({ id }: { id: string }) => {
  const { data } = useGetCourtsDetail(id);
  return (
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
  );
};

export default withSuspense(CourtsDetail);
