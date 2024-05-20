import React, { forwardRef } from "react";
import type { TextProps } from "./Text.types";
import Styled from "./Text.styled";
import { noop } from "~/utils/funtionUtils";

export const Text = forwardRef(
  (
    {
      as,
      color,
      typo,
      style,
      id,
      className,
      whitespace = "normal",
      cursor = "inherit",
      align = "start",
      fontSize,
      fontWeight,
      lineHeight,
      onClick = noop,
      hover = false,
      children,
      ...rest
    }: TextProps,
    forwardedRef: React.Ref<HTMLElement>
  ) => {
    return (
      <Styled
        {...rest}
        as={as}
        id={id}
        style={style}
        ref={forwardedRef}
        className={className}
        color={color}
        typo={typo}
        whitespace={whitespace}
        cursor={cursor}
        align={align}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        hover={hover}
        onClick={onClick}
      >
        {children}
      </Styled>
    );
  }
);
