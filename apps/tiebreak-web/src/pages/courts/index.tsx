import React from "react";
import CourtsLayout from "src/components/layout/courts/CourtsLayout";
import { CourtsList } from "src/page-modules/courts/list/CourtsList";

const CourtsListPage = () => {
  return (
    <CourtsLayout>
      <CourtsList />
    </CourtsLayout>
  );
};

export default CourtsListPage;
