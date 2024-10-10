import styled from "styled-components";
import { ImgStyledProps } from "./Img.types";
import { getResponsiveStyles } from "~foundation";

export const ImageContainer = styled.div<ImgStyledProps>`
  ${(props) => getResponsiveStyles("width", props.width)};
  ${(props) => getResponsiveStyles("height", props.height)};

  img {
    border-radius: ${(props) => props.borderRadius};
    object-fit: cover;
  }
`;
