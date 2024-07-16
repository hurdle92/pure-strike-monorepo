import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { DefaultSeo, NextSeo } from "next-seo";
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from "@tanstack/react-query";
import Script from "next/script";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GlobalStyle } from "src/styles/globals";
import { DEFAULT_SEO } from "src/constants/seo";
import { Suspense } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import NextTopLoader from "nextjs-toploader";
import { Palette } from "~foundation";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const { seoData } = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <NextTopLoader color={Palette["blue-primary"]} showSpinner={false} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      {seoData ? <NextSeo {...seoData} /> : <DefaultSeo {...DEFAULT_SEO} />}
      <StyleSheetManager
        enableVendorPrefixes
        shouldForwardProp={(propName, elementToBeRendered) => {
          return typeof elementToBeRendered === "string"
            ? isPropValid(propName)
            : true;
        }}
      >
        <GlobalStyle />
        <Suspense fallback={<div />}>
          <HydrationBoundary state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </HydrationBoundary>
        </Suspense>
        <SpeedInsights />
      </StyleSheetManager>
      <Analytics mode={"production"} />
    </QueryClientProvider>
  );
}
