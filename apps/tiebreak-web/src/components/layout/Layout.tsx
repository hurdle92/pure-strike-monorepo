import { Flex, Stack } from "pure-strike-ui";
import React from "react";
import Aside from "./aside/Aside";

// NOTE : default layout
const Layout = ({ children }) => {
  return (
    <Stack>
      <Flex justify={"center"}>
        <Aside />
        {children}
      </Flex>
    </Stack>
  );
};

export default Layout;
