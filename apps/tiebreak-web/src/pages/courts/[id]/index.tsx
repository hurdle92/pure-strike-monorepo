import React from "react";
import CourtsDetail from "src/page-modules/courts/detail/CourtsDetail";
import { CourtsDetailSkeleton } from "src/page-modules/courts/detail/components/skeleton/CourtsDetailSkeleton";
import { supabase } from "src/utils/supabase/supabase";
import { seoMapper } from "src/utils/seo/seoMapper";
import { CourtsDetailInterface } from "src/apis/courts/types";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Layout from "src/components/layout/Layout";

const CourtsDetailPage = ({ id, seoData }) => {
  return (
    <Layout>
      <CourtsDetail id={id} fallback={<CourtsDetailSkeleton />} />
    </Layout>
  );
};

export default CourtsDetailPage;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["courtsDetail", id],
    queryFn: async () => {
      const { data } = await supabase
        .from("courts")
        .select("*")
        .eq("id", id)
        .single();
      return data;
    },
  });

  const courtData = queryClient.getQueryData([
    "courtsDetail",
    id,
  ]) as CourtsDetailInterface;

  return {
    props: {
      id,
      seoData: seoMapper({
        title: courtData.koName,
        description: courtData.address,
      }),
      dehydratedState: dehydrate(queryClient),
    },
  };
}
