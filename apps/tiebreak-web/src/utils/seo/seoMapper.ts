import { DEFAULT_SEO } from "src/constants/seo";

export const seoMapper = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return {
    ...DEFAULT_SEO,
    title: `${title} | 타이브레이크`,
    description: `${description} | 타이브레이크`,
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      title: `${title} | 타이브레이크`,
      description: `${description} | 타이브레이크`,
    },
  };
};
