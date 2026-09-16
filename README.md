# Sun's log

윤선웅의 개인 포트폴리오 사이트입니다. 경력, 프로젝트, 기술 스택을 소개하고 이메일 문의를 받습니다.

🔗 **[sunslog.com](https://www.sunslog.com)**

---

## Features

- **Work** 프로젝트마다 문제, 판단, 결과를 나눠 쓰고 성과 숫자를 앞에 배치
- **스크린샷 확대 보기** 클릭하면 크게 보이고 방향키로 넘기고 Esc로 닫기
- **다크 모드** 시스템 설정을 따르고 직접 바꾸면 그 값을 기억
- **Contact** EmailJS 연동 이메일 폼
- **반응형** 모바일과 데스크톱 한 벌의 코드

## Tech Stack

| 구분 | 사용 기술 |
|------|-----------|
| Framework | Next.js 13 (Pages Router), React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Email | EmailJS |
| Deploy | Vercel |

## Getting Started

```bash
# 1. 의존성 설치
npm install

# 2. 환경변수 설정 (아래 Environment Variables 참고)
cp .env.example .env.local

# 3. 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인할 수 있습니다.

## Environment Variables

`.env.local` 파일을 생성하고 아래 값을 채워주세요.  
값은 [EmailJS 대시보드](https://dashboard.emailjs.com)에서 확인할 수 있습니다.

| 키 | 설명 |
|----|------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS 서비스 ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS 템플릿 ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS 공개 키 |

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── pages/index.tsx         # 메인 페이지
├── components/
│   ├── sections/           # hero, work, ai-workflow, other-projects, skills, career, contact
│   └── elements/           # case-study, screenshot-grid, lightbox, reveal, container 등
├── common/datas.ts         # 프로젝트, 스킬 데이터
└── hooks/use-theme.ts      # 다크 모드 상태
```
