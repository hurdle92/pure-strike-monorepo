import Link from "next/link";
import { Stack, Text, Image, Spacer, Divider, Flex } from "pure-strike-ui";
import { CourtItemInterface } from "src/types/courts";
import { FeatureItem } from "./components/FeatureChip";

export const CourtsItem = ({ item }: { item: CourtItemInterface }) => {
  const {
    id,
    koName,
    thumbnail,
    address,
    isOnlineReservation,
    isIndoor,
    isShower,
  } = item;
  return (
    <Link href={`/courts/${id}`}>
      <Stack padding={"16px 16px 0 16px"}>
        <Image
          src={thumbnail}
          width={"100%"}
          height={"200px"}
          borderRadius={"8px"}
          objectFit={"cover"}
        />
        <Spacer height={"8px"} />
        <Text typo={"Text18Bold"}>{koName}</Text>
        <Spacer height={"2px"} />
        <Text typo={"Text14Regular"} color={"gray-500"}>
          {address}
        </Text>
        <Spacer height={"4px"} />
        <Flex gap={"8px"}>
          {isOnlineReservation && <FeatureItem feature={"온라인 예약"} />}
          {isIndoor && <FeatureItem feature={"실내코트"} />}
          {isShower && <FeatureItem feature={"샤워시설"} />}
        </Flex>
        <Spacer height={"16px"} />
        <Divider width={"100%"} height={"1px"} color={"border-gray"} />
      </Stack>
    </Link>
  );
};
