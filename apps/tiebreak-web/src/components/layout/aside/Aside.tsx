import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Flex, Image, Spacer, Stack, Text, TextField } from "pure-strike-ui";
import {
  APP_STORE_LINK,
  PLAY_STORE_LINK,
  DYNAMIC_LINK,
} from "src/constants/link";
import { searchDefaultValue } from "./core/_models";
import { searchSchema } from "./core/_schema";
import { useRouter } from "next/router";
import React from "react";
import { SEARCH_CHIPS_LIST } from "src/constants/search";
import { SearchChipItem } from "./components/SearchChipItem";

const Aside = () => {
  const router = useRouter();
  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: searchDefaultValue,
    resolver: yupResolver(searchSchema),
  });

  const onPressEnterKeyword = React.useCallback(() => {
    if (isValid) {
      const keywordValue = watch("keyword");
      router.push(`/search?keyword=${keywordValue}`);
    }
  }, [watch("keyword"), isValid]);

  return (
    <aside>
      <Stack
        width={"512px"}
        height={"100vh"}
        position={"sticky"}
        top={"0px"}
        left={"0px"}
        display={["none", "block"]}
      >
        <Spacer height={"40px"} />
        <Link href={"/"}>
          <Image
            width={"240px"}
            height={"240px"}
            src={"/images/player.png"}
            borderRadius={"50%"}
            objectFit={"cover"}
          />
        </Link>
        <Spacer height={"40px"} />
        <Text typo={"Text28Bold"}>
          <span style={{ fontWeight: "400" }}>내 손안의 테니스장</span>
          <br />
          타이브레이크
        </Text>
        <Spacer height={"20px"} />
        <Text lineHeight={"1.5"}>
          테니스 코트 정보, 경기 매칭, 커뮤니티까지
          <br />내 주변에서 손쉽게 찾아봐요.
        </Text>
        <Spacer height={"16px"} />
        <Stack width={"342px"}>
          <TextField
            placeholder={"지역 및 코트명을 입력해주세요."}
            isAllowClear={true}
            controlKey={"keyword"}
            control={control}
            isError={errors.keyword}
            onPressEnter={onPressEnterKeyword}
          />
        </Stack>
        <Spacer height={"32px"} />
        <Stack width={"342px"}>
          <Flex gap={"8px"} flexWrap={"wrap"}>
            {SEARCH_CHIPS_LIST.map((item) => (
              <SearchChipItem key={item.name} name={item.name} />
            ))}
          </Flex>
        </Stack>
        <Stack position={"absolute"} bottom={"30px"} height={"auto"}>
          <Flex gap={"8px"} alignment={"center"}>
            <Link href={APP_STORE_LINK} target={"_blank"}>
              <Image
                src={"/images/app_store.png"}
                width={"138px"}
                height={"60px"}
                objectFit={"cover"}
                borderRadius={"4px"}
              />
            </Link>
            <Link href={PLAY_STORE_LINK} target={"_blank"}>
              <Image
                src={"/images/play_store.png"}
                width={"138px"}
                height={"60px"}
                objectFit={"cover"}
                borderRadius={"4px"}
              />
            </Link>
            <Link href={DYNAMIC_LINK} target={"_blank"}>
              <Image
                src={"/images/qr_code.png"}
                width={"50px"}
                height={"50px"}
              />
            </Link>
          </Flex>
        </Stack>
      </Stack>
    </aside>
  );
};

export default Aside;
