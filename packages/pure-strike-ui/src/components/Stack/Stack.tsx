import React, { forwardRef } from "react";
import * as Styled from "./Stack.styled";
import { StackProps } from "./Stack.types";
import { noop } from "~/utils/funtionUtils";
import { ZIndex } from "~/foundation";

export const Stack = forwardRef(
  (
    {
      display = "block",
      position,
      top,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      margin,
      padding,
      borderWidth,
      borderColor,
      borderBottom,
      backgroundColor = "transparent",
      zIndex = ZIndex.Auto,
      borderRadius = 0,
      overflowX = "visible",
      overflowY = "visible",
      onClick = noop,
      cursor = "inherit",
      opacity = 1.0,
      children,
      ...rest
    }: StackProps,
    forwardRef
  ) => {
    return (
      <Styled.Container
        display={display}
        position={position}
        top={top}
        width={width}
        margin={margin}
        padding={padding}
        minWidth={minWidth}
        maxWidth={maxWidth}
        height={height}
        minHeight={minHeight}
        maxHeight={maxHeight}
        borderWidth={borderWidth}
        borderColor={borderColor}
        borderBottom={borderBottom}
        backgroundColor={backgroundColor}
        zIndex={zIndex}
        borderRadius={borderRadius}
        overflowX={overflowX}
        overflowY={overflowY}
        onClick={onClick}
        cursor={cursor}
        opacity={opacity}
        {...rest}
      >
        {children}
      </Styled.Container>
    );
  }
);
