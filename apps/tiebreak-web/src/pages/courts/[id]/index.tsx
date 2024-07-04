import dynamic from "next/dynamic";
import React from "react";
import CourtsDetail from "src/page-modules/courts/detail/CourtsDetail";
import { CourtsDetailSkeleton } from "src/page-modules/courts/detail/components/skeleton/CourtsDetailSkeleton";
import { supabase } from "src/utils/supabase/supabase";
import { seoMapper } from "src/utils/seo/seoMapper";
import { CourtsDetailInterface } from "src/apis/courts/types";
import { DefaultSeo, NextSeo } from "next-seo";
import { DEFAULT_SEO } from "src/constants/seo";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const CourtsDetailPage = ({ id, title }) => {
  return (
    <>
      <NextSeo {...DEFAULT_SEO} title={title} />
      <Layout>
        <CourtsDetail id={id} fallback={<CourtsDetailSkeleton />} />
      </Layout>
    </>
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
      title: courtData.koName,
      seoData: seoMapper({
        title: courtData.koName,
        description: courtData.address,
      }),
    },
  };
}
