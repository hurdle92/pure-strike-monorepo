import { Flex, Stack } from "pure-strike-ui";
import React from "react";
import Aside from "../aside/Aside";

// NOTE : 코트용 Layout
const CourtsLayout = ({ children }) => {
  return (
    <Stack backgroundColor={"purple-primary"}>
      <Flex justify={"center"}>
        <Aside />
        {children}
      </Flex>
    </Stack>
  );
};

export default CourtsLayout;
