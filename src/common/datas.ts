export type Stat = { before?: string; value: string; label: string };

export const heroStats: Stat[] = [
  { before: '40s', value: '5s', label: '지도 응답 시간' },
  { before: '50MB', value: '5MB', label: 'API 페이로드' },
  { value: '300', label: '스도쿠 리그 출시 1주 가입자' },
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
  /** 기본으로 보이는 한 줄 요약. 아래 problem/decision/result 전문은 "과정 자세히 보기"로 펼친다. */
  brief: { problem: string; decision: string; result: string };
  problem: string;
  decision: string;
  result: string;
  images: string[];
  ratio: '16:9' | '9:19.5';
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'go2work',
    name: '출근하자',
    org: '(주)드림픽셀',
    period: '2022.10 ~ 2023.08',
    role: '프론트엔드, 백엔드, 배포 전담',
    stacks: 'Next.js, Node.js, GraphQL, React Native, MariaDB, AWS',
    numbers: [
      { before: '40s', value: '5s', label: '지도 응답 시간' },
      { before: '50MB', value: '5MB', label: 'API 페이로드' },
    ],
    brief: {
      problem:
        '검색 조건을 바꿀 때마다 마커 수백 개를 다시 그려 지도가 40초씩 멈췄고, 쓰지 않는 필드까지 내려와 응답이 50MB였습니다.',
      decision:
        '공식 MarkerClusterer가 있는 카카오맵으로 바꾸고, 쿼리에서 불필요한 필드 140줄을 지우고 검색 반경을 30% 줄였습니다.',
      result: '지도 응답이 40초에서 5초로, 페이로드가 50MB에서 5MB로 줄었습니다.',
    },
    summary:
      '위치기반 구인구직 플랫폼입니다. 대표, 디자이너와 서비스 방향과 UX 개선안을 이야기하고 구현해서 보여준 다음 다시 다듬는 식으로 일했습니다. 입사했을 때 지도 검색이 40초 걸렸는데, 원인을 찾는 것부터 고치는 것까지 제가 맡았습니다.',
    problem:
      '검색 조건을 바꿀 때마다 수백 개의 마커를 전부 다시 그려서 그동안 지도가 멈췄습니다. 마커를 찍는 데 쓰지도 않는 기업 이미지와 재무 정보까지 같이 내려오느라 GraphQL 응답이 평균 50MB였습니다.',
    decision:
      '네이버 지도를 카카오맵으로 바꿨습니다. 공식 MarkerClusterer가 있어서 클러스터링을 직접 만들지 않아도 됐기 때문입니다. 쿼리에서는 마커에 필요 없는 필드를 약 140줄 지우고 검색 반경도 30% 줄였습니다. 직무 3단계 트리 자동완성은 서버를 부르지 않고 이미 받아 둔 데이터를 메모리에서 걸러내도록 다시 만들었습니다.',
    result:
      '지도 응답 시간이 40초에서 5초로, API 페이로드가 50MB에서 5MB로 줄었습니다. Chrome DevTools Performance 탭으로 전후를 측정했고 필터를 바꿀 때마다 화면이 멈추던 것도 없어졌습니다.',
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
    id: 'sudoku',
    name: '스도쿠 리그',
    org: '제이위드미 (개인사업자)',
    period: '2026.07 ~ 진행 중',
    role: '기획, 프론트엔드, 백엔드, 스토어 심사, 운영, 마케팅',
    stacks: 'Flutter, Dart, Supabase, PostgreSQL, Edge Functions',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/kr/app/id6794986328' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=jaywithme.sudoku',
      },
    ],
    numbers: [
      { value: '300', label: '출시 1주 가입자' },
      { value: '34위', label: 'App Store 보드 카테고리' },
      { value: '0', label: '수정 누락 재발 (4건에서 0)' },
    ],
    brief: {
      problem:
        '난이도 판정과 힌트 엔진의 판단이 어긋나도 에러가 나지 않아 연습 보드 137개 중 4개가 방치됐고, 1:1에서 고친 문제 4건이 파티 대전에는 반영되지 않았습니다.',
      decision:
        '퍼즐을 만들 때 두 엔진을 같이 돌려 결과가 다르면 실패하는 테스트를 넣고, 점수 검사 같은 핵심 검증은 전부 서버로 옮겼습니다.',
      result: '수정 누락이 4건에서 0으로 줄었고, 출시 1주 가입자 300명, 2주 평균 DAU 40, App Store 보드 카테고리 34위에 올랐습니다.',
    },
    summary:
      '풀이 기법을 배우고 그 실력으로 실시간 랭크 대전을 하는 스도쿠 앱입니다. 마이그레이션 130개, RPC 148개짜리 백엔드까지 직접 만들어 양대 스토어에 올렸고 출시 1주에 가입자 300명을 모았습니다. 만드는 동안 스도쿠 카페에 진행 상황을 계속 올렸는데 색상 테마와 기법 설명 방식은 거기서 받은 의견을 반영했습니다.',
    problem:
      '두 달 만에 화면과 게임 모드가 빠르게 늘면서 새 기능을 만드는 것보다 이미 만든 게 틀어지는 일이 더 잦아졌습니다. 스도쿠 리그에는 보드의 난이도를 매기는 프로그램과, 풀이 중 다음 수를 알려주는 힌트 프로그램이 따로 있습니다. 둘의 판단이 달라도 에러가 나지 않습니다. 그래서 연습 보드 137개 중 4개는 난이도 프로그램이 "이 기법이 필요하다"고 판정했지만 힌트를 따라 풀면 그 기법이 나오기 전에 힌트가 끊기는 상태로 한참 방치됐습니다. 파티 대전은 1:1 대전 코드를 복사해서 만들었는데, 복사한 뒤 1:1에서 고친 문제 4건이 파티에는 그대로 남아 있었습니다. 랭크 대전이라 점수 조작은 막아야 하는데, 앱 화면에서만 검사하면 앱을 거치지 않고 서버에 직접 요청을 보내는 방식으로 그 검사를 건너뛸 수 있었습니다.',
    decision:
      '보드를 만들 때마다 두 프로그램에 같이 돌려서 결과가 다르면 실패하는 테스트를 넣었습니다. 1:1과 파티, 점령전 컨트롤러 세 개는 같은 검사를 한 번에 받도록 묶었습니다. 중요한 검사는 전부 DB와 서버 함수로 옮겨 RLS 테이블 35개, SECURITY DEFINER 함수 135개로 구성했습니다. 정답과 관리자, 토큰 테이블은 정책을 0개로 두고 권한을 회수했습니다. Apple 영수증은 루트 인증서까지 서버에서 검증합니다. 초기 사용자 규모에서는 매칭 대기가 길어지는 쪽이 더 큰 이탈 요인이라고 봤습니다. 동시 접속이 많지 않아 랭크 매칭은 피크타임 두 번으로 모았고 실력 차가 나도 뒤집을 수 있게 점령전 모드를 따로 만들었습니다.',
    result:
      '스도쿠 카페에 진행 상황을 올리며 모은 사용자가 출시 1주에 300명이 됐고 2주 평균 DAU 40으로 우상향해 App Store 보드 카테고리 34위까지 올라갔습니다. 공통 테스트를 넣은 뒤로는 한쪽 컨트롤러만 고쳐지고 다른 쪽이 빠지는 일이 다시 생기지 않았습니다.',
    images: [
      '/assets/projects/sudoku/sudoku-home.png',
      '/assets/projects/sudoku/sudoku-hint.png',
      '/assets/projects/sudoku/sudoku-race.png',
      '/assets/projects/sudoku/sudoku-leaderboard.png',
      '/assets/projects/sudoku/sudoku-replay.png',
      '/assets/projects/sudoku/sudoku-ipad-hint.png',
      '/assets/projects/sudoku/sudoku-ipad-party.png',
    ],
    ratio: '9:19.5',
  },
  {
    id: 'jay',
    name: 'Jay',
    org: '제이위드미 (개인사업자)',
    period: '2025.10 ~ 진행 중',
    role: '기획, 프론트엔드, 백엔드, 배포 1인 개발',
    stacks: 'Flutter, Supabase, Riverpod, Claude Code',
    links: [{ label: 'jaywithme.com', href: 'https://jaywithme.com' }],
    numbers: [{ before: '1시간', value: '5~30분', label: '화면 하나 구현 시간' }],
    brief: {
      problem: '화면 6개와 백엔드를 서버 없이 혼자 만들어야 했습니다.',
      decision:
        'Supabase로 백엔드를 구성하고, 화면 구조와 상태 경계는 직접 정한 뒤 그 안을 채우는 코드는 Claude Code에 맡겼습니다.',
      result:
        '화면 하나 만드는 시간이 1시간에서 5~30분으로 줄었고, 웹과 iOS, Android를 서버 비용 없이 서비스합니다.',
    },
    summary:
      '질환과 지역, 나이, 소득 조건으로 받을 수 있는 의료복지 혜택을 찾아 주는 플랫폼입니다. 가족의 보호자로 지원사업을 직접 찾아다니면서 몰라서 못 받는 지원이 많다는 걸 알게 돼 만들기 시작했습니다. 웹과 iOS, Android를 같이 대응합니다.',
    problem:
      '지원 탐색부터 로그인, 커뮤니티, 마이페이지까지 화면 6개와 백엔드를 혼자, 그것도 서버를 따로 두지 않고 만들어야 했습니다.',
    decision:
      'Supabase의 Auth와 DB, RLS로 서버 없이 백엔드를 구성했습니다. 상태 관리는 Riverpod MVVM으로 뷰와 로직을 분리해 기능을 추가할 때 영향 범위를 좁혔고 로그인은 Google과 Kakao OAuth를 PKCE로 붙였습니다. 설계와 코드 생성, 디버깅은 Claude Code와 같이 했지만 화면 구조와 상태 관리 경계, DB 스키마는 제가 정했습니다. 생성된 코드는 읽기 전에 먼저 실행해 사용자 흐름을 따라가 봤고 프로필 사진 기능을 도로 뺀 것도 그렇게 정했습니다.',
    result:
      '화면 하나 만드는 시간이 1시간에서 5~30분으로 줄었습니다. 서버 운영 비용 없이 웹과 iOS, Android를 동시에 서비스하고 있습니다.',
    images: [
      '/assets/projects/jay/jay-1.png',
      '/assets/projects/jay/jay-2.png',
      '/assets/projects/jay/jay-3.png',
      '/assets/projects/jay/jay-4.png',
      '/assets/projects/jay/jay-5.png',
    ],
    ratio: '9:19.5',
  },
  {
    id: 'highsleep',
    name: 'HighSleep',
    org: '올케어디엑스',
    period: '2023.08 ~ 2023.12',
    role: '앱 풀스택 개발, 양대 스토어 출시',
    stacks: 'Flutter, Dart, Firebase, Node.js',
    numbers: [
      { value: '2', label: '출시한 스토어' },
      { before: '1s', value: '0', label: '반복 재생 끊김' },
    ],
    brief: {
      problem: '반복 재생되는 수면 음악이 처음으로 돌아갈 때 1초쯤 소리가 비어 자는 사람이 깼습니다.',
      decision: '음원을 트랙 세 개로 나누고 ViewModel 하나가 세 트랙을 같이 제어하게 묶었습니다.',
      result: '재생 공백이 없어졌고 iOS와 Android 심사를 모두 통과했습니다.',
    },
    summary:
      '숙면 유도 사운드 앱입니다. 음악 프로듀서와 함께 앱과 음원을 서로 맞춰 가며 만들었습니다. 음원 끝에 3초를 비워 달라는 요구는 제가, 멜로디와 자연음, 주파수를 동시에 재생해 달라는 요구는 프로듀서가 내는 식이었습니다. 기획자, 디자이너와 함께 Flutter 코드베이스 하나로 iOS와 Android를 같이 출시했습니다.',
    problem:
      '수면 음악은 자는 동안 계속 반복 재생되는데, 음원이 끝나고 처음으로 돌아갈 때 1초쯤 소리가 비었습니다. 자다가 갑자기 조용해지면 깨는 경우가 있어서 이 공백을 없애는 게 중요했습니다. App Store는 개인정보 정책 문제로 심사를 반려했습니다.',
    decision:
      '멜로디와 자연음, 수면 주파수를 트랙 세 개로 나눠서 멜로디가 끝나도 자연음은 계속 흐르게 했습니다. 그런데 오디오 인스턴스 세 개가 따로 놀아서 재생과 정지에 딜레이가 생겼습니다. ViewModel 하나가 세 개를 같이 관리하도록 묶었습니다. 회원과 음원, 좋아요 데이터는 Firebase로 설계하고 로그인은 OAuth 2.0으로 붙였습니다. 반려는 회원 탈퇴 기능을 만들고 약관을 앱 안에서 볼 수 있게 해서 해결했습니다.',
    result:
      '반복 재생할 때 끊기는 부분이 없어졌고 트랙마다 음량을 조절해 취향대로 조합할 수 있게 됐습니다. iOS와 Android 심사를 모두 통과해 출시했습니다.',
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
    id: 'sunslog',
    name: "Sun's log",
    org: '개인',
    period: '2022.07 ~ 2026.09',
    role: '설계, 구현, 배포',
    stacks: 'Next.js, React, TypeScript, Tailwind CSS, Vercel',
    numbers: [{ value: '5', label: '문제, 판단, 결과로 다시 쓴 케이스' }],
    brief: {
      problem:
        '프로젝트를 기술 스택과 기능 목록으로 나열해 제가 무엇을 판단했는지 읽는 사람이 알 수 없었습니다.',
      decision: '프로젝트마다 문제, 판단, 결과를 나눠 쓰고 숫자를 앞에 두는 구조로 다시 짰습니다.',
      result: '지금 보고 계신 페이지입니다.',
    },
    summary:
      '지금 보고 계신 사이트입니다. 2022년 React로 만든 첫 버전을 2024년 12월에 Next.js와 TypeScript로 새로 만들었고 2026년 9월에 구조와 디자인을 다시 잡았습니다.',
    problem:
      '처음 버전은 프로젝트를 기술 스택과 기능 목록으로 나열해서 읽는 사람이 제가 무엇을 판단했는지 알 수 없었습니다. 스크린샷을 페이지 안에서 크게 볼 방법도 없었습니다.',
    decision:
      '2022년 CRA와 Redux Toolkit으로 만든 첫 버전을 2024년 12월에 Next.js와 TypeScript, Tailwind CSS로 새로 짰습니다. 프로젝트마다 문제와 판단, 결과를 나눠 쓰고 숫자를 앞에 두었습니다. 스크린샷은 클릭하면 크게 보이고 방향키로 넘기고 Esc로 닫게 했습니다. 다크 모드는 시스템 설정을 따르다가 직접 바꾸면 그 값을 기억합니다.',
    result: '이 페이지가 결과입니다. 코드는 github.com/Sun970324/sunlog에 있습니다.',
    images: [],
    ratio: '16:9',
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
    period: '2024.10 ~ 2024.11',
    role: '팀장 (기술 리드)',
    description:
      '고령층과 시각장애인이 키오스크 대신 말로 주문할 수 있게 만든 시스템입니다. LangChain과 RAG를 붙여 동일 질문 20개 기준 의도대로 답한 비율이 35%에서 90%로 올랐고 주문 완료 시간은 72초에서 25초로 줄었습니다.',
    stacks: 'Python, LangChain, RAG, Whisper (STT), FastAPI, Flutter',
  },
  {
    name: '감정 일기',
    period: '2024.09',
    description:
      '일기를 쓰면 그날의 감정을 색으로 보여주는 앱입니다. BERT를 파인튜닝해 정확도 약 97%로 감정을 분류하고, 결과에 따라 테마 색이 바뀝니다.',
    stacks: 'Keras (BERT), Flutter',
  },
  {
    name: 'Airus 홈페이지',
    period: '2024.09',
    description:
      '드론 제작사 소개 사이트입니다. 반응형으로 만들고 한국어와 영어를 함께 지원합니다.',
    stacks: 'Next.js, Tailwind CSS',
  },
];

export const primarySkills: string[] = ['Next.js', 'React', 'Flutter', 'TypeScript'];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front-End',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  { title: 'App', items: ['Flutter (Riverpod)', 'React Native', 'Dart'] },
  {
    title: 'Back-End',
    items: ['Node.js', 'GraphQL', 'FastAPI', 'Supabase', 'PostgreSQL', 'Firebase'],
  },
  { title: 'DevOps', items: ['AWS (EC2, S3)', 'Vercel', 'Git'] },
  { title: 'AI', items: ['Claude Code', 'LangChain', 'RAG', 'TensorFlow', 'Keras'] },
];

/** work: 재직, 운영, 강사 / project: 개인 프로젝트 / education: 교육, 수료, 해커톤 */
export type CareerRow = {
  period: string;
  org: string;
  role?: string;
  type: 'work' | 'project' | 'education';
};

export const careerRows: CareerRow[] = [
  {
    period: '2026.07 ~ 현재',
    org: '제이위드미 (개인사업자)',
    role: '앱 2개 스토어 등록과 운영, 인앱 결제와 개인정보 처리',
    type: 'work',
  },
  {
    period: '2026.07 ~ 현재',
    org: '스도쿠 리그 (제이위드미)',
    role: '기획, 개발, 운영',
    type: 'project',
  },
  {
    period: '2025.10 ~ 현재',
    org: 'Jay (개인 프로젝트)',
    role: '기획, 개발',
    type: 'project',
  },
  {
    period: '2025.01 ~ 2025.10',
    org: '경기도교육청 방과후학교',
    role: '초등학생 코딩 수업 기획과 진행',
    type: 'work',
  },
  {
    period: '2024.10 ~ 2024.11',
    org: 'K-Digital Training 해커톤 (고용노동부)',
    role: '팀장 (기술 리드)',
    type: 'education',
  },
  {
    period: '2024.05 ~ 2024.11',
    org: 'AIFFEL 온라인 코어과정 8기',
    role: 'NLP, STT, RAG 프로젝트',
    type: 'education',
  },
  {
    period: '2023.08 ~ 2023.12',
    org: '올케어디엑스',
    role: '앱 풀스택 개발',
    type: 'work',
  },
  {
    period: '2022.10 ~ 2023.08',
    org: '(주)드림픽셀',
    role: '풀스택 개발',
    type: 'work',
  },
  {
    period: '2021.12 ~ 2022.06',
    org: '코드스테이츠 소프트웨어 엔지니어링 38기',
    type: 'education',
  },
  {
    period: '2026.08',
    org: '학점은행제 경영학과 학사 학위 취득',
    type: 'education',
  },
  {
    period: '2016.03 ~ 2018.02',
    org: '동서울대학교 세무회계과 전문학사',
    type: 'education',
  },
];

export const aiParagraphs: string[] = [
  'Jay와 스도쿠 리그는 Claude Code와 함께 만들었습니다. 화면 구조와 상태 관리 경계, DB 스키마는 제가 정하고 그 안을 채우는 코드와 에러 추적, DB 세팅에 AI를 씁니다.',
  '그래서 결과물을 어떻게 확인하느냐가 더 중요해졌습니다. 생성된 코드를 읽는 것만으로는 부족했습니다. Jay에서 AI가 써준 Supabase 쿼리가 테이블에 없는 컬럼을 불러온 적이 있는데, Dart 문법으로는 멀쩡해서 분석도 빌드도 그냥 통과했습니다. 앱을 켜서 그 화면에 들어가고 나서야 알았습니다. 오류 메시지 전체와 어디서 난 건지를 그대로 붙여넣어 한 번에 고쳤고 그 뒤로는 생성된 코드를 읽기 전에 일단 실행부터 해서 사용자 흐름을 그대로 따라갑니다.',
  '프로필 수정 기능도 AI에 맡겨서 닉네임과 프로필 사진까지 바꿀 수 있게 만들었습니다. 만들고 나서 가입부터 사용자처럼 따라가 봤는데, 사진을 고르는 단계가 부담스러웠습니다. 그 부분은 다시 뺐습니다.',
];
