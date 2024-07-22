import { supabase } from "src/utils/supabase/supabase";

const PER_PAGE = 30;

export const getCourtsList = async ({ pageParam }: { pageParam: number }) => {
  const result = await supabase
    .from("courts")
    .select("*")
    .eq("isUse", true)
    .order("priority", { ascending: false })
    .limit(30)
    .range(pageParam * PER_PAGE, (pageParam + 1) * PER_PAGE - 1);
  return result;
};

export const getCourtsDetail = async ({ courtId }: { courtId: string }) => {
  const { data } = await supabase
    .from("courts")
    .select("*")
    .eq("id", courtId)
    .single();
  return data;
};

export const getCourtsSearchList = async ({ keyword }: { keyword: string }) => {
  const { data, count } = await supabase
    .from("courts")
    .select("*", { count: "exact" })
    .or(`koName.ilike.%${keyword}%,address.ilike.%${keyword}%`)
    .eq("isUse", true)
    .order("priority");
  return { data, count };
};
