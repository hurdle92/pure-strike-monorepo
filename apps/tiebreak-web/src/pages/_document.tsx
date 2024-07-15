import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="google-site-verification"
            content="CCxguLQ6uvaSsl5XaSCtMwPMO4xEILk5PcC3WC75zNU"
          />
          <body>
            <Main />
            <NextScript />
          </body>
          <script
            id="mapScript"
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&autoload=false`}
            async
          />
        </Head>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
