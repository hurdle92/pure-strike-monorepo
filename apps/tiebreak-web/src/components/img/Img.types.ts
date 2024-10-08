import { ImageProps } from "next/image";

export interface ImgProps extends Pick<ImageProps, "priority"> {
  alt?: string;
  src?: string;
  isOrigin?: boolean;
  width: string;
  height: string;
  borderRadius?: string;
}

export interface ImgStyledProps
  extends Pick<ImgProps, "width" | "height" | "borderRadius"> {}
