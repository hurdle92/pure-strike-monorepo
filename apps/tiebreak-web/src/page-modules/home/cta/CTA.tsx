import Link from "next/link";
import { Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { Img } from "src/components/img";
import { APP_STORE_LINK, PLAY_STORE_LINK } from "src/constants/link";

export const CTA = () => {
  return (
    <Stack
      style={{ background: "linear-gradient(135deg, #2454f8, #1e3c90)" }}
      padding={"0 16px"}
    >
      <Spacer height={["50px", "100px"]} />
      <Flex direction={"column"} alignment={"center"} justify={"center"}>
        <Text fontSize={["30px", "48px"]} color={"white"} fontWeight={"bold"}>
          지금 바로 시작해보세요!
        </Text>
        <Spacer height={["20px"]} />
        <Text
          color={"white"}
          align={"center"}
          fontSize={["18px", "20px"]}
          lineHeight={"24px"}
        >
          테니스 실력향상의 지름길 ! 지금 당장 타이브레이크와 함께 해봐요.
        </Text>
        <Spacer height={["16px", "32px"]} />
        <Flex justify={"center"} gap={"16px"}>
          <Link href={APP_STORE_LINK} target={"_blank"}>
            <Img
              src={"/images/appstore.png"}
              width={["142px", "172px"]}
              height={["48px", "58px"]}
            />
          </Link>
          <Link href={PLAY_STORE_LINK} target={"_blank"}>
            <Img
              src={"/images/playstore.png"}
              width={["160px", "194px"]}
              height={["48px", "58px"]}
            />
          </Link>
        </Flex>
      </Flex>
      <Spacer height={["50px", "110px"]} />
    </Stack>
  );
};
