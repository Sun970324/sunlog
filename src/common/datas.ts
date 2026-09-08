export type Stat = { before?: string; value: string; label: string };

export const heroStats: Stat[] = [
  { before: '40s', value: '5s', label: '지도 응답 시간' },
  { before: '50MB', value: '5MB', label: 'API 페이로드' },
  { value: '2', label: '출시한 스토어 (iOS · Android)' },
  { value: '4', label: '기획부터 출시까지 만든 서비스' },
];

export type CaseNumber = { before?: string; value: string; label: string };

export type CaseStudy = {
  id: string;
  name: string;
  org: string;
  period: string;
  role: string;
  stacks: string;
  numbers: CaseNumber[];
  summary: string;
  problem: string;
  decision: string;
  result: string;
  images: string[];
  ratio: '16:9' | '9:19.5';
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'sudoku',
    name: '스도쿠 리그',
    org: '개인 프로젝트',
    period: '2026.07 – 진행 중',
    role: '기획·솔버·앱·백엔드·스토어 심사 1인 개발',
    stacks: 'Flutter, Dart, Supabase, PostgreSQL, Edge Functions',
    numbers: [
      { value: '300', label: '출시 1주 가입자' },
      { value: '34위', label: 'App Store 보드 카테고리' },
      { value: '0', label: '수정 누락 재발 (4건 → 0)' },
    ],
    summary:
      '풀이 기법을 배우고 그 실력으로 실시간 랭크 대전을 하는 스도쿠 앱. 마이그레이션 120개·RPC 148개의 백엔드까지 직접 만들어 양대 스토어에 출시했고, 1주 만에 가입자 300명을 넘겼습니다. 개발 진행 상황을 스도쿠 커뮤니티·카페에 공유하며 색상 테마와 기법 설명 방식을 실제 타겟 유저의 의견에 맞춰 바꿨습니다.',
    problem:
      '두 달 만에 앱 코드가 11만 줄로 늘면서, 새 기능보다 이미 만든 것이 조용히 틀어지는 일이 더 잦았습니다. 난이도 솔버와 힌트 엔진의 판정이 어긋나도 어디서도 에러가 나지 않았고(연습 보드 137개 중 4개), 1:1을 복사해 만든 파티 대전에는 수정 4건이 빠져 있었습니다. 앱에서 하는 검사는 REST를 직접 부르면 그대로 통과됩니다.',
    decision:
      '생성한 보드를 두 엔진에 같이 돌려 결과가 다르면 실패하는 대조 테스트, 대전 컨트롤러 3개(1:1·파티·점령전)에 같은 검사를 한 번에 돌리는 공통 테스트를 두었습니다. 중요한 검사는 전부 DB·서버 함수로 옮겨 RLS 테이블 35개·SECURITY DEFINER 135개로 구성하고, 정답·관리자·토큰 테이블은 정책 0개에 권한을 회수했습니다. Apple 영수증은 루트 인증서까지 서버 검증. 동시접속이 적어 랭크 매칭을 피크타임 2회로 모으고, 실력 차가 있어도 뒤집을 수 있는 점령전 모드를 설계했습니다.',
    result:
      '출시 1주 가입자 300명, 2주 평균 DAU 40 우상향, App Store 보드 카테고리 34위. 공통 테스트 이후 한쪽 컨트롤러만 고쳐지는 누락은 재발 0건입니다.',
    images: [
      '/assets/projects/sudoku/sudoku-1.png',
      '/assets/projects/sudoku/sudoku-2.png',
      '/assets/projects/sudoku/sudoku-3.png',
      '/assets/projects/sudoku/sudoku-4.png',
      '/assets/projects/sudoku/sudoku-5.png',
      '/assets/projects/sudoku/sudoku-6.png',
      '/assets/projects/sudoku/sudoku-7.png',
      '/assets/projects/sudoku/sudoku-8.png',
      '/assets/projects/sudoku/sudoku-9.png',
      '/assets/projects/sudoku/sudoku-10.png',
      '/assets/projects/sudoku/sudoku-11.png',
      '/assets/projects/sudoku/sudoku-12.png',
      '/assets/projects/sudoku/sudoku-13.png',
      '/assets/projects/sudoku/sudoku-14.png',
    ],
    ratio: '9:19.5',
  },
  {
    id: 'go2work',
    name: '출근하자',
    org: '(주)드림픽셀',
    period: '2022.10 – 2023.09',
    role: '개발자 1명인 조직에서 프론트엔드·백엔드·배포 담당',
    stacks: 'Next.js, Node.js, GraphQL, React Native, MariaDB, AWS',
    numbers: [
      { before: '40s', value: '5s', label: '지도 응답 시간' },
      { before: '50MB', value: '5MB', label: 'API 페이로드' },
    ],
    summary:
      '위치기반 구인구직 플랫폼. 대표·디자이너와 서비스 방향과 UX/UI 개선안을 논의하고, 구현해서 보여주고 다시 다듬는 방식으로 일했습니다. 입사 당시 40초 걸리던 지도 검색은 진단부터 해결까지 직접 맡았습니다.',
    problem:
      '검색 조건을 바꿀 때마다 마커 전체를 다시 그려 렌더링이 블로킹되고, GraphQL 응답이 평균 50MB였습니다.',
    decision:
      '카카오맵 MarkerClusterer로 클러스터링 전환, 쿼리에서 불필요 필드 약 140줄 제거, 검색 반경 30% 축소. 직무 3단계 트리 자동완성은 서버 호출 없이 클라이언트 메모리 필터링으로 재설계.',
    result:
      '지도 응답 시간이 40초에서 5초로, API 페이로드가 50MB에서 5MB로 줄었습니다. 필터 변경 시 화면 멈춤이 사라졌습니다.',
    images: [
      '/assets/projects/go2work/go2work-1.png',
      '/assets/projects/go2work/go2work-2.png',
      '/assets/projects/go2work/go2work-3.png',
      '/assets/projects/go2work/go2work-4.png',
      '/assets/projects/go2work/go2work-5.png',
      '/assets/projects/go2work/go2work-6.png',
      '/assets/projects/go2work/go2work-7.png',
    ],
    ratio: '16:9',
  },
  {
    id: 'highsleep',
    name: 'HighSleep (Sorilab)',
    org: '올케어디엑스',
    period: '2023.09 – 2024.03',
    role: '개발자 1명인 스타트업에서 앱 개발·양대 스토어 출시 담당',
    stacks: 'Flutter, Dart, Firebase, Node.js',
    numbers: [
      { value: '2', label: '출시한 스토어' },
      { before: '1s', value: '0', label: '반복 재생 끊김' },
    ],
    summary:
      '숙면 유도 사운드 앱. 음악 프로듀서와 앱과 음원을 서로 맞춰 가며 만들었습니다. 음원 끝 3초 공백 같은 요구는 제가, 멜로디·자연음·주파수 3개 음원 동시 재생 같은 요구는 프로듀서가 내는 식이었고, 기획자·디자이너와 함께 Flutter 단일 코드베이스로 iOS·Android를 동시에 출시했습니다.',
    problem:
      '멜로디·자연음·수면주파수 3개 트랙을 각각 재생하니 반복 재생 시 약 1초 음이 끊겼습니다. 앱스토어는 개인정보 정책으로 심사를 반려했습니다.',
    decision:
      '3개 오디오 인스턴스를 단일 ViewModel로 통합 제어. Firebase로 회원·음원·좋아요 NoSQL 설계와 OAuth 2.0. 회원탈퇴와 약관을 인앱으로 구현해 반려 해결.',
    result:
      '반복 재생 시 끊김이 사라졌고, iOS·Android 양대 스토어 심사를 통과해 출시했습니다.',
    images: [
      '/assets/projects/highsleep/highsleep-1.jpg',
      '/assets/projects/highsleep/highsleep-2.jpg',
      '/assets/projects/highsleep/highsleep-3.jpg',
      '/assets/projects/highsleep/highsleep-4.jpg',
      '/assets/projects/highsleep/highsleep-5.jpg',
      '/assets/projects/highsleep/highsleep-6.jpg',
      '/assets/projects/highsleep/highsleep-7.jpg',
    ],
    ratio: '9:19.5',
  },
  {
    id: 'jay',
    name: 'Jay',
    org: '개인 프로젝트',
    period: '2025.10 – 진행 중',
    role: '기획·프론트·백엔드·배포 1인 개발',
    stacks: 'Flutter, Supabase, Riverpod, Claude Code',
    numbers: [{ value: '90%↓', label: '화면 구현 시간 (1시간 → 5~30분)' }],
    summary:
      '질환·지역·나이·소득 조건으로 의료복지 혜택을 찾는 플랫폼. 웹·iOS·Android 동시 대응.',
    problem: '6개 화면과 백엔드를 서버 없이 만들어야 했습니다.',
    decision:
      'Supabase Auth·DB·RLS로 서버 없이 백엔드 구성. Riverpod MVVM으로 뷰와 로직 분리. Google·Kakao OAuth(PKCE). Claude Code를 설계·생성·디버깅 전 주기에 사용하되, 출력은 사용자 흐름 기준으로 검증. 사용자 부담을 줄이려 프로필 사진 기능은 직접 제거 판단.',
    result:
      '화면 하나 구현 시간이 1시간에서 5~30분으로 줄었습니다. 서버 운영 비용 없이 웹·iOS·Android를 동시에 서비스합니다.',
    images: [
      '/assets/projects/jay/jay-1.png',
      '/assets/projects/jay/jay-2.png',
      '/assets/projects/jay/jay-3.png',
      '/assets/projects/jay/jay-4.png',
      '/assets/projects/jay/jay-5.png',
    ],
    ratio: '9:19.5',
  },
];

export type OtherProject = {
  name: string;
  period: string;
  role?: string;
  description: string;
  stacks: string;
};

export const otherProjects: OtherProject[] = [
  {
    name: '모두의 점원',
    period: '2024.10 – 11',
    role: '팀장',
    description:
      'STT·LLM·TTS 음성 주문 키오스크. RAG 적용으로 의도 응답률 35% → 90%, 주문 완료 72초 → 25초',
    stacks: 'Python, LangChain, Whisper, FastAPI, Flutter',
  },
  {
    name: '감정 일기',
    period: '2024.09',
    description:
      'BERT 파인튜닝 감정 분류(정확도 97%) + Flutter 앱, 감정에 따라 테마 컬러 변경',
    stacks: 'TensorFlow, Keras, Flutter, FastAPI, Firebase',
  },
  {
    name: 'Airus 홈페이지',
    period: '2024.09',
    description: '드론 제작사 소개 페이지, 반응형·한/영',
    stacks: 'Next.js, Tailwind CSS, Vercel',
  },
  {
    name: 'No Standing',
    period: '2022.06',
    description: '첫 팀 프로젝트, 맛집 예약 플랫폼 프론트엔드',
    stacks: 'React, Redux, Node.js, MySQL',
  },
];

export const primarySkills: string[] = ['Next.js', 'React', 'Flutter', 'TypeScript'];

export type SkillGroup = { title: string; items: string };

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-End',
    items: 'Next.js, React, Redux, Tailwind CSS, Styled-Components',
  },
  { title: 'App', items: 'Flutter, React Native' },
  {
    title: 'Back-End',
    items: 'Node.js, FastAPI, GraphQL, MySQL, PostgreSQL, Firebase, Supabase, Prisma',
  },
  { title: 'AI / 도구', items: 'Claude Code, TensorFlow·Keras, LangChain·RAG, Whisper' },
  { title: 'DevOps', items: 'Git, AWS, Vercel, Docker, Linux, NCP' },
  { title: 'Language', items: 'TypeScript, JavaScript, Dart, Python' },
];

export type CareerRow = { period: string; org: string; role?: string };

export const careerRows: CareerRow[] = [
  {
    period: '2022.10 – 2023.09',
    org: '(주)드림픽셀',
    role: '풀스택 개발',
  },
  {
    period: '2023.09 – 2024.03',
    org: '올케어디엑스',
    role: '앱 풀스택 개발',
  },
  {
    period: '2024.05 – 2024.11',
    org: 'AIFFEL 온라인 코어과정 8기',
    role: 'NLP·STT·RAG 프로젝트',
  },
  { period: '2021.12 – 2022.06', org: '코드스테이츠 소프트웨어 엔지니어링 38기' },
  { period: '2024.10', org: 'K-Digital Training 해커톤 (고용노동부)', role: '팀장' },
];

export type AiStep = { title: string; body: string };

export const aiIntro =
  'Claude Code를 설계 검토부터 코드 생성, 디버깅, DB 설정까지 전 주기에 씁니다. 그래서 검증 기준이 더 중요합니다. 코드가 깔끔한지가 아니라, 실제 사용자가 이 흐름을 따라갔을 때 의도대로 동작하는지를 봅니다.';

export const aiSteps: AiStep[] = [
  {
    title: '먼저 실행한다',
    body: 'AI가 만든 코드와 쿼리는 읽기 전에 돌려봅니다. 문법이 맞아도 실제 데이터 앞에서는 깨질 수 있기 때문입니다.',
  },
  {
    title: '오류를 원인 단위로 읽는다',
    body: '"에러가 난다"에서 멈추지 않고, 어느 테이블의 어떤 컬럼을 잘못 가정했는지까지 좁힙니다.',
  },
  {
    title: '한 번에 고치도록 지시한다',
    body: '오류 메시지 전체와 원인 경로를 그대로 전달합니다. 수정은 1회 루프로 끝내고, 이 루프를 워크플로우로 고정합니다.',
  },
];

export const aiCase = {
  project: 'Jay',
  problem:
    'AI가 생성한 Supabase 쿼리가 테이블에 없는 컬럼을 참조했습니다. Dart 코드로는 문법이 유효해서 정적 분석과 빌드를 모두 통과했고, 그대로 두면 기능이 동작하지 않는 채 배포될 상황이었습니다.',
  decision:
    'AI는 DB 스키마를 실시간으로 알지 못해 인접 테이블의 패턴을 그대로 가정합니다. 이런 오류는 코드를 읽어서는 잡을 수 없고 실행해야만 드러난다고 판단했습니다.',
  result:
    '코드 생성 직후 실행해 오류를 확인하고, 오류 메시지 전체와 원인 경로를 전달해 1회 수정으로 해결했습니다. 이 루프를 고정한 뒤로 같은 유형의 오류가 배포 단계까지 넘어간 적이 없습니다.',
};

export const aiStats: Stat[] = [
  { value: '70%', label: '화면 하나 구현 시간 단축 (2~3시간 → 30분~1시간)' },
  { value: '80%', label: '오류 탐색 시간 단축 (수 시간 → 10분 이내)' },
];

export const aiJudgement =
  'AI는 요구사항을 구현하는 데 능숙하지만, 무엇을 뺄지는 사람이 정해야 합니다. Jay에서 프로필 수정 기능을 AI에게 맡겨 닉네임과 사진 수정까지 구현했지만, 사용자 흐름을 직접 따라가 보니 프로필 사진이 오히려 부담이 된다고 판단해 기능을 뺐습니다.';
