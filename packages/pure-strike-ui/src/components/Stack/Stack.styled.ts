import styled, { css } from "styled-components";
import { BorderProps, StackProps } from "./Stack.types";
import { Palette } from "~/foundation";
import { MarginProps, PaddingProps } from "~/types/componentProps";
import { getResponsiveStyles } from "~/foundation/responsive";

// NOTE : string이면 그대로 string으로 반환(ex : 100vh or 100vw), 그 외에는 px로 반환
const getPixelByType = (value: number | string) => {
  if (typeof value === "string") {
    return css`
      ${value};
    `;
  }
  return css`
    ${value + "px"};
  `;
};

const getBorderStyle = ({
  borderWidth,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
}: BorderProps) => {
  // NOTE : true일 경우만 border 표시
  const getBorderStyle = (position?: boolean) => {
    return position ? "solid" : "none";
  };

  const getBorderColor = (borderColor) => {
    return Palette[borderColor];
  };

  // NOTE : 하나라도 true 속성으로 내려주지 않으면 전체 border style로 판단
  const isBorderAll = [borderTop, borderRight, borderBottom, borderLeft].every(
    (item) => !item
  );

  return css`
    border-width: ${borderWidth}px;
    border-color: ${getBorderColor(borderColor)};
    box-sizing: border-box;
    border-style: ${isBorderAll
      ? "solid"
      : `${getBorderStyle(borderTop)} 
         ${getBorderStyle(borderRight)}
         ${getBorderStyle(borderBottom)} 
         ${getBorderStyle(borderLeft)}`};
  `;
};

const getBackgroundColor = (backgroundColor) => {
  return Palette[backgroundColor];
};

export const Container = styled.div<StackProps>`
  ${(props) => getResponsiveStyles("display", props.display)};
  position: ${({ position }) => position};

  min-width: ${({ minWidth }) => minWidth && getPixelByType(minWidth)};
  ${(props) => getResponsiveStyles("width", props.width)};
  ${(props) => getResponsiveStyles("height", props.height)};
  min-height: ${({ minHeight }) => minHeight && getPixelByType(minHeight)};
  max-height: ${({ maxHeight }) => maxHeight && getPixelByType(maxHeight)};

  ${({ top }) => getResponsiveStyles("top", top)};
  ${({ right }) => getResponsiveStyles("right", right)};
  ${({ left }) => getResponsiveStyles("left", left)};
  ${({ bottom }) => getResponsiveStyles("bottom", bottom)};

  ${(props) => getResponsiveStyles("overflow-x", props.overflowX)};
  ${(props) => getResponsiveStyles("overflow-y", props.overflowY)};

  ${(props) => getResponsiveStyles("margin", props.margin)};
  ${(props) => getResponsiveStyles("padding", props.padding)};

  background-color: ${({ backgroundColor }) =>
    getBackgroundColor(backgroundColor)};

  ${({ borderWidth }) => borderWidth && getBorderStyle};
  z-index: ${({ zIndex }) => zIndex};
  border-radius: ${({ borderRadius }) =>
    borderRadius && getPixelByType(borderRadius)};
`;
