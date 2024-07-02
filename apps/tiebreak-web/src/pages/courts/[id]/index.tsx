import dynamic from "next/dynamic";
import React from "react";
import CourtsDetail from "src/page-modules/courts/detail/CourtsDetail";
import { CourtsDetailSkeleton } from "src/page-modules/courts/detail/components/skeleton/CourtsDetailSkeleton";

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
  return {
    props: {
      id,
    },
  };
}
