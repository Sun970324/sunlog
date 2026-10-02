export type CaseNumber = { before?: string; value: string; label: string };

export type CaseStudy = {
  id: string;
  name: string;
  /** 선반 아이콘 아래에 보이는 연도. */
  year: string;
  /** 이 케이스가 해결한 문제 상황을 평서문 한 문장으로. */
  problemTitle: string;
  org: string;
  period: string;
  /** 짧은 역할 표기. 패널과 상세 머리에 "소속, 기간 · 역할"로 보인다. */
  role: string;
  /** 대표 스택 2~3개. */
  stack: string[];
  numbers: CaseNumber[];
  /** 메인 패널에 보일 대표 숫자의 numbers 인덱스. */
  highlight: number;
  /** 메인 패널의 문제, 판단, 결과 3줄. */
  brief: { problem: string; decision: string; result: string };
  /** 상세 페이지 배경 문단. */
  summary: string;
  problem: string;
  decision: string;
  result: string;
  images: string[];
  /** 기본 화면과 비율이 다른 화면 묶음(관리자 웹, 모바일 앱, 태블릿 등). 상세 페이지에서 기본 갤러리 아래에 제목을 달고 따로 보여 준다.
   *  wide가 true면 가로로 넓은 화면이라 2열로 크게, false면 세로 화면이라 여러 열로 보여 준다. */
  extraGallery?: { title: string; images: string[]; wide: boolean };
  /** 웹 화면(가로)이면 true, 앱 화면(세로)이면 false. */
  wide: boolean;
  links?: { label: string; href: string }[];
  logo: string;
  /** 로고 타일 바탕. 로고 이미지의 바탕색과 같게 맞춘다. 브랜드 색이라 두 테마에서 같다. */
  tile: string;
  /** 패널 위 색 띠. */
  band: string;
  /** 로고가 바탕까지 포함한 앱 아이콘이면 true(타일을 꽉 채움), 글자 로고면 false. */
  iconFull: boolean;
};

// HighSleep 브랜드 배경(피그마 선형 그라디언트 스톱 그대로).
const HIGHSLEEP_STOPS = '#99AAFF 0%, #8C9FFD 19%, #5244C0 45%, #251C66 74%, #000000 100%';

export const caseStudies: CaseStudy[] = [
  {
    id: 'go2work',
    name: '출근하자',
    year: '2022 ~ 2023',
    problemTitle: '검색 조건을 바꿀 때마다 지도가 40초씩 멈췄습니다.',
    org: '(주)드림픽셀',
    period: '2022.10 ~ 2023.08',
    role: '프론트엔드, 백엔드, 배포 전담',
    stack: ['Next.js', 'GraphQL', 'Node.js'],
    numbers: [
      { before: '40s', value: '5s', label: '지도 응답 시간' },
      { before: '50MB', value: '5MB', label: 'API 페이로드' },
    ],
    highlight: 0,
    brief: {
      problem:
        '검색 조건을 바꿀 때마다 마커 수백 개를 다시 그려 지도가 40초씩 멈췄고, 쓰지 않는 필드까지 내려와 응답이 50MB였습니다.',
      decision:
        '공식 MarkerClusterer가 있는 카카오맵으로 바꾸고, 쿼리에서 불필요한 필드 140줄을 지우고 검색 반경을 30% 줄였습니다.',
      result: '지도 응답이 40초에서 5초로, 페이로드가 50MB에서 5MB로 줄었습니다.',
    },
    summary:
      '위치기반 구인구직 플랫폼입니다. 경력 없는 신입으로 입사했는데 회사에 개발자가 없어 운영 중이던 웹과 앱을 그대로 인수받았고, 처음 접한 GraphQL과 Apollo, Prisma를 공부해 3주 만에 수정 작업을 시작했습니다. 대표, 디자이너와 서비스 방향과 UX 개선안을 이야기하고 구현해서 보여준 다음 다시 다듬는 식으로 일했습니다. 입사했을 때 지도 검색이 40초 걸렸는데, 원인을 찾는 것부터 고치는 것까지 제가 맡았습니다.',
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
    ],
    extraGallery: {
      title: '모바일 앱',
      images: [
        '/assets/projects/go2work/go2work-5.png',
        '/assets/projects/go2work/go2work-6.png',
        '/assets/projects/go2work/go2work-7.png',
      ],
      wide: false,
    },
    wide: true,
    logo: '/assets/projects/go2work/go2work-logo.png',
    tile: '#0e2bb9',
    band: '#0e2bb9',
    iconFull: true,
  },
  {
    id: 'sudoku',
    name: '스도쿠 리그',
    year: '2026',
    problemTitle: '1:1 대전에서 고친 버그 4건이 파티 대전에는 그대로 남아 있었습니다.',
    org: '제이위드미 (개인사업자)',
    period: '2026.07 ~ 진행 중',
    role: '기획, 개발, 스토어 심사, 운영',
    stack: ['Flutter', 'Supabase', 'PostgreSQL'],
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/kr/app/id6794986328' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=jaywithme.sudoku',
      },
    ],
    numbers: [
      { value: '1개월', label: '개발 시작부터 양대 스토어 출시' },
      { value: '600', label: '출시 1달 가입자' },
      { value: '1000', label: '출시 1달 다운로드' },
      { value: '34위', label: 'App Store 보드 게임 순위' },
      { value: '0', label: '수정 누락 재발 (4건에서 0)' },
    ],
    highlight: 1,
    brief: {
      problem:
        '난이도 판정과 힌트 엔진의 판단이 어긋나도 에러가 나지 않아 연습 보드 137개 중 4개가 방치됐고, 1:1에서 고친 문제 4건이 파티 대전에는 반영되지 않았습니다.',
      decision:
        '퍼즐을 만들 때 두 엔진을 같이 돌려 결과가 다르면 실패하는 테스트를 넣고, 점수 검사 같은 핵심 검증은 전부 서버로 옮겼습니다.',
      result:
        '수정 누락이 4건에서 0으로 줄었고, 개발 시작 1개월 만에 양대 스토어에 출시해 출시 1달 가입자 600명과 다운로드 1,000회, DAU 80, App Store 보드 게임 순위 34위를 기록했습니다.',
    },
    summary:
      '풀이 기법을 배우고 그 실력으로 실시간 랭크 대전을 하는 스도쿠 앱입니다. 마이그레이션 130개, RPC 148개짜리 백엔드까지 직접 만들어 개발 시작 1개월 만에 양대 스토어에 올렸고 출시 한 달에 가입자 600명과 다운로드 1,000회를 기록했습니다. 만드는 동안 스도쿠 카페에 진행 상황을 계속 올렸는데 색상 테마와 기법 설명 방식은 거기서 받은 의견을 반영했습니다.',
    problem:
      '두 달 만에 화면과 게임 모드가 빠르게 늘면서 새 기능을 만드는 것보다 이미 만든 게 틀어지는 일이 더 잦아졌습니다. 스도쿠 리그에는 보드의 난이도를 매기는 프로그램과, 풀이 중 다음 수를 알려주는 힌트 프로그램이 따로 있습니다. 둘의 판단이 달라도 에러가 나지 않습니다. 그래서 연습 보드 137개 중 4개는 난이도 프로그램이 "이 기법이 필요하다"고 판정했지만 힌트를 따라 풀면 그 기법이 나오기 전에 힌트가 끊기는 상태로 한참 방치됐습니다. 파티 대전은 1:1 대전 코드를 복사해서 만들었는데, 복사한 뒤 1:1에서 고친 문제 4건이 파티에는 그대로 남아 있었습니다. 랭크 대전이라 점수 조작은 막아야 하는데, 앱 화면에서만 검사하면 앱을 거치지 않고 서버에 직접 요청을 보내는 방식으로 그 검사를 건너뛸 수 있었습니다.',
    decision:
      '보드를 만들 때마다 두 프로그램에 같이 돌려서 결과가 다르면 실패하는 테스트를 넣었습니다. 1:1과 파티, 점령전 컨트롤러 세 개는 같은 검사를 한 번에 받도록 묶었습니다. 중요한 검사는 전부 DB와 서버 함수로 옮겨 RLS 테이블 35개, SECURITY DEFINER 함수 135개로 구성했습니다. 정답과 관리자, 토큰 테이블은 정책을 0개로 두고 권한을 회수했습니다. Apple 영수증은 루트 인증서까지 서버에서 검증합니다. 초기 사용자 규모에서는 매칭 대기가 길어지는 쪽이 더 큰 이탈 요인이라고 봤습니다. 동시 접속이 많지 않아 랭크 매칭은 피크타임 두 번으로 모았고 실력 차가 나도 뒤집을 수 있게 점령전 모드를 따로 만들었습니다.',
    result:
      '개발을 시작한 지 1개월 만에 App Store와 Google Play에 올렸습니다. 스도쿠 카페에 진행 상황을 올리며 모은 사용자가 출시 1주에 300명, 한 달에 600명이 됐습니다. 다운로드 1,000회를 달성했고 DAU 80으로 우상향해 App Store 보드 게임 순위 34위까지 올라갔습니다. 공통 테스트를 넣은 뒤로는 한쪽 컨트롤러만 고쳐지고 다른 쪽이 빠지는 일이 다시 생기지 않았습니다.',
    images: [
      '/assets/projects/sudoku/sudoku-home.png',
      '/assets/projects/sudoku/sudoku-hint.png',
      '/assets/projects/sudoku/sudoku-race.png',
      '/assets/projects/sudoku/sudoku-leaderboard.png',
      '/assets/projects/sudoku/sudoku-replay.png',
    ],
    extraGallery: {
      title: 'iPad',
      images: [
        '/assets/projects/sudoku/sudoku-ipad-hint.png',
        '/assets/projects/sudoku/sudoku-ipad-party.png',
      ],
      wide: true,
    },
    wide: false,
    logo: '/assets/projects/sudoku/sudoku-logo.png',
    tile: '#021e4e',
    band: '#f2c14e',
    iconFull: true,
  },
  {
    id: 'kkulkkuk',
    name: '꿀꺽',
    year: '2026',
    problemTitle: '화면 조작을 최대한 줄였는데도 고령 환자분들은 앱에 적응하는 데 오래 걸렸습니다.',
    org: '창업 팀 프로젝트 (2인)',
    period: '2026.04 ~ 진행 중',
    role: '개발 전체 (앱, 통화 파이프라인, 관리자 웹)',
    stack: ['Flutter', 'LiveKit', 'Supabase'],
    numbers: [
      { value: '대상', label: 'ICT 이노베이션 스퀘어 (2026.09)' },
      { before: '15s', value: '0s', label: '전화를 받은 뒤 음원까지 무음' },
    ],
    highlight: 1,
    brief: {
      problem:
        '화면 조작을 최대한 줄인 MVP에서도 고령 환자가 적응하는 데 오래 걸려, 직접 조작해야 하는 구조 자체가 진입 장벽이었습니다.',
      decision:
        '진입 방식을 화면 조작에서 전화 수신으로 바꿔, 정해진 시각에 서버가 전화를 걸고 통화 안에서 재활 음원을 재생하고 환자 목소리를 녹음하게 했습니다.',
      result:
        '받기만 하면 재활이 시작되는 통화 파이프라인을 완성했고, 받은 뒤 최대 15초이던 무음을 0초로 줄였습니다. ICT 이노베이션 스퀘어 개별역량강화에서 대상을 받았습니다.',
    },
    summary:
      '삼킴장애(연하장애) 환자가 집에서 혼자 재활을 이어가도록 돕는 음악 기반 재활 서비스입니다. 국립재활원 연하곤란 환자 대상 디지털 재활 연구에서 퇴원 뒤 재활이 끊기는 공백을 보고 시작했고, 환자는 걸려온 전화를 받기만 하면 별도 조작 없이 세션이 시작됩니다. 두 명이 함께 진행하고 있고, 개발은 환자 앱부터 통화 파이프라인, 치료사용 관리자 웹까지 모두 제가 맡았습니다. 앱 중심이던 구조를 전화 기반으로 바꾸는 설계도 제가 했습니다.',
    problem:
      '첫 버전은 환자가 앱을 열고 세션을 골라 음원을 들으며 따라 하는 구조였습니다. 화면 조작을 최대한 줄였는데도 고령, 뇌졸중 환자가 적응하는 데 오래 걸렸고, 버튼이나 단계를 줄이는 것으로는 "환자가 스스로 앱을 열어야 한다"는 전제가 남았습니다. 구조를 바꾼 뒤에도 통화 품질 문제가 남았습니다. 무료 플랜에서는 통화가 없을 때 음원을 트는 Agent 서버가 꺼져 있다가 깨어나는 데 10~20초가 걸렸고, 그 사이 벨이 먼저 울려 환자가 받으면 무음이 흘렀습니다. Agent가 환자 마이크가 올라오기를 기다린 뒤에 음원을 재생해서 여기서도 최대 15초 무음이 생겼습니다. 환자가 통화 중간에 먼저 끊으면 녹음도 기록도 남지 않아 치료사 쪽에서는 그 통화가 없었던 것처럼 보였습니다.',
    decision:
      '진입 방식을 화면 조작에서 전화 수신으로 바꿨습니다. pg_cron이 1분마다 Edge Function을 불러 예정 시각이 된 환자를 고르고, LiveKit 방을 만들어 통화 Agent를 호출한 뒤 Android는 FCM, iOS는 APNs VoIP 푸시로 벨을 울립니다. 앱이 꺼져 있어도 OS 통화 화면이 뜨도록 iOS는 PushKit을 받는 즉시 CallKit에 신고하게 만들었습니다. 같은 시간대에 전화가 두 번 걸리지 않게 부분 유니크 인덱스로 차단했고, 못 받으면 5분 간격으로 두 번 더 겁니다. 실제 전화(PSTN) 대신 앱 안 VoIP를 고른 것은 비용과 구현 속도, 그리고 전화번호를 따로 모으지 않아도 되기 때문입니다. 통화는 처음에 직접 구현한 P2P였는데, 서버의 Agent가 통화에 참가자로 들어갈 수 없고 TURN 중계와 재접속 처리도 없어 LiveKit으로 교체했습니다. 무음 문제는 Agent가 방에 들어온 것을 확인한 뒤에만 벨을 울리고, 마이크를 기다리지 않고 받는 즉시 음원을 재생하도록 수정했습니다. 기록 유실은 재생을 중간에 끊을 때 ffmpeg 프로세스가 영영 끝나지 않던 것이 원인이어서, 남은 파이프를 비우면서 종료하도록 수정하고 녹음 업로드에 제한 시간을 뒀습니다.',
    result:
      '환자는 전화를 받기만 하면 재활이 시작되고 끝나면 통화가 자동으로 끊깁니다. 받은 뒤 음원이 나오기까지 걸리던 무음은 최대 15초에서 0초로 줄었고, 끝까지 받은 통화, 중간에 끊은 통화, 부재중 세 경우 모두 기록이 남는 것을 실제 LiveKit과 Supabase로 확인했습니다. 2026년 9월 ICT 이노베이션 스퀘어 개별역량강화에서 대상을 받았고 임상 파일럿을 준비하고 있습니다.',
    images: [
      '/assets/projects/kkul/kkul-1.png',
      '/assets/projects/kkul/kkul-2.png',
      '/assets/projects/kkul/kkul-3.png',
      '/assets/projects/kkul/kkul-4.jpg',
    ],
    extraGallery: {
      title: '치료사용 관리자 웹',
      images: [
        '/assets/projects/kkul/kkulkkeok_admin_01_dashboard.png',
        '/assets/projects/kkul/kkulkkeok_admin_05_patient_adherence.png',
        '/assets/projects/kkul/kkulkkeok_admin_04_patient_detail.png',
      ],
      wide: true,
    },
    wide: false,
    logo: '/assets/projects/kkul/kkul-logo-green.svg',
    tile: '#0ca167',
    band: '#0e9f6e',
    iconFull: true,
  },
  {
    id: 'highsleep',
    name: 'HighSleep',
    year: '2023 ~ 2024',
    problemTitle: '음원이 처음으로 돌아갈 때마다 1초씩 소리가 비어 자던 사람이 깼습니다.',
    org: '올케어디엑스',
    period: '2023.08 ~ 2024.03',
    role: '앱 풀스택 개발, 양대 스토어 출시',
    stack: ['Flutter', 'Firebase'],
    numbers: [
      { value: '2', label: '출시한 스토어' },
      { before: '1s', value: '0', label: '반복 재생 끊김' },
    ],
    highlight: 1,
    brief: {
      problem:
        '반복 재생되는 수면 음악이 처음으로 돌아갈 때 1초쯤 소리가 비어 자는 사람이 깼습니다.',
      decision: '음원을 트랙 세 개로 나누고 ViewModel 하나가 세 트랙을 같이 제어하게 묶었습니다.',
      result: '재생 공백이 없어졌고 iOS와 Android 심사를 모두 통과했습니다.',
    },
    summary:
      '숙면 유도 사운드 앱입니다. 음악 프로듀서와 함께 앱과 음원을 서로 맞춰 가며 만들었습니다. 음원 끝에 3초를 비워 달라는 요구는 제가, 멜로디와 자연음, 주파수를 동시에 재생해 달라는 요구는 프로듀서가 내는 식이었습니다. 기획자, 디자이너와 함께 Flutter 코드베이스 하나로 iOS와 Android를 같이 출시했습니다.',
    problem:
      '수면 음악은 자는 동안 계속 반복 재생되는데, 음원이 끝나고 처음으로 돌아갈 때 1초쯤 소리가 비었습니다. 자다가 갑자기 조용해지면 깨는 경우가 있어서 이 공백을 없애는 게 중요했습니다. App Store는 개인정보 정책 문제로 심사를 반려했습니다.',
    decision:
      '멜로디와 자연음, 수면 주파수를 트랙 세 개로 나눠서 멜로디가 끝나도 자연음은 계속 흐르게 했습니다. 그런데 오디오 인스턴스 세 개가 따로 놀아서 재생과 정지에 딜레이가 생겼습니다. ViewModel 하나가 세 개를 같이 관리하도록 묶었습니다. 회원과 음원, 좋아요 데이터는 Firebase로 설계하고 로그인은 OAuth 2.0으로 연동했습니다. 반려는 회원 탈퇴 기능을 만들고 약관을 앱 안에서 볼 수 있게 해서 해결했습니다.',
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
    wide: false,
    logo: '/assets/projects/highsleep/highsleep-logo.png',
    tile: `linear-gradient(180deg, ${HIGHSLEEP_STOPS})`,
    band: `linear-gradient(90deg, ${HIGHSLEEP_STOPS})`,
    iconFull: false,
  },
];

/** 메인 Work 아래에 짧게 보여 주는 나머지 프로젝트. 상세 페이지는 없다. */
export type OtherProject = {
  name: string;
  period: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
};

export const otherProjects: OtherProject[] = [
  {
    name: 'Jay',
    period: '2025.10 ~ 2026.07',
    description:
      '질환과 지역, 나이, 소득 조건으로 받을 수 있는 의료복지 혜택을 찾아 주는 플랫폼입니다. Supabase로 서버 없이 백엔드를 구성했고 Flutter Web으로 클라이언트를 만들어 Vercel로 배포했습니다.',
    stack: ['Flutter', 'Supabase'],
    link: { label: 'jaywithme.com', href: 'https://jaywithme.com' },
  },
  {
    name: '모두의 점원',
    period: '2024.10 ~ 2024.11',
    description:
      'K-Digital Training 해커톤에서 팀장 역할을 맡아 진행한 프로젝트입니다. 고령층과 시각장애인이 음성 대화로 키오스크를 사용할 수 있도록 LLM-STT-TTS-Interface 연동 음성 주문 시스템을 만들었습니다.',
    stack: ['LangChain', 'FastAPI'],
  },
  {
    name: '감정 일기',
    period: '2024.09',
    description:
      '일기를 쓰면 그날의 감정을 색으로 보여 주는 앱입니다. BERT를 파인튜닝해 정확도 약 97%로 감정을 분류하고 결과에 따라 테마 색이 바뀝니다.',
    stack: ['Keras', 'Flutter'],
  },
  {
    name: 'Airus 홈페이지',
    period: '2024.09',
    description:
      '드론 제작사 소개 사이트입니다. 공용 컴포넌트로 모바일 반응형을 구현하고 한국어와 영어 두 언어를 지원했습니다.',
    stack: ['Next.js', 'Tailwind CSS'],
  },
];

/** work: 재직, 강사 / project: 프로젝트 / education: 교육, 수료, 해커톤 */
export type TimelineRow = {
  period: string;
  org: string;
  role?: string;
  type: 'work' | 'project' | 'education';
  /** 진행 중이면 accent 원으로 표시한다. */
  now?: boolean;
  /** 메인 Work 패널에 있는 케이스면 그 id. "보기" 버튼으로 패널을 바꾼다. */
  caseId?: string;
};

export const timeline: TimelineRow[] = [
  {
    period: '2026.07 ~ 현재',
    org: '스도쿠 리그',
    role: '기획, 개발, 운영',
    type: 'project',
    now: true,
    caseId: 'sudoku',
  },
  {
    period: '2026.04 ~ 현재',
    org: '꿀꺽',
    role: '창업 팀 프로젝트',
    type: 'project',
    now: true,
    caseId: 'kkulkkuk',
  },
  { period: '2025.10 ~ 2026.07', org: 'Jay', role: '의료복지 정보 플랫폼', type: 'project' },
  { period: '2025.01 ~ 2025.10', org: '경기도교육청 방과후학교', role: '코딩 강사', type: 'work' },
  { period: '2024.10 ~ 2024.11', org: '모두의 점원', role: '해커톤 팀장', type: 'education' },
  { period: '2024.05 ~ 2024.11', org: 'AIFFEL 코어과정 8기', type: 'education' },
  {
    period: '2023.08 ~ 2024.03',
    org: '올케어디엑스',
    role: '앱 풀스택 개발',
    type: 'work',
    caseId: 'highsleep',
  },
  {
    period: '2022.10 ~ 2023.08',
    org: '(주)드림픽셀',
    role: '풀스택 개발',
    type: 'work',
    caseId: 'go2work',
  },
  { period: '2021.12 ~ 2022.06', org: '코드스테이츠 38기', type: 'education' },
  { period: '2026.08', org: '학점은행제 경영학 학사', type: 'education' },
];

export const mainSkills: string[] = ['Next.js', 'React', 'Flutter', 'TypeScript'];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: '웹, 앱', items: ['Tailwind CSS', 'React Native'] },
  {
    title: '서버, DB',
    items: ['Node.js', 'GraphQL', 'Prisma', 'Supabase', 'PostgreSQL', 'Firebase'],
  },
  { title: 'AI', items: ['Claude Code'] },
];
