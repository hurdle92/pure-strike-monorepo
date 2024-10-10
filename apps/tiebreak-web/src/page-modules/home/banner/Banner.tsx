import { Flex, Responsive, Stack, Text, Spacer, Button } from "pure-strike-ui";
import { Img } from "src/components/img";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import { LITTLY_LINK } from "src/constants/link";
import { ChevronDown } from "lucide-react";
import { Bounce } from "src/styles/keyframes";
import { css } from "styled-components";

export const Banner = () => {
  return (
    <Stack height={"100vh"}>
      <Responsive
        mobileComponent={
          <Stack position={"relative"}>
            <Stack position={"absolute"} width={"100%"}>
              <Img
                src={"/images/home/banner/banner_mobile.jpg"}
                width={"100%"}
                height={"100vh"}
                priority={true}
                style={{
                  filter: "brightness(90%)",
                }}
              />
            </Stack>
            <Stack position={"absolute"} width={"100%"} height={"100vh"}>
              <Flex
                justify={"center"}
                alignment={"center"}
                direction={"column"}
              >
                <ReactTyped
                  strings={["테니스\n기록을\n즐겁게", "기록은\n성장의\n밑거름"]}
                  typeSpeed={70}
                  backSpeed={80}
                  startDelay={100}
                  backDelay={2000}
                  style={{
                    color: "white",
                    fontSize: "80px",
                    fontWeight: "bold",
                    whiteSpace: "pre-line",
                    textAlign: "center",
                  }}
                  loop={true}
                />
                <Spacer height={"80px"} />
              </Flex>
              <Stack
                position={"absolute"}
                bottom={"60px"}
                width={"calc(100% - 32px)"}
                margin={"0 auto"}
                left={"16px"}
              >
                <Link href={LITTLY_LINK} target={"_blank"}>
                  <Button text={"지금 다운받기"} borderRadius={"12px"} />
                </Link>
              </Stack>
              <Stack position={"absolute"} bottom={"18px"} width={"100%"}>
                <Flex justify={"center"}>
                  <ChevronDown
                    color={"white"}
                    size={"30px"}
                    css={css`
                      animation: ${Bounce} 2s infinite ease-in-out;
                    `}
                  />
                </Flex>
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
                priority={true}
                style={{
                  filter: "brightness(80%)",
                }}
              />
            </Stack>
            <Stack position={"absolute"} width={"100%"} height={"100vh"}>
              <Flex
                justify={"center"}
                alignment={"center"}
                direction={"column"}
              >
                <ReactTyped
                  strings={["테니스\n기록을\n즐겁게", "기록은\n성장의\n밑거름"]}
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
