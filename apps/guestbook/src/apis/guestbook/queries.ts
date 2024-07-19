import { useSuspenseQuery, useMutation } from "@tanstack/react-query";
import { getGuestbooks, postGuestbook } from "./api";

const enum QueryKeys {
  Guestbook = "guestbook",
}

export const useGetGuestbook = () => {
  return useSuspenseQuery({
    queryKey: [QueryKeys.Guestbook],
    queryFn: () => getGuestbooks(),
  });
};

export const usePostGuestbook = ({ content }: { content: string }) => {
  return useMutation({
    mutationKey: [QueryKeys.Guestbook],
    mutationFn: () => postGuestbook({ content: content }),
  });
};
