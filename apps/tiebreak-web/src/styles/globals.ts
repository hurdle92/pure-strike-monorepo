import { createGlobalStyle } from "styled-components";
import { pretendard } from "./fonts";

export const GlobalStyle = createGlobalStyle`

* {
  font-family: ${pretendard.style.fontFamily};
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
 
html,
body {
  font-family: Pretendard, "Noto Sans KR";
  background-color: white;
}

a {
  color: inherit;
  text-decoration: none;
  display: block;
}

input {
  outline: none;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`;
