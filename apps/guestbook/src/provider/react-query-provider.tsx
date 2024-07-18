"use client";

import { useState, PropsWithChildren } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
        },
      },
    })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
