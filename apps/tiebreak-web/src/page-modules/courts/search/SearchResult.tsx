import { Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { CourtItemInterface } from "src/types/courts";
import { Palette } from "~foundation";
import { CourtsItem } from "../list/components/courtsItem/CourtsItem";
import { FcSearch } from "react-icons/fc";

export const SearchResult = ({
  data,
  count,
  isEmpty,
}: {
  data: CourtItemInterface[];
  count: number;
  isEmpty: boolean;
}) => {
  return (
    <Stack
      width={"420px"}
      backgroundColor={"white"}
      borderWidth={"1px"}
      borderColor={"border-gray"}
      minHeight={"100vh"}
    >
      {isEmpty && (
        <Flex direction={"column"} alignment={"center"} justify={"center"}>
          <FcSearch size={80} />
          <Spacer height={"32px"} />
          <Text fontSize={"24px"} fontWeight={"bold"}>
            검색 결과가 없어요
          </Text>
          <Spacer height={"4px"} />
          <Text color={"gray-primary"}>입력하신 검색어를 확인해주세요</Text>
        </Flex>
      )}
      {!isEmpty && (
        <Stack>
          <Stack padding={"16px 16px 0 16px"}>
            <Text>
              코트정보{" "}
              <span
                style={{ fontWeight: "bold", color: Palette["blue-primary"] }}
              >
                {count}
              </span>
              건
            </Text>
          </Stack>
          <Flex direction={"column"} gap={"16px"}>
            {data?.map((item) => {
              return <CourtsItem key={item.id} item={item} />;
            })}
          </Flex>
        </Stack>
      )}
    </Stack>
  );
};
