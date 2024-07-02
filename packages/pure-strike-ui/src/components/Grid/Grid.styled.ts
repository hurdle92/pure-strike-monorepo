import styled, { css } from "styled-components";
import { getResponsiveStyles } from "~/foundation/responsive";
import { GridProps } from "./Grid.types";

export const GridWrapper = styled.div<GridProps>`
  display: grid;
  ${(props) =>
    getResponsiveStyles("grid-template-columns", props.gridTemplateColums)};
  ${(props) => getResponsiveStyles("grid-auto-flow", props.gridAutoFlow)};
  ${(props) => getResponsiveStyles("grid-column-gap", props.gridColumnGap)};
  ${(props) => getResponsiveStyles("grid-row-gap", props.gridRowGap)};
`;
