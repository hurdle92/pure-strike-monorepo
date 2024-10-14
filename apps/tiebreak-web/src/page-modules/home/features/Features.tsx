import { Stack, Spacer } from "pure-strike-ui";
import { FeatureItem } from "./components/FeatureItem";
import { FEATURES_LIST_DATA } from "./core/constants";

// NOTE : 홀수만 데스크탑 reverse row
export const Features = () => {
  return (
    <Stack>
      <Spacer height={"100px"} />
      {FEATURES_LIST_DATA.map((item, index) => {
        const isReverse = index % 2 === 1;
        return (
          <FeatureItem item={item} isReverse={isReverse} key={item.title} />
        );
      })}
    </Stack>
  );
};
