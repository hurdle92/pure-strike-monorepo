import styled from "styled-components";
import { ImgStyledProps } from "./Img.types";

export const ImageContainer = styled.div<ImgStyledProps>`
  width: 100%;
  height: ${(props) => props.height};
  img {
    border-radius: ${(props) => props.borderRadius};
    object-fit: cover;
  }
`;
