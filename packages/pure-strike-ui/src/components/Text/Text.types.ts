import { ColorPaletteProps } from "~/foundation/colors/palette/palette";
import { TypographyProps } from "~/foundation/typo/typography";

import {
  MarginProps,
  type ComponentBaseProps,
  CursorProps,
  HoverProps,
  ResponsiveStyleProps,
} from "~/types/componentProps";

type WhiteSpaceType =
  | "normal"
  | "nowrap"
  | "pre"
  | "pre-wrap"
  | "pre-line"
  | "break-spaces";

type TextAlignType = "start" | "end" | "center" | "justify";

interface TextOptions {
  color?: ColorPaletteProps;
  typo?: TypographyProps;
  whitespace?: WhiteSpaceType;
  onClick?: React.MouseEventHandler;
  align?: TextAlignType;
  ellipsis?: boolean;
  ellipsisLine?: number;
  fontSize?: ResponsiveStyleProps;
  fontWeight?: ResponsiveStyleProps;
  lineHeight?: ResponsiveStyleProps;
}

export interface TextProps
  extends ComponentBaseProps,
    MarginProps,
    CursorProps,
    HoverProps,
    TextOptions {}
