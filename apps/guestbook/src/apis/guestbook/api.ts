import { supabase } from "../core/supabase/supabase";
import { GuestbookListResultInterface } from "./types";

export const getGuestbooks = async () => {
  const { data, count } = await supabase
    .from("guestbook")
    .select("*", { count: "exact", head: false })
    .order("created_at", { ascending: false });
  return { data, count };
};
