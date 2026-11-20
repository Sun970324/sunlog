export type CaseNumber = {
  before?: string;
  value: string;
  label: string;
  /** 상세 페이지 숫자 줄에서 뺀다. 메인 패널 대표 숫자로는 그대로 쓴다. */
  hideOnDetail?: boolean;
};

export type CaseStudy = {
  id: string;
  name: string;
  /** 선반 아이콘 아래에 보이는 연도. */
  year: string;
  /** 이 케이스가 해결한 문제 상황을 개조식 한 줄로(마침표 없이). */
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
  /** 대표 사례 밖의 추가 사례. 상세 페이지에서 대표 사례 아래에 차례로 보여 준다. */
  moreCases?: {
    problemTitle: string;
    numbers: CaseNumber[];
    problem: string;
    decision: string;
    result: string;
  }[];
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
    id: 'highsleep',
    name: 'HighSleep',
    year: '2023 ~ 2024',
    problemTitle: '수면 음악 반복 재생 때마다 1초씩 소리 공백',
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
        '반복 재생되는 수면 음악이 처음으로 돌아갈 때 1초쯤 소리가 비었고, 자는 중에 소리가 갑자기 끊기면 깰 수 있어 없애야 했습니다.',
      decision: '음원을 트랙 세 개로 나누고 ViewModel 하나가 세 트랙을 같이 제어하게 묶었습니다.',
      result: '재생 공백이 없어졌고 iOS와 Android 심사를 모두 통과했습니다.',
    },
    summary:
      '숙면 유도 헬스케어 앱입니다. 음악 프로듀서와 함께 앱과 음원을 서로 맞춰 가며 만들었습니다. 음원 끝에 3초를 비워 달라는 요구는 제가, 멜로디와 자연음, 주파수를 동시에 재생해 달라는 요구는 프로듀서가 내는 식이었습니다. 기획자, 디자이너와 함께 Flutter 코드베이스 하나로 iOS와 Android를 같이 출시했습니다.',
    problem:
      '수면 음악은 자는 동안 계속 반복 재생되는데, 음원이 끝나고 처음으로 돌아갈 때 1초쯤 소리가 비었습니다. 자는 중에 소리가 갑자기 끊기면 깰 수 있어서 이 공백을 없애는 게 중요했습니다. App Store는 개인정보 정책 문제로 심사를 반려했습니다.',
    decision:
      '멜로디와 자연음, 수면 주파수를 트랙 세 개로 나눠서 멜로디가 끝나도 자연음은 계속 흐르게 했습니다. 그런데 오디오 인스턴스 세 개가 따로 놀아서 재생과 정지에 딜레이가 생겼습니다. ViewModel 하나가 세 개를 같이 관리하도록 묶었습니다. 회원과 음원, 좋아요 데이터는 Firebase Auth, Firestore, Storage, Cloud Functions로 설계했고 로그인은 Google, Apple, 카카오 소셜 로그인으로 연동했습니다. 음원을 올리고 태그를 다는 관리자 웹과 회사 홈페이지는 Next.js로 만들었습니다. 반려는 회원 탈퇴 기능을 만들고 약관을 앱 안에서 볼 수 있게 해서 해결했습니다.',
    result:
      '반복 재생할 때 끊기는 부분이 없어졌고 트랙마다 음량을 조절해 취향대로 조합할 수 있게 됐습니다. iOS와 Android 심사를 모두 통과해 출시했습니다.',
    moreCases: [
      {
        problemTitle: '곡을 넘길 때마다 수면 주파수까지 처음부터 다시 재생',
        numbers: [],
        problem:
          '곡을 넘기면 멜로디와 자연음만 바뀌면 되는데, 곡과 상관없는 수면 주파수 트랙까지 처음부터 다시 재생됐습니다.',
        decision:
          '곡을 넘길 때마다 플레이어 세 개 모두 setUrl로 음원을 다시 불러오고 볼륨과 반복 모드를 다시 설정하고 있었습니다. setUrl을 부르면 재생 위치가 0으로 돌아갑니다. 그래서 첫 초기화 여부로 나눠, 그 뒤 곡 전환에서는 멜로디와 자연음의 URL만 바꾸고 수면 주파수 플레이어는 잠깐 멈췄다가 이어서 재생하게 했습니다.',
        result:
          '곡을 넘겨도 수면 주파수가 처음으로 돌아가지 않고 이어서 재생되고, 전환할 때마다 같은 수면 주파수 파일을 다시 받던 요청도 없어졌습니다.',
      },
    ],
    images: [
      '/assets/projects/highsleep/highsleep-2.jpg',
      '/assets/projects/highsleep/highsleep-3.jpg',
      '/assets/projects/highsleep/highsleep-4.jpg',
      '/assets/projects/highsleep/highsleep-5.jpg',
      '/assets/projects/highsleep/highsleep-6.jpg',
      '/assets/projects/highsleep/highsleep-7.jpg',
    ],
    wide: false,
    logo: '/assets/projects/highsleep/highsleep-logo.svg',
    tile: '#111116',
    band: `linear-gradient(90deg, ${HIGHSLEEP_STOPS})`,
    iconFull: true,
  },
  {
    id: 'go2work',
    name: '출근하자',
    year: '2022 ~ 2023',
    problemTitle: '검색 조건을 바꿀 때마다 지도가 30초 가까이 멈춤',
    org: '(주)드림픽셀',
    period: '2022.10 ~ 2023.08',
    role: '프론트엔드, 백엔드, 배포',
    stack: ['Next.js', 'GraphQL', 'Node.js'],
    numbers: [
      { before: '30s', value: '2s', label: '지도 표시 시간' },
      { before: '50MB', value: '5MB', label: 'API 응답 크기' },
    ],
    highlight: 0,
    brief: {
      problem:
        '검색 조건을 바꿀 때마다 마커 수백 개를 다시 그려 지도가 뜨기까지 30초가 걸렸고, 쓰지 않는 필드까지 내려와 응답이 50MB였습니다.',
      decision:
        '공식 MarkerClusterer가 있는 카카오맵으로 바꾸고, 마커를 묶는 것만으로는 부족해 쿼리에서 불필요한 필드 140줄을 지우고 조회 범위를 제한했습니다.',
      result: '지도 표시가 30초에서 2초로, 응답이 50MB에서 5MB로 줄었습니다.',
    },
    summary:
      '위치기반 구인구직 플랫폼입니다. 경력 없는 신입으로 입사했는데 회사에 개발자가 없어 운영 중이던 웹과 앱을 그대로 인수받았고, 처음 접한 GraphQL과 Apollo, Prisma를 공부해 3주 만에 수정 작업을 시작했습니다. 대표, 디자이너와 서비스 방향과 UX 개선안을 이야기하고 구현해서 보여준 다음 다시 다듬는 식으로 일했습니다. 입사했을 때 지도가 뜨기까지 30초 가까이 걸렸는데, 원인을 찾는 것부터 고치는 것까지 제가 맡았습니다.',
    problem:
      '검색 조건을 바꿀 때마다 수백 개의 마커를 전부 다시 그려서 그동안 지도가 멈췄습니다. 마커를 찍는 데 쓰지도 않는 기업 이미지와 재무 정보까지 같이 내려오느라 GraphQL 응답이 50MB였습니다.',
    decision:
      '네이버 지도를 카카오맵으로 바꿨습니다. 공식 MarkerClusterer가 있어서 클러스터링을 직접 만들지 않아도 됐기 때문입니다. 그런데 마커를 묶어도 공고가 많은 지역은 여전히 느렸고, 응답 항목을 줄이고 검색 반경을 좁히자 이번에는 넓은 지역 검색에서 서버 오류가 났습니다. 마커를 묶는 것만으로는 부족하고 받아 오는 데이터 크기와 조회 범위까지 줄여야 한다고 판단했습니다. 그래서 지도 쿼리에서 화면에 쓰지 않는 기업 이미지, 담당자, 회사 소개 등 필드 140줄을 지우고, 공고가 4,500건을 넘으면 나눠서 동시에 조회하고, 25km보다 넓은 반경은 유료 공고만 조회하고, 지도 최대 축소 범위를 64km로 제한했습니다. 직무 3단계 트리 자동완성은 서버를 부르지 않고 이미 받아 둔 데이터를 메모리에서 걸러내도록 다시 만들었습니다.',
    result:
      '지도가 뜨기까지 30초 걸리던 것이 2초로, API 응답이 50MB에서 5MB로 줄었습니다. 필터를 바꿀 때마다 화면이 멈추던 것도 없어졌습니다.',
    moreCases: [
      {
        problemTitle: '기업정보 페이지가 쿼리 4개를 모두 기다린 뒤에야 응답',
        numbers: [],
        problem:
          '기업정보 페이지는 getServerSideProps에서 기업정보, 재무, 국민연금 인원, 업종 평균 연봉 쿼리 4개를 차례로 await 한 뒤에야 HTML을 내려줬습니다.',
        decision:
          '기본 기업정보만 SSR에 남기고, 무거운 재무, 국민연금 인원, 업종 평균 연봉은 Apollo useQuery와 useLazyQuery로 옮겨 브라우저에서 받게 했습니다. 업종 평균 연봉은 인원 데이터를 받은 뒤 이어서 부르고, 섹션마다 로딩 표시를 붙였습니다.',
        result:
          '기본 정보를 먼저 보여 주고 무거운 데이터는 섹션별로 채우는 구조가 됐고, HTML 응답 전에 기다리는 쿼리가 4개에서 1개로 줄었습니다.',
      },
      {
        problemTitle: '가입 보상 이벤트에서 자동 프로그램으로 계정을 대량 생성',
        numbers: [{ before: '50%', value: '1%', label: '이벤트 기간 중복 가입 비율' }],
        problem:
          '회원가입 보상 이벤트를 열자 자동 프로그램으로 계정을 대량으로 만들어 보상을 받아 가는 어뷰징이 생겼고, 이벤트 기간 신규 가입의 절반이 중복 가입이었습니다.',
        decision: '회원가입 화면에 reCAPTCHA v2를 도입해 사람이 직접 가입하는지 확인하게 했습니다.',
        result: '이벤트 기간 신규 가입 중 중복 가입 비율이 50%에서 1%로 줄었습니다.',
      },
    ],
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
    id: 'kkulkkuk',
    name: '꿀꺽',
    year: '2026',
    problemTitle: '화면 조작을 최소화해도 고령 환자의 앱 적응에 오랜 시간 소요',
    org: '2인 팀 프로젝트',
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
    moreCases: [
      {
        problemTitle: 'iOS에서 재발신 전화가 받기 버튼 없이 끊김',
        numbers: [],
        problem:
          '3일간 테스트 통화 기록을 보니 받은 통화는 전부 1회차였고, 재발신으로 넘어간 5건은 모두 부재중이었습니다. 재현해 보니 재발신 때 벨이 1초 울리고 받기 버튼 없이 끊겼습니다.',
        decision:
          '푸시에 담는 통화 ID를 세션 ID로 고정해 쓴 것이 원인이었습니다. iOS는 이 값을 CallKit 전화 ID로 쓰는데, 이미 끝난 ID로 다시 신고하면 곧바로 정리합니다. 시도마다 새 UUID를 벨 ID로 쓰고 LiveKit 방 이름에도 시도 번호를 붙여 닫히는 중인 방을 다시 받지 않게 했습니다. Agent에는 세션 ID를 그대로 넘겨 결과가 맞는 기록에 남도록 했습니다.',
        result:
          '통화 ID만 새로 바꾸자 재발신 벨이 정상으로 울렸고, 같은 통화에 두 번 걸어 시도마다 방과 벨 ID가 달라지는 것을 로그로 확인했습니다.',
      },
    ],
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
    logo: '/assets/projects/kkul/kkul-logo-blue.png',
    tile: '#0050e0',
    band: '#0050e0',
    iconFull: true,
  },
  {
    id: 'sudoku',
    name: '스도쿠 리그',
    year: '2026',
    problemTitle: '1:1 대결 대기열 진입 314번 중 매칭 11번',
    org: '제이위드미 (개인사업자)',
    period: '2026.07 ~ 진행 중',
    role: '기획, 개발, 스토어 심사, 운영',
    stack: ['Flutter', 'Supabase', 'PostgreSQL'],
    links: [{ label: '소개 페이지', href: 'https://sudoku.jaywithme.com' }],
    numbers: [
      { before: '3.5%', value: '28.6%', label: '1:1 매칭 성공률', hideOnDetail: true },
      { value: '1개월', label: '개발 시작부터 양대 스토어 출시' },
      { value: '900', label: '누적 회원가입' },
      { value: '1000', label: '출시 1달 다운로드' },
      { value: '34위', label: 'App Store 보드 게임 순위' },
    ],
    highlight: 0,
    brief: {
      problem:
        '1:1 대결 대기열에 들어온 314번 중 매칭은 11번(3.5%)이었고, 매칭되더라도 평균 760초를 기다려야 했습니다.',
      decision:
        '매칭 범위를 인접 티어까지 넓히자 성공률이 오히려 1.0%로 떨어져, 시간대별 대기열 진입 인원을 세어 보고 동시 접속자가 적은 것을 원인으로 잡아 피크타임제와 대기열 진입 알림을 넣었습니다.',
      result:
        '대기열 진입 105번 중 30번이 매칭돼 성공률이 28.6%로 올랐고 평균 대기는 10.5초로 줄었습니다. 개발 시작 1개월 만에 양대 스토어에 출시해 출시 1달 다운로드 1,000회, 누적 회원가입 900명, DAU 100, App Store 보드 게임 순위 34위를 기록했습니다.',
    },
    summary:
      '풀이 기법을 배우고 그 실력으로 실시간 랭크 대전을 하는 스도쿠 앱입니다. 개발 시작 1개월 만에 양대 스토어에 올렸고 출시 한 달에 다운로드 1,000회를 기록했고 지금까지 900명이 가입했습니다. 만드는 동안 스도쿠 카페에 진행 상황을 계속 올렸는데 색상 테마와 기법 설명 방식은 거기서 받은 의견을 반영했습니다.',
    problem:
      '출시 뒤 1:1 랭크 대결의 매칭이 거의 성사되지 않았습니다. 대기열에 들어온 314번 중 매칭은 11번(3.5%)이었고, 매칭된 경우에도 평균 760초를 기다려야 했습니다. 처음에는 같은 티어끼리만 매칭되는 조건 때문이라고 봤습니다. 기능이 빠르게 늘면서 이미 만든 게 틀어지는 일도 잦아졌습니다. 보드의 난이도를 매기는 프로그램과 힌트 프로그램의 판단이 달라도 에러가 나지 않았고, 랭크 대전인데 앱 화면에서만 점수를 검사하면 서버에 직접 요청을 보내 그 검사를 건너뛸 수 있었습니다.',
    decision:
      '먼저 매칭 범위를 인접 티어까지 넓히고 오래 기다리면 한 번 더 넓히도록 서버 설정값을 바꿨는데 성공률이 오히려 1.0%로 떨어졌습니다. 시간대별 대기열 진입 인원을 세어 보니 조건보다 같은 시간대에 들어오는 사용자 자체가 적은 것이 병목이었습니다. 그래서 1:1 대결 매칭 시간을 매일 22~23시 한 시간으로 정해 사용자를 모았고, 이 단계에서 성공률이 12.7%가 됐습니다. 이어서 누군가 대기열에 들어오면 앱에 접속해 있는 사용자에게 "지금 상대가 기다리는 중" 배너가 실시간으로 뜨게 했습니다(Supabase Realtime Presence). 사람끼리 겨루는 것이 핵심이라 가짜 상대(봇)는 넣지 않았습니다. 두 엔진의 판단이 어긋나는 문제는 보드를 만들 때마다 두 프로그램을 같이 돌려 결과가 다르면 실패하는 테스트로 막았고, 점수 검사 같은 핵심 검증은 서버 함수와 RLS 정책으로 옮겼습니다. Apple 영수증은 루트 인증서까지 서버에서 검증합니다.',
    result:
      '피크타임과 대기열 알림을 넣은 뒤 대기열 진입 105번 중 30번이 매칭돼 성공률이 3.5%에서 28.6%로 올랐고, 평균 대기는 760초에서 10.5초로 줄었습니다. 배너를 본 26명 중 16명이 대결에 참가했습니다. 개발을 시작한 지 1개월 만에 App Store와 Google Play에 올렸습니다. 스도쿠 카페에 진행 상황을 올리며 모은 사용자가 출시 1주에 300명, 한 달에 600명, 지금은 900명이 됐습니다. 다운로드 1,000회를 달성했고 DAU 100으로 우상향해 App Store 보드 게임 순위 34위까지 올라갔습니다.',
    moreCases: [
      {
        problemTitle: '최고 난이도는 다음 퍼즐 시작까지 2분 이상 대기',
        numbers: [
          { before: '120초 이상', value: '0초', label: '다음 퍼즐 시작 대기' },
          { before: '124초', value: '2.4초', label: '최고 난이도 퍼즐 생성 (최대)' },
        ],
        problem:
          '개발 중 가장 어려운 난이도를 직접 플레이해 보니 다음 퍼즐이 나오기까지 한참을 기다려야 했습니다. 퍼즐의 난이도를 판정하려면 후보 보드를 여러 번 풀어 봐야 하다 보니, 상위 난이도는 PC에서도 퍼즐 하나에 평균 30초, 최대 124초가 걸렸습니다. 이 때 시작 버튼을 누르면 화면이 멈춘 채로 생성이 끝나기를 기다리는 구조였습니다.',
        decision:
          '그래서 퍼즐을 누른 뒤에 만들지 않고 미리 만들어 두기로 했습니다. 난이도 6개마다 퍼즐을 3개씩 큐에 쌓아 두고, 남은 퍼즐이 1개 이하가 되면 백그라운드 Isolate에서 다시 채웁니다. 큐는 기기에 저장해 앱을 다시 켜도 유지되고, 처음 설치한 기기는 큐가 비어 있기 때문에 난이도별 퍼즐 3개를 앱에 넣어 배포했습니다. 여러 난이도를 동시에 만들면 CPU와 배터리를 많이 쓰기 때문에 쉬운 난이도부터 하나씩 채우도록 했습니다. 이후 생성 방식을 목표 난이도를 넘으면 바로 중단하고 다시 시도하는 방식으로 교체했고, 난이도 채점 솔버는 칸마다 Set으로 관리하던 후보 숫자를 비트마스크로 전환해 다시 구현했습니다.',
        result:
          '다음 퍼즐은 큐에서 꺼내기 때문에 생성을 기다리지 않고 바로 시작합니다. 같은 PC, 같은 시드로 다시 측정해 보니 상위 난이도의 최대 생성 시간이 124초에서 2.4초로 줄었습니다. 그중 비트마스크 솔버만의 효과는 최고 난이도 평균 1.59초에서 0.49초로 3.2배 단축입니다.',
      },
      {
        problemTitle: '사용자가 적어 옛 버전 앱을 막으면 대결 상대도 줄어듦',
        numbers: [
          { value: '0회', label: 'DB 변경 81건 · 앱 출시 3회 동안 강제 업데이트' },
          { value: '93개', label: '옛 버전과 대조한 서버 함수' },
        ],
        problem:
          '동시 접속자가 적다 보니 옛 버전 앱을 강제 업데이트로 막으면 대결 상대도 줄어듭니다. 그런데 서버를 먼저 바꾸면 업데이트 전까지 옛 앱이 새 서버를 쓰고, 스토어 심사 중에는 새 앱이 옛 서버를 씁니다.',
        decision:
          'DB 변경은 확장, 이전, 축소 순서로 나누고 새 기능은 기본으로 꺼진 서버 스위치 뒤에 뒀습니다. 배포 전에는 앱이 쓰는 서버 함수 93개를 옛 버전과 대조하고, 실제 서버에서 한 트랜잭션으로 적용했다가 되돌리는 리허설을 거쳤습니다. 강제 업데이트 최소 빌드를 32로 넣으면 최신 앱까지 막히는 구조라 31로 고쳤고, 옛 앱이 아직 읽는 컬럼은 다음 버전에서 읽기를 끊은 뒤 삭제하도록 두 단계로 나눴습니다.',
        result:
          '첫 출시 뒤 DB 변경 81건과 앱 출시 3회 동안 강제 업데이트를 한 번도 쓰지 않고 옛 버전 앱과의 호환을 유지했습니다.',
      },
      {
        problemTitle: '힌트가 구체적인 풀이 대신 일반 설명으로 대신하는 비율 14.9%',
        numbers: [
          { before: '14.9%', value: '0.7%', label: '일반 설명으로 대신한 힌트' },
          { value: '0건', label: '퍼즐 17,290개 정답 대조 오류' },
        ],
        problem:
          '힌트가 그 칸에 맞는 구체적인 풀이를 찾지 못하면 일반 설명으로 대신했는데, 그 비율이 14.9%였습니다.',
        decision:
          '원인을 짐작으로 정하지 않고 실제 힌트 17,409개를 모아 어느 코드에서 일반 설명으로 넘어가는지 줄 단위로 집계했습니다. 틀린 설명은 일반 설명보다 나쁘다고 보고, 찾는 범위를 넓히기 전에 힌트와 정답을 대조하는 검사부터 만들었습니다.',
        result: '일반 설명으로 대신하는 비율이 14.9%에서 0.7%로 줄었고, 퍼즐 17,290개로 힌트와 정답을 대조해 오류 0건을 확인했습니다.',
      },
      {
        problemTitle: '리플레이 한 판 기법 분석에 145초 소요',
        numbers: [
          { before: '145초', value: '3초 이내', label: '리플레이 한 판 기법 분석' },
          { before: '5.8초', value: '0.2초', label: '리플레이를 열 때 CPU 사용' },
        ],
        problem:
          '리플레이는 플레이어가 둔 수마다 어떤 기법으로 둔 것인지 분석해 보여 줍니다. 다이아 난이도 86수짜리 판 하나를 분석하는 데 145초가 걸렸고, 한 수에 143초를 쓰고도 답을 찾지 못하는 경우가 있었습니다. 체인 계열 기법으로 둔 수는 "설명되지 않아요"로 나오기도 했습니다.',
        decision:
          'AI가 제안한 기존 방식은 플레이어가 지운 후보마다 그 소거의 이유가 되는 기법을 역으로 찾는 방식이었습니다. 찾지 못하면 가능한 탐색을 끝까지 다 돌다 보니 시간이 오래 걸렸습니다. 그래서 질문을 거꾸로 바꿨습니다. 그 자리에서 쓸 수 있는 기법을 한 번에 뽑아 두고 플레이어의 수와 대조하는 방식입니다. 탐색 횟수에 상한을 두고, 지운 후보가 전부 설명되면 그 자리에서 멈추도록 했습니다.',
        result:
          '같은 판의 분석 시간이 145초에서 1.2~2.8초로 줄었고, 엔진이 설명할 수 있는 수 중 설명하지 못하는 수는 0개가 되었습니다. 뽑아 둔 기법 목록으로 수마다 쓸 수 있었던 다른 기법을 보여 주는 "다른 길" 기능도 만들었습니다. 다음 날 리플레이를 열면 기기가 뜨거워지는 것을 발견해 원인을 찾아 보니, 미리 계산이 판 끝까지 연쇄로 돌아 84회 실행에 CPU 5.8초를 쓰고 있었습니다. 다음 한 칸만 미리 계산하도록 수정해 4회 실행, 0.2초로 줄였습니다.',
      },
    ],
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
    id: 'ticketrun',
    name: '티켓런',
    year: '2026',
    problemTitle: '휴대폰에서 첫 화면이 보이기까지 6.46초',
    org: '2인 팀 프로젝트',
    period: '2026.10 ~ 진행 중',
    role: '홈 화면, 실전 연습 모드',
    stack: ['React', 'TypeScript', 'Zustand'],
    numbers: [
      { before: '6.46s', value: '2.29s', label: '모바일 LCP (Lighthouse)' },
      { before: '73', value: '94', label: '모바일 성능 점수' },
      { before: '650KB', value: '51KB', label: '첫 화면 이미지' },
    ],
    highlight: 0,
    brief: {
      problem:
        'Lighthouse 모바일 기준(느린 4G, CPU 4배 감속)에서 첫 화면 주요 내용이 보이기까지 6.46초가 걸렸습니다. PC는 1.21초라 휴대폰에서만 늦었습니다.',
      decision:
        '코드 분할로 처음 받는 JS를 줄였지만 LCP는 9%만 줄어, 다시 측정해 이미지로 옮겨간 병목을 찾아 썸네일과 큰 이미지를 함께 줄였습니다.',
      result: '모바일 LCP가 6.46초에서 2.29초로, 성능 점수가 73점에서 94점으로 올랐습니다.',
    },
    summary:
      '모의 티켓팅 연습 웹 서비스입니다. 예매 오픈 카운트다운부터 대기열, 보안문자, 좌석 선택까지 실제 예매 과정을 거치고 구간별 기록을 결과로 보여 줍니다. 두 명이 함께 만들고 있고, 저는 홈 화면과 실전 연습 모드(예매 오픈 카운트다운, 대기열, 좌석 선택, 결과)를 맡았습니다.',
    problem:
      'Lighthouse 모바일 기준(느린 4G, CPU 4배 감속)으로 측정하니 성능 점수 73점, 첫 화면 주요 내용이 보이기까지(LCP) 6.46초였습니다. PC는 1.21초라 휴대폰에서만 늦었습니다.',
    decision:
      '먼저 화면별로 코드를 나눠 받게 해(코드 분할) 처음 받는 JS를 287KB에서 154KB로 줄였습니다. 그런데 LCP는 9%만 줄었습니다. 같은 조건으로 다시 측정해 보니 72×96 크기로 보여 주는 작은 썸네일 3장을 원본 그대로(650KB) 받으면서 첫 화면의 큰 포스터 이미지가 늦게 도착하고 있었습니다. JS를 줄이자 느린 원인이 이미지로 옮겨간 것이라 둘 다 필요하다고 판단했습니다. 그래서 코드 분할은 유지하고 썸네일은 실제 보이는 크기(3~7KB)로, 큰 이미지는 webp(37KB)로 교체했습니다.',
    result:
      '모바일 LCP가 6.46초에서 2.29초로, 성능 점수가 73점에서 94점으로 올랐고 첫 화면 이미지는 650KB에서 51KB로 줄었습니다.',
    images: [
      '/assets/projects/ticketrun/ticketrun-1.png',
      '/assets/projects/ticketrun/ticketrun-2.png',
      '/assets/projects/ticketrun/ticketrun-3.png',
      '/assets/projects/ticketrun/ticketrun-4.png',
      '/assets/projects/ticketrun/ticketrun-5.png',
      '/assets/projects/ticketrun/ticketrun-6.png',
    ],
    wide: true,
    logo: '/assets/projects/ticketrun/ticketrun-logo.png',
    tile: '#ffffff',
    band: '#6d28d9',
    iconFull: true,
  },
  {
    id: 'companeer',
    name: 'Companeer',
    year: '2026',
    problemTitle: '채용 사이트 4곳 중 2곳에서 서버로 읽은 공고 상세 내용이 빠짐',
    org: '개인 프로젝트',
    period: '2026.11 ~ 진행 중',
    role: '기획, 설계, AI 에이전트 개발',
    stack: ['Next.js', 'Supabase', 'Chrome Extension'],
    numbers: [
      { value: '2/4곳', label: '서버 수집으로 상세 내용이 빠진 채용 사이트' },
      { value: '0회', label: '서버의 채용 사이트 접속' },
      { before: '$0.025', value: '$0.0006', label: '공고 1건 AI 정리 비용' },
    ],
    highlight: 0,
    brief: {
      problem:
        '서버가 공고 링크를 가져와 정리하는 방식으로 사람인, 원티드, 점핏, 잡코리아를 시험하니 사람인과 잡코리아는 상세 내용이 빠졌고 원티드에는 크롤링 금지 문구가 있었습니다.',
      decision:
        '서버는 채용 사이트에 접속하지 않기로 하고 사용자가 보고 있는 탭을 읽어 보내는 크롬 확장과 본문 붙여넣기로 공고를 받게 바꿨습니다.',
      result:
        '서버 수집 코드를 지우고 확장과 붙여넣기가 같은 정리 API를 쓰게 했습니다. 서버의 채용 사이트 접속은 0회입니다.',
    },
    summary:
      '취업 준비생이 관심 공고와 지원 단계, 마감과 면접 일정, 이력서와 자소서를 한곳에서 관리하는 웹 서비스입니다. 크롬 확장으로 보고 있는 공고를 바로 담을 수 있습니다. 혼자 만들고 있으며 기능 범위, 데이터 모델, 공고 수집 방식은 제가 정하고 구현은 Claude Code 에이전트에게 단계별로 맡긴 뒤 테스트와 실제 화면으로 확인하고 있습니다.',
    problem:
      '처음에는 공고 링크만 넣으면 서버가 페이지를 가져와 정리하는 방식으로 만들었습니다. 공개 주소에만 연결하도록 막고 robots.txt도 확인했습니다. 그런데 사람인, 원티드, 점핏, 잡코리아 공고로 한 번씩 시험하니 사람인과 잡코리아는 상세요강을 JS로 따로 불러와서 서버가 받은 HTML에는 상세 내용이 없었습니다. 원티드 공고 하단에는 동의 없이 크롤링할 수 없다는 문구가 있었습니다.',
    decision:
      '서버 수집을 보완하는 대신 서버가 채용 사이트에 접속하지 않도록 구조를 바꿨습니다. 채용 공고를 크롤링해 다시 게시한 것이 DB제작자 권리 침해로 인정된 잡코리아와 사람인 판례도 확인했습니다. 그래서 주 경로는 크롬 확장으로 정했습니다. 모든 사이트 권한 대신 activeTab 권한으로 사용자가 아이콘을 누른 탭만 읽고 같은 사이트 iframe까지 합쳐 스크립트와 이미지를 뺀 본문을 보냅니다. 웹과 휴대폰에서는 본문을 붙여넣게 했습니다. 받은 본문에 JSON-LD가 있으면 회사명, 마감일, 근무지는 그 값을 쓰고 나머지 항목만 AI로 나눕니다.',
    result:
      '서버 수집 코드와 관련 라이브러리 3개를 지우고 확장과 붙여넣기가 같은 정리 API를 쓰게 했습니다. 서버는 채용 사이트에 접속하지 않고 확장은 브라우저에 이미 그려진 페이지를 사람인 상세요강 iframe까지 함께 읽어 보냅니다.',
    moreCases: [
      {
        problemTitle: '공고 1건 정리에 Opus로 최대 $0.025',
        numbers: [
          { before: '$0.025', value: '$0.0006', label: '공고 1건 정리 비용' },
          { before: '3~7초', value: '2~3초', label: '정리 시간' },
        ],
        problem:
          '담은 공고를 회사, 포지션, 마감일, 주요업무, 자격요건으로 나누는 데 AI를 씁니다. 사용자가 공고를 담을 때마다 호출되기 때문에 1건 비용이 그대로 운영비가 됩니다.',
        decision:
          '원티드와 사람인 실제 공고 2건으로 Opus, Sonnet, Haiku를 비교했습니다. 세 모델 모두 사람인 공고의 접수 시작일과 마감일을 구분했고 상시채용도 맞게 처리해서 Haiku로 정했습니다. 사용자별 하루 20건 한도를 두었고 확장 팝업은 정리 버튼을 눌렀을 때만 호출하게 해 공고가 아닌 페이지에서 열어도 한도가 쓰이지 않게 했습니다.',
        result:
          '공고 1건 정리 비용이 Opus 기준 $0.014~0.025에서 Haiku $0.0004~0.0006으로, 정리 시간은 3~7초에서 2~3초로 줄었습니다.',
      },
      {
        problemTitle: '공고 목록을 열 때마다 스위치와 목록이 한 번씩 뒤바뀜',
        numbers: [
          { value: '0', label: '새로고침 때 레이아웃 이동(CLS), 보이기·숨기기 두 상태 모두' },
        ],
        problem:
          '공고 목록에 마감·종료 공고를 보일지 고르는 스위치를 두고, 고른 값을 localStorage에 저장했습니다. 그런데 목록에 들어오거나 새로고침할 때마다 스위치가 켜졌다 꺼지고 타일 몇 개가 사라지면서 화면이 출렁였습니다. 서버는 저장된 값을 모르니 기본값(보이기)으로 페이지를 그리고, 화면이 뜬 뒤에야 브라우저에서 localStorage를 읽어 숨기기로 바꾸고 있었습니다.',
        decision:
          '첫 화면을 그리는 서버가 사용자의 선택을 알면 되는 문제라 저장 위치를 쿠키로 옮겼습니다. 스위치를 바꾸면 쿠키에 쓰고, 공고 목록 페이지는 서버에서 그 쿠키를 읽어 처음부터 맞는 상태로 그리게 했습니다. 쿠키 이름 상수는 클라이언트 컴포넌트 파일에 두면 서버 페이지에서 글자가 아닌 참조로 들어오기 때문에 공용 파일로 따로 뺐습니다.',
        result:
          '시험용 종료 공고를 넣고 보이기와 숨기기 두 상태에서 새로고침해 보니 스위치와 타일 수가 처음부터 맞게 그려졌고, 브라우저의 레이아웃 이동 값(CLS)은 두 상태 모두 0이었습니다.',
      },
    ],
    images: [
      '/assets/projects/companeer/companeer-1.png',
      '/assets/projects/companeer/companeer-2.png',
      '/assets/projects/companeer/companeer-3.png',
      '/assets/projects/companeer/companeer-4.png',
      '/assets/projects/companeer/companeer-5.png',
      '/assets/projects/companeer/companeer-6.png',
    ],
    wide: true,
    logo: '/assets/projects/companeer/companeer-logo.png',
    tile: '#13795b',
    band: '#13795b',
    iconFull: true,
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
    period: '2026.11 ~ 현재',
    org: 'Companeer',
    role: '개인 프로젝트',
    type: 'project',
    now: true,
    caseId: 'companeer',
  },
  {
    period: '2026.10 ~ 현재',
    org: '티켓런',
    role: '2인 팀 프로젝트',
    type: 'project',
    now: true,
    caseId: 'ticketrun',
  },
  { period: '2026.08', org: '학점은행제 경영학 학사', type: 'education' },
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
    role: '2인 팀 프로젝트',
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
];

export const mainSkills: string[] = ['Next.js', 'React', 'Flutter', 'TypeScript'];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: '웹, 앱', items: ['Zustand', 'Tailwind CSS', 'React Native'] },
  {
    title: '서버, DB',
    items: ['Node.js', 'GraphQL', 'Prisma', 'Supabase', 'PostgreSQL', 'Firebase'],
  },
  { title: 'AI', items: ['Claude Code'] },
];
