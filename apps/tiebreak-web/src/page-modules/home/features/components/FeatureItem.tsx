import { Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { InView } from "react-intersection-observer";
import { Img } from "src/components/img";
import { css } from "styled-components";
import { FeatureItemInterface } from "../core/types";

export const FeatureItem = ({
  item,
  isReverse,
}: {
  item: FeatureItemInterface;
  isReverse: boolean;
}) => {
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
              direction={["column", isReverse ? "row-reverse" : "row"]}
            >
              <Stack padding={["0 16px", "0"]}>
                <Text
                  color={"blue-primary"}
                  fontWeight={"bold"}
                  fontSize={"24px"}
                >
                  {item.title}
                </Text>
                <Spacer height={"12px"} />
                <Text
                  fontSize={["32px", "38px"]}
                  lineHeight={"48px"}
                  fontWeight={"bold"}
                  whitespace={"pre-wrap"}
                >
                  {item.description}
                </Text>
              </Stack>
              <Spacer width={["0px", "120px"]} height={["20px", "0"]} />
              <Stack width={["100%", "auto"]} style={{ overflowY: "hidden" }}>
                <Stack width={["110%", "100%"]}>
                  <Flex
                    style={{ overflowY: "hidden" }}
                    css={featureImgContainer}
                  >
                    <Spacer width={["40px", "0px"]} />
                    <Flex gap={["20px"]} width={"100%"}>
                      {item.images.map((item) => (
                        <Img
                          key={item}
                          src={item}
                          width={["50%", "260px"]}
                          height={["auto", "534px"]}
                        />
                      ))}
                    </Flex>
                  </Flex>
                </Stack>
              </Stack>
            </Flex>
            <Spacer height={["100px", "120px"]} />
          </Stack>
        );
      }}
    </InView>
  );
};

const featureImgContainer = css`
  ::-webkit-scrollbar {
    display: none;
  }
`;
