import { Stack, Text } from "pure-strike-ui";

export const FeatureChip = ({ feature }: { feature: string }) => {
  return (
    <Stack
      backgroundColor={"gray-200"}
      padding={"2px 4px"}
      borderRadius={"4px"}
    >
      <Text typo={"Text10Bold"} color={"blue-primary"}>
        {feature}
      </Text>
    </Stack>
  );
};
