import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getGuestbooks, postGuestbook } from "./api";

const enum QueryKeys {
  Guestbook = "guestbook",
}

export const useGetGuestbook = () => {
  return useQuery({
    queryKey: [QueryKeys.Guestbook],
    queryFn: () => getGuestbooks(),
  });
};

export const usePostGuestbook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [QueryKeys.Guestbook],
    mutationFn: ({ content }: { content: string }) =>
      postGuestbook({ content: content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.Guestbook] });
    },
  });
};
