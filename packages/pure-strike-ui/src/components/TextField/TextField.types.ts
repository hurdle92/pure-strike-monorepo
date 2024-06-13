import { Control, FieldError } from "react-hook-form";
import { ComponentBaseProps, SideContentProps } from "~/types/componentProps";
import { ChangeEventHandler, MouseEventHandler } from "~/types/events";

type TextFieldType = "search" | "text" | "email" | "password" | "number";

interface MultipleValidationItem {
  label: string;
  regEx: RegExp;
}

interface TextFieldOptions {
  type?: TextFieldType;
  label?: string;
  isAllowClear?: boolean;
  placeholder: string;
  value?: string;
  onClick?: MouseEventHandler;
  onPressEnter?: () => void;
  onChange?: ChangeEventHandler;
  control?: Control<any>;
  controlKey: string;
  isError?: FieldError | boolean | undefined;
  errMessage?: string;
  disabled?: boolean;
  multipleValidations?: MultipleValidationItem[];
}

export interface TextFieldProps
  extends ComponentBaseProps,
    TextFieldOptions,
    SideContentProps {}

export type TextFieldStyledProps = Pick<
  TextFieldOptions,
  "isError" | "disabled"
>;
