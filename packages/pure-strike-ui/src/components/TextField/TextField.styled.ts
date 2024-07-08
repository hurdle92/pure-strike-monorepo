import styled, { css } from "styled-components";
import { TextFieldStyledProps } from "./TextField.types";
import { Palette } from "~/foundation";
import { Text } from "../Text/Text";

// NOTE : field error 공통 스타일
export const erroredWrapperBorderStyle = css`
  span {
    color: ${Palette["status-error"]};
  }
`;

// NOTE : field disabled 공통 스타일
export const disabledWrapperBorderStyle = css`
  border: 1px solid ${Palette["gray-400"]};
  color: ${Palette["gray-400"]};
  & > span {
    color: ${Palette["gray-400"]};
  }
`;

export const Wrapper = styled.div``;

export const Container = styled.div<TextFieldStyledProps>`
  position: relative;
  display: flex;
  width: 100%;
  height: 52px;
  border: 1px solid ${Palette["gray-400"]};
  box-sizing: border-box;
  align-items: center;
  border: none;

  ${({ isError }) => isError && erroredWrapperBorderStyle}
`;

export const Label = styled.span`
  position: absolute;
  left: 8px;
  top: -6px;
  padding: 0 4px;
  background-color: white;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  padding: 16px;
  border-radius: 6px;
  background-color: white;
  border: 1px solid ${Palette["gray-400"]};

  &::placeholder {
    font-weight: 400;
    color: ${Palette["gray-400"]};
    font-size: 16px;
  }
  &:focus {
    border-color: ${Palette["blue-primary"]};
  }
  &:hover {
    border-color: ${Palette["blue-primary"]};
  }
`;
export const ErrorMessage = styled(Text)`
  font-size: 12px;
  padding: 8px 0 0 12px;
`;
