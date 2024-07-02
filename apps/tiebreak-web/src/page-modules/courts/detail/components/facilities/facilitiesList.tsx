import { Stack, Flex, Text, Grid, Spacer } from "pure-strike-ui";
import { IoCalendarOutline } from "react-icons/io5";
import {
  MdLocalParking,
  MdOutlineShower,
  MdOutlineStorefront,
  MdOutlineSportsTennis,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FacilityInterface, FacilityLabelEnum } from "src/types/facility";

export const FacilitiesList = ({
  isOnlineReservation,
  isIndoor,
  isParking,
  isShower,
  isStore,
  isRacketString,
}: FacilityInterface) => {
  const list = [
    {
      icon: <IoCalendarOutline size={30} />,
      label: FacilityLabelEnum.isOnlineReservation,
      isAvailable: isOnlineReservation,
    },
    {
      icon: <AiOutlineHome size={30} />,
      label: FacilityLabelEnum.isIndoor,
      isAvailable: isIndoor,
    },
    {
      icon: <MdLocalParking size={30} />,
      label: FacilityLabelEnum.isParking,
      isAvailable: isParking,
    },
    {
      icon: <MdOutlineShower size={36} />,
      label: FacilityLabelEnum.isShower,
      isAvailable: isShower,
    },
    {
      icon: <MdOutlineStorefront size={32} />,
      label: FacilityLabelEnum.isStore,
      isAvailable: isStore,
    },
    {
      icon: <MdOutlineSportsTennis size={32} />,
      label: FacilityLabelEnum.isRacketString,
      isAvailable: isRacketString,
    },
  ];

  return (
    <Grid
      gridTemplateColums={"repeat(3, 1fr)"}
      gridColumnGap={["20px", "10px"]}
      gridRowGap={"20px"}
    >
      {list.map((item) => (
        <Stack key={item.label} opacity={item.isAvailable ? 1.0 : 0.3}>
          <Stack
            padding={"20px"}
            borderRadius={"12px"}
            backgroundColor={"skyblue-primary"}
            width={["100%", "120px"]}
            height={["100px", "120px"]}
          >
            <Flex justify={"center"} alignment={"center"}>
              {item.icon}
            </Flex>
          </Stack>
          <Spacer height={"8px"} />
          <Text fontWeight={"500"} align={"center"}>
            {item.label}
          </Text>
        </Stack>
      ))}
    </Grid>
  );
};
