import { ColorPaletteProps, ZIndex } from "~/foundation";
import {
  ComponentBaseProps,
  MarginProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

type PositionType = "static" | "absolute" | "fixed" | "relative" | "sticky";

interface StackOptions {
  position?: PositionType;
  width?: ResponsiveStyleProps;
  margin?: ResponsiveStyleProps;
  padding?: ResponsiveStyleProps;
  minWidth?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  backgroundColor?: ColorPaletteProps;
  zIndex?: ZIndex;
  borderRadius?: number | string;
  onClick?: MouseEventHandler;
}

export interface PositionLocationProps {
  top?: ResponsiveStyleProps;
  right?: ResponsiveStyleProps;
  bottom?: ResponsiveStyleProps;
  left?: ResponsiveStyleProps;
}

export interface BorderProps {
  borderWidth?: number;
  borderTop?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderColor?: ColorPaletteProps;
}

export interface StackProps
  extends ComponentBaseProps,
    PositionLocationProps,
    MarginProps,
    BorderProps,
    StackOptions {}
