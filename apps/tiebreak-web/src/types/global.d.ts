import { CSSProp } from "styled-components";

declare module "react" {
  interface Attributes {
    css?: CSSProp;
  }
}

declare const kakao: any;

declare global {
  interface Window {
    kakao: any;
  }
}
