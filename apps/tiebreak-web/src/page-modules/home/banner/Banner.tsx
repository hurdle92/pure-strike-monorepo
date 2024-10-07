import { Flex, Responsive, Stack, Text, Spacer, Button } from "pure-strike-ui";
import { Img } from "src/components/img";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import { LITTLY_LINK } from "src/constants/link";

export const Banner = () => {
  return (
    <Stack>
      <Responsive
        mobileComponent={
          <Stack position={"relative"}>
            <Stack position={"absolute"} width={"100%"}>
              <Img
                src={"/images/home/banner/banner_mobile.jpg"}
                width={"100%"}
                height={"100vh"}
              />
            </Stack>
            <Stack position={"absolute"} width={"100%"} height={"100vh"}>
              <Flex
                justify={"center"}
                alignment={"center"}
                direction={"column"}
              >
                <Text
                  fontSize={"80px"}
                  lineHeight={"96px"}
                  color={"white"}
                  fontWeight={"bold"}
                  align={"center"}
                >
                  테니스
                  <br />
                  기록을
                  <br />
                  즐겁게
                </Text>
              </Flex>
              <Stack
                position={"absolute"}
                bottom={"40px"}
                width={"calc(100% - 40px)"}
                margin={"0 auto"}
                left={"20px"}
              >
                <Link href={LITTLY_LINK} target={"_blank"}>
                  <Button text={"지금 다운받기"} borderRadius={"12px"} />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        }
        desktopComponent={
          <Stack position={"relative"}>
            <Stack position={"absolute"} width={"100%"}>
              <Img
                src={"/images/home/banner/banner_desktop.jpg"}
                width={"100%"}
                height={"100vh"}
              />
            </Stack>
            <Stack
              position={"absolute"}
              width={"100%"}
              height={"100vh"}
              backgroundColor={"black-origin-30"}
            />
            <Stack position={"absolute"} width={"100%"} height={"100vh"}>
              <Flex
                justify={"center"}
                alignment={"center"}
                direction={"column"}
              >
                <ReactTyped
                  strings={["테니스 기록을 즐겁게"]}
                  typeSpeed={70}
                  backSpeed={80}
                  startDelay={100}
                  backDelay={2000}
                  style={{
                    color: "white",
                    fontSize: "110px",
                    fontWeight: "bold",
                  }}
                  loop
                />
                <Spacer height={"30px"} />
                <Stack width={"160px"} height={"50px"}>
                  <Link href={LITTLY_LINK} target={"_blank"}>
                    <Button text={"지금 다운받기"} borderRadius={"8px"} />
                  </Link>
                </Stack>
              </Flex>
            </Stack>
          </Stack>
        }
      />
    </Stack>
  );
};
