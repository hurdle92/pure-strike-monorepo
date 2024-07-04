import React, { forwardRef } from "react";
import * as Styled from "./Flex.styled";
import { FlexProps } from "./Flex.types";
import { noop } from "~/utils/funtionUtils";

export const Flex = forwardRef(
  (
    {
      height = "100%",
      direction = "row",
      justify,
      alignment,
      flexWrap = "nowrap",
      gap = 0,
      overflow = "visible",
      onClick = noop,
      cursor = "inherit",
      children,
      ...rest
    }: FlexProps,
    forwardRef
  ) => {
    return (
      <Styled.Flex
        height={height}
        direction={direction}
        justify={justify}
        alignment={alignment}
        flexWrap={flexWrap}
        gap={gap}
        overflow={overflow}
        onClick={onClick}
        cursor={cursor}
        {...rest}
      >
        {children}
      </Styled.Flex>
    );
  }
);
