import {
  ComponentBaseProps,
  MarginProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

export type ObjectFitType =
  | "contain"
  | "cover"
  | "fill"
  | "none"
  | "scale-down";

export interface ImageOptions {
  width?: ResponsiveStyleProps;
  height?: ResponsiveStyleProps;
  borderRadius?: ResponsiveStyleProps;
  src: string;
  alt?: string;
  objectFit?: ObjectFitType;
  onLoad?: () => void;
  onClick?: MouseEventHandler;
}
// NOTE : 이미지 컴포넌트 props
export interface ImageProps
  extends ComponentBaseProps,
    MarginProps,
    ImageOptions {}
