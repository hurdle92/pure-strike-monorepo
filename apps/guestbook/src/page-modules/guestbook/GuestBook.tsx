"use client";

import Link from "next/link";
import { Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { useGetGuestbook } from "src/apis/guestbook/queries";
import { BLOG_URL } from "src/constants/link";
import { Form } from "./components/form/Form";
import { GuestbookItem } from "./components/list/GuestbookItem";

export const GuestBook = () => {
  const { data } = useGetGuestbook();

  return (
    <Stack maxWidth={"760px"} margin={"0 auto"}>
      <Spacer height={"32px"} />
      <Flex justify={"space-between"} alignment={"center"}>
        <Text fontSize={"32px"} fontWeight={"900"}>
          Guest Book
        </Text>
        <Link href={BLOG_URL} target={"_blank"}>
          <Text color={"blue-primary"} fontWeight={"bold"}>
            블로그 이동
          </Text>
        </Link>
      </Flex>
      <Spacer height={"20px"} />
      <Flex gap={"20px"} direction={"column"}>
        {data?.data.map((item) => <GuestbookItem data={item} key={item.id} />)}
      </Flex>
      <Form />
    </Stack>
  );
};
