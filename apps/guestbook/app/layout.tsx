import type { Metadata } from "next";
import { Suspense } from "react";
import Provider from "src/provider";

export const metadata: Metadata = {
  title: "",
  description: "",
  openGraph: {
    title: "",
    description: "",
    url: "",
    images: "",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang={"en"}>
      <body>
        <Provider>
          <Suspense fallback={null}>{children}</Suspense>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
