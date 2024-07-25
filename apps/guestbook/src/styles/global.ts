import { createGlobalStyle } from "styled-components";
import { inTer } from "./fonts";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${inTer.style.fontFamily};
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html,
  body {
    font-family: Pretendard;
    background-color: white;
    font-size: 16px;
  }
  button {
    border: none;
    cursor: pointer;
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
  iframe{
    border:none;
  }
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
