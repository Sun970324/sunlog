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
    id: 'sudoku',
    name: '스도쿠 리그',
    date: '26.07. ~',
    role: '기획 ・ App ・ Backend ・ 출시',
    subtitle: '기법 학습과 실시간 랭크 대전을 갖춘 스도쿠 앱',
    content: [
      '양대 스토어 출시 1주 가입자 300명, 2주 평균 DAU 40 우상향, App Store 보드 카테고리 34위',
      '41개 기법 난이도 솔버와 힌트 엔진의 판정이 어긋나는 보드를 실제 생성으로 잡아내는 대조 테스트',
      '대전 컨트롤러 3개(1:1·파티·점령전)에 같은 검사를 돌리는 공통 테스트 → 한쪽만 고쳐지는 누락(4건) 재발 0',
      'Apple 영수증 루트 인증서까지 서버 검증, 거래 1건당 계정 1개 제약, 환불 알림 수신 시 권리 회수',
      'RLS 테이블 35개·SECURITY DEFINER 135개, 정답·관리자·토큰 테이블은 정책 0개에 권한 회수',
      '탈퇴 후 7일 재가입 차단(해시만 보관), 닉네임 금칙어·신고 중복·매칭 큐 직접 삽입은 서버에서 차단',
      '점령전 출시: 정답은 서버만 갖고 칸마다 판정, 오답 시 팟을 리셋하면 고의 오답이 이득이라 리셋 없음',
    ],
    stacks: 'Flutter, Dart, Supabase, PostgreSQL, Edge Functions',
    images: [
      'sudoku/sudoku-1.png',
      'sudoku/sudoku-2.png',
      'sudoku/sudoku-3.png',
      'sudoku/sudoku-4.png',
      'sudoku/sudoku-5.png',
      'sudoku/sudoku-6.png',
      'sudoku/sudoku-7.png',
      'sudoku/sudoku-8.png',
      'sudoku/sudoku-9.png',
      'sudoku/sudoku-10.png',
      'sudoku/sudoku-11.png',
      'sudoku/sudoku-12.png',
      'sudoku/sudoku-13.png',
      'sudoku/sudoku-14.png',
    ],
    meaning: [
      '스도쿠 리그는 풀이 기법을 배우고 그 실력으로 실시간 랭크 대전을 하는 스도쿠 앱입니다. 기획, 솔버, 백엔드(마이그레이션 120개, RPC 148개), 스토어 심사까지 혼자 진행했고 출시 1주 만에 가입자 300명을 넘겼습니다.',
      '두 달 동안 앱 코드가 11만 줄까지 늘었습니다. 이 속도로 기능이 붙으면 새로 만드는 것보다 이미 만든 게 조용히 틀어지는 걸 잡는 데 시간이 더 들어서 그쪽에 테스트를 집중했습니다. 퍼즐 난이도를 매기는 솔버와 플레이어에게 힌트를 주는 엔진이 따로 있는데, 둘이 어긋나면 난이도 기준으로는 특정 기법이 필요한 퍼즐인데 힌트를 따라가면 그 기법이 한 번도 안 나오는 상황이 생기고 어디서도 에러가 나지 않습니다. 실제로 연습 보드 137개 중 4개가 그랬습니다. 그래서 생성한 보드를 두 엔진에 같이 돌려 결과가 다르면 실패하는 테스트를 두었습니다. 대전 컨트롤러는 1:1, 파티, 점령전 세 개인데 파티가 1:1을 복사해 만들어진 탓에 1:1에만 들어간 수정 4건이 파티에 빠진 적이 있었습니다. 그 뒤로 세 컨트롤러에 같은 검사를 한 번에 돌리는 테스트를 붙여서 한쪽만 고치면 바로 걸리게 했습니다. 디버그 빌드로 운영 DB에 테스트 데이터를 남긴 적도 있어서, 어느 서버에 붙을지를 실행 옵션이 아니라 빌드 모드가 정하게 바꾸고 화면 구석에 현재 서버를 표시했습니다.',
      '앱에서 하는 검사는 REST API를 직접 부르면 그대로 지나가기 때문에 중요한 검사는 전부 DB와 서버 함수 쪽에 두었습니다. 대전 정답, 관리자 목록, Apple 토큰처럼 앱이 읽을 이유가 없는 테이블은 접근 정책을 하나도 만들지 않고 권한도 회수해서 서버 함수로만 접근하게 했습니다. 이걸 정리하다가 Supabase가 새 테이블에 기본 권한을 자동으로 붙인다는 걸 알게 됐는데, 정책이 없어서 당장 새지는 않았지만 누가 정책 하나만 추가하면 정답 보드가 통째로 열리는 상태였습니다. 그 뒤로는 테이블, 함수, PUBLIC 세 군데 권한을 같이 회수하는 걸 규칙으로 정해두었습니다. 탈퇴 후 7일 재가입 제한은 auth 테이블 트리거로 걸어두었는데, 게스트 계정에 이메일을 연동하면 통과된다는 제보를 받고 이메일 연동 경로에도 같은 검사를 붙였습니다. 신고 테이블은 쓰기만 되게 해서 상대가 이미 신고됐는지 알 수 없게 했고, 문의 횟수 제한은 정확한 숫자를 앱에 알려주지 않았습니다. 한도를 알려주면 계정을 몇 개 만들면 되는지 알려주는 것과 같기 때문입니다.',
      '초기에는 동시접속이 적어서 랭크 매칭을 하루 두 번 피크타임(08시·21시)에만 열어 적은 인원을 한 시간대로 모았습니다. 매칭이 돼도 속도전은 각자 같은 보드를 따로 푸는 것이라 상대가 있다는 감각이 없고, 실력 차가 나면 결과가 초반에 정해집니다. 그래서 한 보드를 나눠 채우는 점령전을 만들었습니다. 먼저 채운 칸은 뺏을 수 없고, 쉬운 칸이 많을 때는 점수가 낮다가 둘 다 막히는 구간에서 점수가 올라가는 방식이라 실력 차가 있어도 뒤집을 여지가 남습니다. 오답에 팟을 리셋하면 일부러 틀려 상대 팟을 없애는 게 이득이 되므로 리셋하지 않는 규칙으로 정했습니다.',
    ],
  },
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
      { name: 'Supabase', color: '#3ECF8E', isWhite: false },
      { name: 'PostgreSQL', color: '#336791', isWhite: true },
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
