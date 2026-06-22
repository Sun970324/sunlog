# Sun's log

윤선웅의 개인 포트폴리오 사이트입니다. 경력·프로젝트·기술 스택을 소개하고 이메일 문의를 받을 수 있습니다.

🔗 **[sunslog.com](https://www.sunslog.com)**

---

## Features

- **홈** — 타이핑 애니메이션 히어로 섹션
- **프로젝트** — 카드 목록 + 상세 드로어 + 이미지 캐러셀 · 라이트박스
- **기술 스택** — 카테고리별 스킬 뱃지
- **컨택** — EmailJS 연동 이메일 폼 (필수/선택 필드 구분)
- **반응형** — 모바일 다크 테마 / 데스크탑 라이트 테마 이중 디자인

## Tech Stack

| 구분 | 사용 기술 |
|------|-----------|
| Framework | Next.js 13, React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS, Emotion |
| Icons | FontAwesome |
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
├── pages/
│   └── index.tsx          # 메인 페이지
├── components/
│   ├── sections/          # 페이지 섹션 (home, projects, tech-skills, contact, career)
│   └── elements/          # 재사용 컴포넌트 (project-card, carousel, project-drawer 등)
├── common/
│   └── datas.ts           # 프로젝트·스킬 데이터
└── context/
    └── DeviceContext.tsx  # 디바이스 감지 컨텍스트
```
