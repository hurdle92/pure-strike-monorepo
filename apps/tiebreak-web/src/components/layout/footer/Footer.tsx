import Link from "next/link";
import { Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { INSTA_LINK, OFFICIAL_EMAIL } from "src/constants/link";

export const Footer = () => {
  return (
    <Stack maxWidth={"1024px"} margin={"0 auto"} padding={["0 16px", "0"]}>
      <Spacer height={["60px", "100px"]} />
      <Flex justify={"space-between"} width={"100%"} alignment={"center"}>
        <Text color={"gray-600"}>
          Copyright © 2024 Tiebreak. All rights reserved.
        </Text>
        <Flex width={"auto"} alignment={"center"}>
          <Link href={INSTA_LINK} target={"_blank"}>
            <FaInstagram size={30} />
          </Link>
          <Spacer width={"16px"} />
          <Link href={`mailto:${OFFICIAL_EMAIL}`}>
            <IoMailOutline size={32} />
          </Link>
        </Flex>
      </Flex>
      <Spacer height={["60px", "80px"]} />
    </Stack>
  );
};
