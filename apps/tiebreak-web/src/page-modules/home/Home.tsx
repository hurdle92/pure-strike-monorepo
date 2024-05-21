import dynamic from "next/dynamic";
import { Flex, Responsive, Stack } from "pure-strike-ui";
import { CourtsList } from "./components/courtsList/CourtsList";

const Aside = dynamic(() => import("src/components/aside/Aside"), {
  ssr: false,
});

const Home = () => {
  return (
    <Stack>
      <Flex justify={"center"}>
        <Responsive desktopComponent={<Aside />} />
        <CourtsList />
      </Flex>
    </Stack>
  );
};

export default Home;
