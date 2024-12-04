export type SkillData = {
  title: string;
  stacks: { name: string; color: string; isWhite: boolean }[];
};

export type ProjectData = {
  name: string;
  date: string;
  role?: string;
  subtitle: string;
  content: string[];
  stacks: string;
};

export const projectData: ProjectData[] = [
  {
    name: '모두의 점원 - 팀 프로젝트',
    date: '’24.10. - ’24.11.',
    role: 'PM ・ STT ・ App',
    subtitle: 'AI 음성 주문 시스템',
    content: [
      '고령층, 시각 장애인 등 디지털 취약계층의 키오스크 사용 불편감을 해소하기 위한 아이디어로 개발',
      'STT, LLM, TTS 모델을 활용하여 음성으로 대화하며 사용자가 주문을 할 수 있는 시스템',
      'RAG를 활용하여 정확한 응답을 출력',
      'API 서버와 LLM을 연동하여 장바구니 기능 개발',
    ],
    stacks: 'GPT, Langchain, Whisper, Flutter, FastAPI',
  },
  {
    name: '감정 일기 - 팀 프로젝트',
    date: '’24.09.',
    role: 'Machine learning ・ App',
    subtitle: '일기기반 감정 진단 앱',
    content: [
      '문장-감정 데이터를 전처리, 가공 후 감정 분류 NLP 모델을 개발',
      '최신 감정에 따라서 앱의 테마 컬러를 다르게 적용',
      '유저 별 일기 데이터를 Firebase DB에서 관리',
    ],
    stacks: 'Tensorflow, Pandas, Flutter, FastAPI, Firebase',
  },
  {
    name: 'HighSleep - 올케어디엑스',
    date: '’23.09. ~ ’24.03.',
    role: 'App, Backend, Deploy',
    subtitle: '숙면유도 헬스케어 시스템 어플리케이션',
    content: [
      'Flutter로 Figma 디자인을 반영한 UX/UI 개발',
      '음원 내 트랙별 음량 조절 기능 구현',
      'Background 음원 재생 기능 구현',
      'Firebase DB로 회원, 음원, 좋아요 등 데이터 관리',
      'Android 플레이 스토어, IOS 앱 스토어 출시',
    ],
    stacks: 'Dart, Flutter, Firebase, Node.js',
  },
  {
    name: '출근하자 - (주)드림픽셀',
    date: '’22.10. ~ ’23.09.',
    role: 'Frontend, Backend, App, Deploy',
    subtitle: '위치기반 구인구직 플랫폼',
    content: [
      '네이버, 카카오 지도 API로 위치기반 서비스 개발',
      '지도의 Marker clustering 기능을 구현하여 렌더링 속도 최적화',
      '웹뷰을 사용하여 웹/앱 개발의 효율성 향상',
      'GraphQL을 사용하여 API 최적화, 데이터 응답 속도 개선',
      '구인공고 템플릿 자동생성 기능 개발',
      '스켈레톤, 로딩 인디케이터 등 사용자 경험 향상 UX/UI 구현',
    ],
    stacks: 'Next.js, Node.js, GraphQL, React Native, MariaDB, AWS',
  },
  {
    name: 'Airus 홈페이지 - AIRUS',
    date: '’24.09.',
    subtitle: '무프로펠러 드론 제작 업체인 Airus의 소개 페이지',
    role: 'Frontend, Deploy',
    content: [
      '데스크탑, 모바일 버전으로 반응형 개발',
      '한국어 ・ 영어 버전 설정 기능 구현',
      'Vercel을 이용하여 유지비가 들지 않게 배포',
    ],
    stacks: 'Next.js, Vercel, TailwindCSS',
  },
  {
    name: 'No Standing - 팀 프로젝트',
    date: '’22.06.',
    role: 'Frontend',
    subtitle: '내 주변 맛집 예약 플랫폼',
    content: [
      '최초 웹 개발 프로젝트(React, CSS, JS, Node.js)',
      'Git을 사용하여 버전관리 및 협업',
      '무한 캐러셀 구현',
      'React Redux를 활용하여 전역 상태 관리',
    ],
    stacks: 'React, Node.js, MySQL, Sequelize, AWS',
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
      { name: 'Next.js', color: '#000000', isWhite: true },
      { name: 'Tailwind CSS', color: '#0DA5E9', isWhite: true },
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
