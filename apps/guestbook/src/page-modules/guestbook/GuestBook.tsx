"use client";

import { Stack } from "pure-strike-ui";
import { useGetGuestbook, usePostGuestbook } from "src/apis/guestbook/queries";

export const GuestBook = () => {
  const {
    data: { data, count },
  } = useGetGuestbook();

  const { mutate, isPending } = usePostGuestbook({ content: "" });

  return <Stack></Stack>;
};
