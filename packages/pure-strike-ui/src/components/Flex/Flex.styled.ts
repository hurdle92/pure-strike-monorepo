import styled, { css } from "styled-components";
import { getResponsiveStyles } from "~/foundation/responsive";
import { FlexProps } from "./Flex.types";

export const Flex = styled.div<FlexProps>`
  display: flex;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  justify-content: ${({ justify }) => justify};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  overflow: ${({ overflow }) => overflow};

  ${(props) => getResponsiveStyles("gap", props.gap)};
  ${(props) => getResponsiveStyles("flex-direction", props.direction)};
  ${(props) => getResponsiveStyles("align-items", props.alignment)};

  cursor: ${({ cursor }) => cursor};
`;
