import React, { forwardRef } from "react";
import * as Styled from "./TextField.styled";
import { TextFieldProps } from "./TextField.types";
import { Text } from "../Text/Text";
import { useController } from "react-hook-form";
import { noop } from "~/utils/funtionUtils";
import { Image } from "../Image";
import { Stack } from "../Stack";

export const TextField = forwardRef(
  (
    {
      type = "text",
      label,
      isAllowClear = false,
      onClick = noop,
      onChange,
      onPressEnter = noop,
      rightContent,
      placeholder,
      control,
      controlKey,
      isError,
      errMessage,
      disabled,
      multipleValidations,
      style,
      ...rest
    }: TextFieldProps,
    forwardRef
  ) => {
    const name = controlKey;
    const {
      field: { value, onChange: onChangeController },
    } = useController({ name, control });
    const ref = React.useRef<any>(null);
    const [isFocused, setIsFocused] = React.useState(false);

    const handleFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
      },
      []
    );
    const handleBlur = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
      },
      []
    );

    // NOTE : focus 상태면 plaholder 공백
    const placeholderValue = React.useMemo<string>(() => {
      if (isFocused) {
        return "";
      }
      return placeholder;
    }, [isFocused]);

    // NOTE : focus 상태이거나 input value값이 0 이상일때 라벨 노출
    const isShowLabel = React.useMemo<boolean>(() => {
      if (isFocused || value.length !== 0) {
        return true;
      }
      return false;
    }, [isFocused]);

    const isValueAvaiable = React.useMemo<boolean>(() => {
      return value.length !== 0;
    }, [value]);

    // NOTE : control value 초기화, 내부 포커스는 유지
    const onClickReset = React.useCallback(() => {
      onChangeController("");
      ref.current?.focus();
    }, [value, ref]);

    const activeEnter = (e: any) => {
      if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
        onPressEnter();
      }
    };

    const ClearComponent = React.useMemo<React.ReactNode>(() => {
      if (isValueAvaiable) {
        return (
          <Stack position={"absolute"} right={"16px"}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_URL}/icons/close.svg`}
              cursor={"pointer"}
              onClick={onClickReset}
              width={"24px"}
            />
          </Stack>
        );
      }
    }, [isValueAvaiable]);

    const RightContent = React.useMemo(() => {
      if (rightContent) {
        return rightContent;
      }
    }, [rightContent]);

    return (
      <Styled.Wrapper onClick={onClick} style={style} {...rest}>
        <Styled.Container isError={isError}>
          {isShowLabel && (
            <Styled.Label>
              <Text fontSize={"10px"}>{label}</Text>
            </Styled.Label>
          )}
          <Styled.Input
            ref={ref}
            type={type}
            placeholder={placeholderValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            onChange={onChange ? onChange : onChangeController}
            onKeyDown={activeEnter}
          />
          {isAllowClear && ClearComponent}
          {RightContent}
        </Styled.Container>
        {errMessage && (
          <Styled.ErrorMessage color={"status-error"}>
            {errMessage}
          </Styled.ErrorMessage>
        )}
      </Styled.Wrapper>
    );
  }
);
