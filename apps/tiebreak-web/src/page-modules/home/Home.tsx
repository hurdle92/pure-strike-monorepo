import dynamic from "next/dynamic";
import Link from "next/link";
import { Flex, Image, Responsive, Spacer, Stack, Text } from "pure-strike-ui";

const Aside = dynamic(
  () => import("src/page-modules/home/components/Aside/Aside"),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <Stack>
      <Flex justify={"center"}>
        <Responsive desktopComponent={<Aside />} />
      </Flex>
    </Stack>
  );
};

export default Home;
