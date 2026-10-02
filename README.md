# Sun's log

윤선웅의 개인 포트폴리오 사이트입니다. 프로젝트, 경력, 기술 스택을 소개합니다.

🔗 **[sunslog.com](https://www.sunslog.com)**

---

## Features

- **Work** 프로젝트 로고를 누르면 아래 패널이 그 프로젝트로 바뀌고, 문제, 판단, 결과를 세 줄로 보여 줌. 키보드 ←/→로도 이동
- **프로젝트 상세** `/work/[id]` 페이지마다 배경, 문제, 판단, 결과, 개선 전후 구조도, 스크린샷을 담음. 스크롤하면 헤더에 프로젝트 썸네일과 이름이 나타남
- **갤러리** 스크린샷을 원래 비율 그대로 열에 나눠 쌓고, 비율이 다른 화면(관리자 웹, 모바일 앱, iPad)은 따로 묶음. 클릭하면 확대 보기, 방향키로 넘기고 Esc로 닫기
- **프로젝트별 포인트 색** 숫자, 구조도, 링크가 프로젝트 색을 따름. 라이트, 다크 모드마다 명도를 따로 맞춤
- **다크 모드** 시스템 설정을 따르고 직접 바꾸면 그 값을 기억
- **반응형** 모바일과 데스크톱 한 벌의 코드

## Tech Stack

| 구분 | 사용 기술 |
|------|-----------|
| Framework | Next.js 13 (Pages Router, SSG), React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deploy | Vercel |

## Getting Started

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## Project Structure

```
src/
├── pages/
│   ├── index.tsx           # 메인: 히어로, Work, 연혁과 스킬
│   └── work/[id].tsx       # 프로젝트 상세 (빌드 때 정적 생성)
├── components/
│   ├── top-bar.tsx         # 로고, 상세 페이지에서 프로젝트 표시
│   ├── sections/           # hero, work, career, skills
│   └── elements/           # project-icon, screenshot-grid, lightbox, diagrams, metric-bars 등
├── common/
│   ├── datas.ts            # 프로젝트, 연혁, 스킬 데이터
│   └── selected-case.ts    # 메인에서 고른 프로젝트 기억 (sessionStorage)
├── styles/globals.css      # 색 토큰, 프로젝트별 포인트 색
└── hooks/use-theme.ts      # 다크 모드 상태
```

프로젝트를 추가하거나 고칠 때는 `src/common/datas.ts`의 `caseStudies`만 수정하면 메인 선반과 상세 페이지가 함께 바뀝니다. 포인트 색은 `globals.css`의 `.case-{id}`에 라이트, 다크 값을 넣습니다.
