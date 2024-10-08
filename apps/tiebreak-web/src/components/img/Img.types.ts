import { ImageProps } from "next/image";
import { CSSProperties } from "styled-components";

export interface ImgProps extends Pick<ImageProps, "priority"> {
  alt?: string;
  src?: string;
  isOrigin?: boolean;
  width: string;
  height: string;
  borderRadius?: string;
  style?: CSSProperties;
}

export interface ImgStyledProps
  extends Pick<ImgProps, "width" | "height" | "borderRadius"> {}
