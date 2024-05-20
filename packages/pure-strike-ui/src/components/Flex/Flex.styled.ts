import styled, { css } from "styled-components";
import { getResponsiveStyles } from "~/foundation/responsive";
import { FlexProps } from "./Flex.types";

export const Flex = styled.div<FlexProps>`
  display: flex;

  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignment }) => alignment};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  overflow: ${({ overflow }) => overflow};

  ${(props) => getResponsiveStyles("gap", props.gap)};
  ${(props) => getResponsiveStyles("flex-direction", props.direction)};
`;
