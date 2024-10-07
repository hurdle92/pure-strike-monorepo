// NOTE : 기본적인 SEO
export const DEFAULT_SEO = {
  title: "타이브레이크 | 테니스 다이어리 앱",
  description: "내 손안의 테니스 다이어리",
  keyword:
    "타이브레이크, 테니스, 테니스장, 테니스 매칭, 테니스 레슨, 테니스 커뮤니티",
  canonical: "https://tiebreak.vercel.app",
  openGraph: {
    type: "website",
    url: "https://tiebreak.vercel.app",
    title: "타이브레이크",
    description: "내 손안의 테니스 다이어리",
    article: {
      authors: [
        "타이브레이크, 테니스, 테니스 다이어리, 테니스장, 테니스 매칭, 테니스 레슨, 테니스 커뮤니티",
      ],
    },
    images: [
      {
        url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlLKv6%2FbtsEmpUGfJo%2FhnBCAbbEGXBhHb5bf5xvJK%2Fimg.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
};
