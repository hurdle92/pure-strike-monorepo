<img src="https://i.imgur.com/X3zXFla.png"/>

# PURE-STRIKE Frontend Monorepo

Pure-Strike Monorepo built with Turborepo, React, Next.js, React-Query, Zustand and so on.

<br/>

# About The Project

### **[🎾 tiebreak-web](https://tiebreak.vercel.app/)**

테니스장 정보앱 타이브레이크의 WEB 버전입니다. <br/>앱의 랜딩 & 메인 페이지 역할을 담당하며 웹에서 보조적인 기능을 제공합니다.
<br/>



<br/>

### 주요기능
- App 랜딩 및 진입 페이지 역할
- 데스크탑, 모바일 반응형 UI 제공
- 코트 검색 기능 (* **추가예정**)
- 코트 상세 페이지 (* **추가예정**)

<br/>

<img width="800" alt="image" src="https://github.com/hurdle92/pure-strike-fe/assets/168696334/304bf989-41f5-4c24-8e0c-f55fcad3081b">





<br/>


# Tech Stacks

- React
- Turborepo
- Next.js
- React-Query
- Zustand
- Styled-Components
- Supabase

<br/>

# Project Structure

<br/>

```
│
├── apps
│     └── tiebreak-web
│           └── src
│                 └── components
│                   └── layout
│                 └── page-modules
│                   └── home
│                       └── components
│                               └── Home
│                           └── core
│                               └── _requests
│                           └── types
│                 └── pages
│                   └── home
│                   └── courts
│                   └── ...
│                 └── stores
│                 └── constants
│                 └── utils
│                 └── styles
│
│     └── another_apps
│
├── packages
│     └── pure-strike-ui
│           └── src
│                 └── components
│                   └── Stack
│                   └── Button
│                   └── Flex
│                   └── Grid
│                   └── Image
│                   └── Stack
│                   └── Text
│                   └── TextField
│                   └── ...
│
│     └── eslint-settings (eslint related settings)
│     └── tsconfig-settings (tsconfig related settings)
│
├── turbo.json
├── env
└── README.md
```

