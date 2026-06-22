export type CareerData = {
  id: string;
  company: string;
  name: string;
  date: string;
  role: string;
  subtitle: string;
  content: string[];
  stacks: string;
  images?: string[];
};

export const careerData: CareerData[] = [
  {
    id: 'go2work',
    company: '(주)드림픽셀',
    name: '출근하자',
    date: '22.10. ~ 23.09.',
    role: 'Frontend ・ Backend ・ App ・ Deploy',
    subtitle: '위치기반 구인구직 플랫폼',
    content: [
      '카카오맵 MarkerClusterer 기반 클러스터링 전환 → 지도 응답 40초 → 5초 이내 (약 90%↓)',
      '지도 검색 GraphQL 쿼리 불필요 필드 제거 및 검색 반경 30% 축소 → 응답 페이로드 50MB → 5MB',
      '직무 3단계 트리 클라이언트 메모리 필터링 자동완성(SuggestBox) 재설계 → 서버 호출 없이 즉시 응답',
      '사내 유일 개발자로 프론트엔드·백엔드·배포 전 영역 단독 담당',
    ],
    stacks: 'Next.js, Node.js, GraphQL, React Native, MariaDB, AWS',
    images: [
      'go2work/go2work-1.png',
      'go2work/go2work-2.png',
      'go2work/go2work-3.png',
      'go2work/go2work-4.png',
      'go2work/go2work-5.png',
      'go2work/go2work-6.png',
      'go2work/go2work-7.png',
    ],
  },
  {
    id: 'highsleep',
    company: '올케어디엑스',
    name: 'HighSleep',
    date: '23.09. ~ 24.03.',
    role: 'App ・ Backend ・ Deploy',
    subtitle: '숙면유도 헬스케어 앱',
    content: [
      '멜로디·자연음·수면주파수 3개 트랙 개별 인스턴스를 단일 ViewModel로 통합 제어 → 반복 재생 시 음 끊김 제거',
      'Firebase 기반 회원·음원·좋아요 NoSQL 설계 및 OAuth 2.0 구현',
      '앱스토어 개인정보 정책 반려 건 회원탈퇴·약관 인앱 구현으로 해결, 양대 스토어 등록 완료',
      '스타트업 유일 개발자로 기획~iOS·Android 동시 출시 단독 완수',
    ],
    stacks: 'Dart, Flutter, Firebase, Node.js',
    images: [
      'highsleep/highsleep-1.jpg',
      'highsleep/highsleep-2.jpg',
      'highsleep/highsleep-3.jpg',
      'highsleep/highsleep-4.jpg',
      'highsleep/highsleep-5.jpg',
      'highsleep/highsleep-6.jpg',
      'highsleep/highsleep-7.jpg',
    ],
  },
];

export type SkillData = {
  title: string;
  stacks: { name: string; color: string; isWhite: boolean }[];
};

export type ProjectData = {
  id: string;
  name: string;
  date: string;
  role?: string;
  subtitle: string;
  content: string[];
  stacks: string;
  images: string[];
  video?: string;
  meaning: string[];
};

export const projectData: ProjectData[] = [
  {
    id: 'jay',
    name: 'Jay',
    date: '25.10. ~',
    role: 'Web ・ App ・ Backend',
    subtitle: '사용자 맞춤형 의료복지 정보 플랫폼',
    content: [
      'Flutter 단일 코드베이스로 웹/iOS/Android 동시 대응',
      '의료 복지 혜택 프로그램을 질환, 지역, 나이, 소득 등 다양한 조건으로 검색 및 필터링하는 기능 개발',
      'Riverpod(MVVM) 뷰-로직 분리로 기능 추가 시 영향 범위 최소화',
      '게시글, 댓글, 좋아요 기능이 포함된 커뮤니티 기능 개발',
      'Google, Kakao 소셜 로그인(OAuth PKCE) 구현',
      'Supabase(Auth·DB·RLS) 활용 별도 서버 없이 백엔드 구축',
      'Claude Code를 설계·코드 생성·디버깅 전 주기에 활용, 화면 구현 시간 약 90% 단축',
    ],
    stacks: 'Flutter, Supabase, Riverpod, Claude Code',
    images: ['jay/jay-1.png', 'jay/jay-2.png', 'jay/jay-3.png', 'jay/jay-4.png', 'jay/jay-5.png'],
    meaning: [
      'Jay는 복잡하게 흩어져 있는 의료 복지 혜택 정보를 한 곳에서 쉽게 찾고, 같은 경험을 가진 사람들과 정보를 나눌 수 있는 커뮤니티 플랫폼입니다.',
      'Riverpod의 MVVM 패턴으로 뷰와 로직을 분리하여 기능 추가 시 영향 범위를 최소화했으며, Supabase의 RLS를 통해 별도 서버 없이 사용자별 데이터 접근 권한을 관리했습니다.',
      'Claude Code를 설계·생성·디버깅 전 주기에 활용하여 화면 구현 시간을 약 90% 단축했습니다. 기획부터 웹·앱·백엔드까지 전 과정을 1인으로 담당하며 서비스를 처음부터 구현하는 경험을 쌓을 수 있었습니다.',
    ],
  },
  {
    id: 'modu',
    name: '모두의 점원 - 팀 프로젝트',
    date: '24.10. - 24.11.',
    role: 'PM ・ STT ・ App',
    subtitle: 'AI 음성 주문 시스템',
    content: [
      '고령층, 시각 장애인 등 디지털 취약계층의 키오스크 사용 불편감을 해소하기 위한 아이디어로 개발',
      'STT, LLM, TTS 모델을 활용하여 음성으로 대화하며 사용자가 주문을 할 수 있는 시스템',
      'Whisper STT에 잡음 제거(VAD) 적용으로 인식 정확도 개선',
      'LangChain + RAG 적용으로 LLM 의도 응답률 35% → 90% 향상',
      '모듈화 구조 설계로 주문 완료 시간 72초 → 25초 단축',
      'AI 생성 쿼리 스키마 불일치 배포 전 탐지·수정 검증 루프 구축',
    ],
    stacks: 'Python, LangChain, RAG, Whisper(STT), FastAPI, Flutter',
    images: ['modu/modu-1.jpg', 'modu/modu-2.jpg', 'modu/modu-3.png', 'modu/modu-4.png'],
    meaning: [
      'AI를 같이 공부한 팀원들과 함께 AI KDT 해커톤 대회를 위해 준비한 프로젝트입니다.\n고령층, 시각 장애인 등 디지털 취약계층이 늘어나고 있는 키오스크를 사용하기 어렵다는 기사와 통계를 확인하여 이들의 불편함을 AI 기술로 해결하기 위해 STT, LLM을 이용한 음성주문시스템을 만들었습니다.',
      'STT는 Whisper AI에 잡음 제거(VAD) 알고리즘을 추가해 인식 정확도를 높였습니다. LLM은 Claude 모델에 LangChain + RAG를 적용하여 의도 응답률을 35%에서 90%로 향상시켰습니다.',
      '팀장으로서 STT 파이프라인 개발과 일정·역할·문서 총괄을 담당하며, AI 서비스 개발의 기술적 성장과 더불어 팀 리딩 역량을 키울 수 있었습니다.',
    ],
  },
  {
    id: 'diary',
    name: '감정 일기 - 팀 프로젝트',
    date: '24.09.',
    role: 'Machine learning ・ App',
    subtitle: '일기기반 감정 진단 앱',
    content: [
      '문장-감정 데이터를 전처리, 가공 후 감정 분류 NLP 모델을 개발',
      '최신 감정에 따라서 앱의 테마 컬러를 다르게 적용',
      '유저 별 일기 데이터를 Firebase DB에서 관리',
    ],
    stacks: 'Tensorflow, Keras, Pandas, Flutter, FastAPI, Firebase',
    images: ['diary/diary-1.png', 'diary/diary-2.png', 'diary/diary-3.png'],
    meaning: [
      '감정 일기는 사용자의 일기에서 감정을 분석하는 AI 어플리케이션입니다. 데이터셋을 구하고 전처리하는 것부터 NLP 모델 학습, Flutter앱 개발까지 진행하면서 AI 서비스 제작의 전체적인 흐름을 경험한 프로젝트입니다.',
      'NLP는 BERT모델을 기본으로 하이퍼 파라미터 조정과 데이터 증강 기법으로 파인튜닝하여 성능을 개선시켰습니다.',
    ],
  },
  {
    id: 'airus',
    name: 'Airus 홈페이지 - AIRUS',
    date: '24.09.',
    subtitle: '무프로펠러 드론 제작 업체인 Airus의 소개 페이지',
    role: 'Frontend ・ Deploy',
    content: [
      '데스크탑, 모바일 버전으로 반응형 개발',
      '한국어 ・ 영어 버전 설정 기능 구현',
      'Vercel을 이용하여 유지비 없이 배포',
    ],
    stacks: 'Next.js, Vercel, TailwindCSS',
    images: [
      'airus/airus-1.png',
      'airus/airus-2.png',
      'airus/airus-3.png',
      'airus/airus-4.png',
      'airus/airus-5.png',
      'airus/airus-6.png',
      'airus/airus-7.png',
      'airus/airus-8.png',
      'airus/airus-9.png',
      'airus/airus-10.png',
    ],
    meaning: [
      '지인이 창업한 회사의 소개 페이지를 만들어달라는 의뢰를 받아 제작한 프로젝트입니다.',
      '회사 소개 페이지인 만큼 영어와 한국어를 지원하며, 반응형 개발로 모바일 화면 최적화를 했습니다.',
    ],
  },
  {
    id: 'nostanding',
    name: 'No Standing - 팀 프로젝트',
    date: '22.06.',
    role: 'Frontend',
    subtitle: '내 주변 맛집 예약 플랫폼',
    content: [
      '최초 웹 개발 프로젝트(React, CSS, JS, Node.js)',
      'Git을 사용하여 버전관리 및 협업',
      '무한 캐러셀 구현',
      'React Redux를 활용하여 전역 상태 관리',
    ],
    stacks: 'React, Node.js, MySQL, Sequelize, AWS',
    images: [
      'nostanding/nostanding-1.jpeg',
      'nostanding/nostanding-2.png',
      'nostanding/nostanding-3.png',
      'nostanding/nostanding-4.png',
      'nostanding/nostanding-5.png',
      'nostanding/nostanding-6.png',
    ],
    meaning: [
      '개발을 같이 공부하던 팀원들과 만든 첫 개발 프로젝트입니다. 음식점에 갈 때 줄을 서지않고 예약할 수 있도록 만든 서비스입니다.',
      '프론트엔트를 주로 담당하였으나 백엔드 팀원들과 활발히 소통하며 F-B 데이터 흐름을 팀 내에서 총괄하여 맡아 API 개발 방식과 프론트엔드에서 데이터를 받아 처리하는 과정에 대해 배울 수 있었습니다.',
    ],
  },
];
export const skillData: SkillData[] = [
  {
    title: 'Language',
    stacks: [
      { name: 'TypeScript', color: '#007ACC', isWhite: true },
      { name: 'JavaScript', color: '#F0DB4E', isWhite: false },
      { name: 'Dart', color: '#2DB7F6', isWhite: true },
      { name: 'Python', color: '#FFD846', isWhite: false },
    ],
  },
  {
    title: 'Frontend',
    stacks: [
      { name: 'React', color: '#61DAFB', isWhite: false },
      { name: 'React-Redux', color: '#764ABC', isWhite: true },
      { name: 'Next.js', color: '#000000', isWhite: true },
      { name: 'Tailwind CSS', color: '#0DA5E9', isWhite: true },
      { name: 'Styled-Components', color: '#F1AF9C', isWhite: true },
    ],
  },
  {
    title: 'Backend',
    stacks: [
      { name: 'Node.js', color: '#54A145', isWhite: true },
      { name: 'FastAPI', color: '#019485', isWhite: true },
      { name: 'MySQL', color: '#F29221', isWhite: true },
      { name: 'GraphQL', color: '#F6009B', isWhite: true },
      { name: 'Firebase', color: '#FF9100', isWhite: true },
      { name: 'Prisma', color: '#01354D', isWhite: true },
    ],
  },
  {
    title: 'DevOps',
    stacks: [
      { name: 'Linux', color: '#FFDF33', isWhite: false },
      { name: 'AWS', color: '#FF9C16', isWhite: true },
      { name: 'NCP', color: '#02C75B', isWhite: true },
      { name: 'Git', color: '#F54D26', isWhite: true },
      { name: 'Vercel', color: '#000000', isWhite: true },
      { name: 'Docker', color: '#1D63ED', isWhite: true },
    ],
  },
  {
    title: 'Application',
    stacks: [
      { name: 'Flutter', color: '#64CBF8', isWhite: false },
      { name: 'React Native', color: '#58C4DC', isWhite: true },
    ],
  },
  {
    title: 'AI',
    stacks: [
      { name: 'Tensorflow', color: '#FF8301', isWhite: true },
      { name: 'Keras', color: '#D00600', isWhite: true },
      { name: 'Hugging Face', color: '#FFD21E', isWhite: false },
      { name: 'Langchain', color: '#1E3E40', isWhite: true },
    ],
  },
];
