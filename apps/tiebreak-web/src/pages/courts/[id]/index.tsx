import dynamic from "next/dynamic";
import React from "react";
import CourtsDetail from "src/page-modules/courts/detail/CourtsDetail";
import { CourtsDetailSkeleton } from "src/page-modules/courts/detail/components/skeleton/CourtsDetailSkeleton";
import { supabase } from "src/utils/supabase/supabase";
import { seoMapper } from "src/utils/seo/seoMapper";
import { CourtsDetailInterface } from "src/apis/courts/types";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const CourtsDetailPage = ({ id }) => {
  return (
    <Layout>
      <CourtsDetail id={id} fallback={<CourtsDetailSkeleton />} />
    </Layout>
  );
};

export default CourtsDetailPage;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { data } = await supabase
    .from("courts")
    .select("*")
    .eq("id", id)
    .single();

  const courtData: CourtsDetailInterface = data;

  return {
    props: {
      id,
      seoData: seoMapper({
        title: courtData.koName,
        description: courtData.address,
      }),
    },
  };
}
