import Link from "next/link";
import { Button, Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { BiSolidError } from "react-icons/bi";
import {
  ButtonSize,
  ButtonStyleVariant,
} from "~components/Button/Button.types";

const Error404Page = () => {
  return (
    <Stack height={"100vh"}>
      <Flex justify={"center"} alignment={"center"} direction={"column"}>
        <BiSolidError size={100} />
        <Spacer height={"16px"} />
        <Text fontSize={"32px"} fontWeight={"700"}>
          주소를 확인해주세요
        </Text>
        <Spacer height={"8px"} />
        <Text color={"gray-600"} align={"center"}>
          여기는 비어 있는 페이지에요.
          <br />
          홈에서 다시 시도해 주세요.
        </Text>
        <Spacer height={"20px"} />
        <Link href={"/"}>
          <Stack width={"110px"}>
            <Button
              text={"홈으로 가기"}
              styleVariant={ButtonStyleVariant.Primary}
              size={ButtonSize.MEDIUM}
            />
          </Stack>
        </Link>
      </Flex>
    </Stack>
  );
};

export default Error404Page;
