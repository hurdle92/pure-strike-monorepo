import { ImageProps } from "next/image";
import { CSSProperties } from "styled-components";
import { ResponsiveStyleProps } from "~types/componentProps";

export interface ImgProps extends Pick<ImageProps, "priority"> {
  alt?: string;
  src?: string;
  isOrigin?: boolean;
  width: ResponsiveStyleProps;
  height: ResponsiveStyleProps;
  borderRadius?: string;
  style?: CSSProperties;
}

export interface ImgStyledProps
  extends Pick<ImgProps, "width" | "height" | "borderRadius"> {}
