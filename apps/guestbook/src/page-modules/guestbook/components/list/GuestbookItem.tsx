import { Spacer, Stack, Text } from "pure-strike-ui";
import { GuestbookInterface } from "src/apis/guestbook/types";
import dayjs from "dayjs";

export const GuestbookItem = ({ data }: { data: GuestbookInterface }) => {
  return (
    <Stack padding={"20px"} backgroundColor={"gray-200"} borderRadius={"12px"}>
      <Text fontSize={"18px"}>{data.content}</Text>
      <Spacer height={"12px"} />
      <Text fontSize={"14px"} color={"gray-500"}>
        Created at {dayjs(data.created_at).format("YYYY-MM-DD")}
      </Text>
    </Stack>
  );
};
