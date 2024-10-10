import { Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { InView } from "react-intersection-observer";
import { Img } from "src/components/img";

export const FeatureItem = () => {
  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => {
        return (
          <Stack
            ref={ref}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(80px)",
              transition: "all 0.8s ease-in-out",
            }}
          >
            <Flex
              justify={"center"}
              alignment={["flex-start", "center"]}
              direction={["column", "row"]}
            >
              <Stack padding={["0 16px", "0"]}>
                <Text
                  color={"blue-primary"}
                  fontWeight={"bold"}
                  fontSize={"24px"}
                >
                  다이어리
                </Text>
                <Spacer height={"12px"} />
                <Text
                  fontSize={["32px", "38px"]}
                  lineHeight={"48px"}
                  fontWeight={"bold"}
                >
                  나의 테니스 플레이를
                  <br />
                  체계적으로 기록하고
                </Text>
              </Stack>
              <Spacer width={["0px", "120px"]} height={["20px", "0"]} />
              <Stack width={["100%", "auto"]} style={{ overflowY: "scroll" }}>
                <Stack width={["140%", "100%"]}>
                  <Flex overflow={"scroll"} style={{ overflowY: "hidden" }}>
                    <Spacer width={["40px", "0px"]} />
                    <Img
                      src={"/images/home/features/diary/diary_1.png"}
                      width={["220px", "260px"]}
                      height={["450px", "534px"]}
                    />
                    <Spacer width={"20px"} />
                    <Img
                      src={"/images/home/features/diary/diary_2.png"}
                      width={["220px", "260px"]}
                      height={["450px", "534px"]}
                    />
                  </Flex>
                </Stack>
              </Stack>
            </Flex>
            <Spacer height={"100px"} />
          </Stack>
        );
      }}
    </InView>
  );
};
