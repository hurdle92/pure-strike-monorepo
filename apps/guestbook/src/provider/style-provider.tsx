"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { GlobalStyle } from "src/styles/global";

export default function StyleProvider({ children }: { children: JSX.Element }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager
      enableVendorPrefixes
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={(propName, target) => {
        if (typeof target === "string") {
          return isPropValid(propName);
        }
        return true;
      }}
    >
      <GlobalStyle />
      {children}
    </StyleSheetManager>
  );
}
