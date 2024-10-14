import { Stack, Text } from "pure-strike-ui";
import { Banner } from "./banner/Banner";
import { Features } from "./features/Features";
import { CTA } from "./cta/CTA";

const Home = () => {
  return (
    <Stack>
      <Banner />
      <Features />
      <CTA />
    </Stack>
  );
};

export default Home;
