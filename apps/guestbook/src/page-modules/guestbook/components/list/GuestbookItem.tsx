import { Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { GuestbookInterface } from "src/apis/guestbook/types";
import dayjs from "dayjs";
import { BsPersonCircle } from "react-icons/bs";

export const GuestbookItem = ({ data }: { data: GuestbookInterface }) => {
  return (
    <Stack padding={"20px"} backgroundColor={"gray-200"} borderRadius={"12px"}>
      <Flex alignment={"center"}>
        <BsPersonCircle size={30} color={"gray"} />
        <Spacer width={"8px"} />
        <Stack>
          <Text fontSize={"14px"} color={"gray-500"} fontWeight={"500"}>
            익명의 방문자
          </Text>
          <Text fontSize={"12px"} color={"gray-500"}>
            {dayjs(data.created_at).format("YYYY-MM-DD")}
          </Text>
        </Stack>
      </Flex>
      <Spacer height={"12px"} />
      <Text fontSize={"18px"}>{data.content}</Text>
    </Stack>
  );
};
