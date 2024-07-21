import { supabase } from "../core/supabase/supabase";
import { GuestbookListResultInterface } from "./types";

export const getGuestbooks = async () => {
  const { data, count } = await supabase
    .from("guestbook")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });
  return { data, count } as GuestbookListResultInterface;
};

export const postGuestbook = async ({ content }) => {
  const result = await supabase.from("guestbook").insert({ content: content });
  return result;
};
