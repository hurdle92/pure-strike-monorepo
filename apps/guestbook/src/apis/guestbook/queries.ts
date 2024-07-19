import { useSuspenseQuery } from "@tanstack/react-query";
import { getGuestbooks } from "./api";
import { GuestbookListResultInterface } from "./types";

const enum QueryKeys {
  Guestbook = "guestbook",
}

export const useGetGuestbook = () => {
  return useSuspenseQuery({
    queryKey: [QueryKeys.Guestbook],
    queryFn: () => getGuestbooks(),
  });
};
