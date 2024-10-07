export interface ImgProps {
  alt?: string;
  src?: string;
  isOrigin?: boolean;
  width: string;
  height: string;
  borderRadius?: string;
  isNeedBlur?: boolean;
}

export interface ImgStyledProps
  extends Pick<ImgProps, "width" | "height" | "borderRadius"> {}
