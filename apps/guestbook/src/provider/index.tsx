import { PropsWithChildren } from "react";
import StyleProvider from "./style-provider";
import ReactQueryProvider from "./react-query-provider";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <StyleProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </StyleProvider>
  );
}
