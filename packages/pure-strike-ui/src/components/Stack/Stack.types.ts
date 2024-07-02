import { ColorPaletteProps, ZIndex } from "~/foundation";
import {
  ComponentBaseProps,
  CursorProps,
  MarginProps,
  OpacityProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";
import { MouseEventHandler } from "~/types/events";

type DisplayType = "block" | "inline-block" | "none" | "flex" | "grid";

type PositionType = "static" | "absolute" | "fixed" | "relative" | "sticky";

export type OverflowType =
  | "visible"
  | "hidden"
  | "scroll"
  | "auto"
  | "inherit"
  | "initial"
  | "clip";

interface StackOptions {
  display?: ResponsiveStyleProps<DisplayType>;
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
  overflowX?: ResponsiveStyleProps<OverflowType>;
  overflowY?: ResponsiveStyleProps<OverflowType>;
  onClick?: MouseEventHandler;
}

export interface PositionLocationProps {
  top?: ResponsiveStyleProps;
  right?: ResponsiveStyleProps;
  bottom?: ResponsiveStyleProps;
  left?: ResponsiveStyleProps;
}

export interface BorderProps {
  borderWidth?: ResponsiveStyleProps;
  borderAll?: boolean;
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
    StackOptions,
    CursorProps,
    OpacityProps {}
