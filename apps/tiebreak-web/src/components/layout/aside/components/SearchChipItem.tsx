import Link from "next/link";
import { Stack, Text, Flex } from "pure-strike-ui";

export const SearchChipItem = ({ name }) => {
  return (
    <Link href={`/search?keyword=${name}`}>
      <Stack
        backgroundColor={"blue-primary"}
        height={"36px"}
        borderRadius={"20px"}
        padding={"4px 12px"}
      >
        <Flex justify={"center"} alignment={"center"}>
          <Text color={"white"}>{name}</Text>
        </Flex>
      </Stack>
    </Link>
  );
};
