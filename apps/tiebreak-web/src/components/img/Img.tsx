import Image from "next/image";
import { ImageContainer } from "./Img.styled";
import { ImgProps } from "./Img.types";

export const Img = ({
  alt = "alternative_img",
  src = "",
  isOrigin = false,
  width = "100%",
  height,
  borderRadius,
  priority = false,
  style,
  ...rest
}: ImgProps) => {
  return (
    <ImageContainer
      width={width}
      height={height}
      borderRadius={borderRadius}
      style={style}
      {...rest}
    >
      <Image
        alt={alt}
        src={src}
        width={0}
        height={0}
        priority={priority}
        sizes={"100vw"}
        placeholder={"empty"}
        style={{ width: "100%", height: "100%" }}
      />
    </ImageContainer>
  );
};
