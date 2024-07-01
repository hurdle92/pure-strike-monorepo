import React from "react";
import Layout from "src/components/layout/Layout";
import { CourtsDetail } from "src/page-modules/courts/detail/CourtsDetail";

const CourtsDetailPage = ({ id }) => {
  return (
    <Layout>
      <CourtsDetail id={id} />
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
