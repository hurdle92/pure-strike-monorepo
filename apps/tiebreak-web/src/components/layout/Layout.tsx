import { Flex, Stack } from "pure-strike-ui";
import React from "react";
import Aside from "./aside/Aside";
import { Footer } from "./footer/Footer";

// NOTE : default layout
const Layout = ({ children }) => {
  return (
    <Stack>
      {children}
      <Footer />
    </Stack>
  );
};

export default Layout;
