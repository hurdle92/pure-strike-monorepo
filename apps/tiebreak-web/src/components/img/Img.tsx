import Image from "next/image";
import { BLUR_IMG_URL } from "src/constants/img";
import { ImageContainer } from "./Img.styled";
import { ImgProps } from "./Img.types";

export const Img = ({
  alt = "alternative_img",
  src,
  isOrigin,
  width,
  height,
  borderRadius,
}: ImgProps) => {
  return (
    <ImageContainer width={width} height={height} borderRadius={borderRadius}>
      <Image
        alt={alt}
        src={src}
        width={0}
        height={0}
        sizes={"100vw"}
        style={{ width: "100%", height: "100%" }}
        priority={true}
        placeholder={"blur"}
        blurDataURL={BLUR_IMG_URL}
      />
    </ImageContainer>
  );
};
