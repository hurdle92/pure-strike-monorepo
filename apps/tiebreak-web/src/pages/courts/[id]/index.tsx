import dynamic from "next/dynamic";
import React from "react";
import CourtsDetail from "src/page-modules/courts/detail/CourtsDetail";

const Layout = dynamic(() => import("src/components/layout/Layout"), {
  ssr: false,
});

const CourtsDetailPage = ({ id }) => {
  return (
    <Layout>
      <CourtsDetail id={id} fallback={<div>loading...</div>} />
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
