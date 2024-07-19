"use client";

import { Stack } from "pure-strike-ui";
import { useGetGuestbook } from "src/apis/guestbook/queries";

export const GuestBook = () => {
  const { data } = useGetGuestbook();
  return <Stack></Stack>;
};
