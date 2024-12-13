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
    id: 'modu',
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
    images: ['modu/modu-1.jpg', 'modu/modu-2.jpg', 'modu/modu-3.png', 'modu/modu-4.png'],
    meaning: [
      'AI를 같이 공부한 팀원들과 함께 AI KDT 해커톤 대회를 위해 준비한 프로젝트입니다.\n고령층, 시각 장애인 등 디지털 취약계층이 늘어나고 있는 키오스크를 사용하기 어렵다는 기사와 통계를 확인하여 이들의 불편함을 AI 기술로 해결하기 위해 STT, LLM을 이용한 음성주문시스템을 만들었습니다.',
      'STT는 OpenAI에서 공개한 오픈소스 STT 모델인 Whisper AI를 사용하였고 잡음 제거 알고리즘을 추가하여 STT 모델의 성능을 더욱 향상 시켰습니다. \n LLM은 기본 Cloade 모델에 Langchain을 활용하여 식당의 메뉴 정보를 정확하게 전달하기 위해 RAG를 사용하였습니다.',
      '프로젝트에서 팀장의 역할을 맡으면서 AI 서비스를 개발하며 기술적인 성장과 더불어 일정관리, 시장에 대한 분석, 문서작업 등 기술 외적인 필요한 역량을 키울 수 있었습니다.',
    ],
  },
  {
    id: 'diary',
    name: '감정 일기 - 팀 프로젝트',
    date: '’24.09.',
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
    id: 'highsleep',
    name: 'HighSleep - 올케어디엑스',
    date: '’23.09. ~ ’24.03.',
    role: 'App ・ Backend ・ Deploy',
    subtitle: '숙면유도 헬스케어 시스템 어플리케이션',
    content: [
      'Flutter로 Figma 디자인을 반영한 UX/UI 개발',
      '음원 내 트랙별 음량 조절 기능 구현',
      'meaning 음원재생 기능 구현',
      'Firebase DB로 회원, 음원, 좋아요 등 데이터 관리',
      'Android 플레이 스토어, IOS 앱 스토어 출시',
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
    meaning: [
      'HighSleep은 숙면유도를 목적으로 하는 음악을 제공하는 서비스 어플리케이션입니다. 앱에서 제공하는 음원은 수면에 도움이 되는 멜로디 패턴과 주파수를 사용하여 사용자의 수면에 도움을 줍니다.',
      '음원에는 주파수, 자연소리, 멜로디 세 요소로 나뉘어져 있어 이 요소들의 음량을 각각 조정하는 기능을 구현했습니다.',
      '회사 내 유일한 개발자로써 서비스 기획부터 앱스토어 출시까지 총괄하며 기획 및 개발, 배포까지의 역량을 키울 수 있었습니다.',
    ],
  },
  {
    id: 'go2work',
    name: '출근하자 - (주)드림픽셀',
    date: '’22.10. ~ ’23.09.',
    role: 'Frontend ・ Backend ・ App ・ Deploy',
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
    images: [
      'go2work/go2work-1.png',
      'go2work/go2work-2.png',
      'go2work/go2work-3.png',
      'go2work/go2work-4.png',
      'go2work/go2work-5.png',
      'go2work/go2work-6.png',
      'go2work/go2work-7.png',
    ],
    meaning: [
      '개발자 커리어의 첫 걸음이 된 프로젝트입니다. 사용자의 위치를 기반으로 하여 구인공고를 추천하는 구인구직 플랫폼입니다.',
      '회사 내 유일한 개발자로써 서비스 개발 및 유지보수를 전담하여 빠르게 개발 역량을 키울 수 있었습니다.',
      '구인공고를 자동으로 작성해주는 템플릿 제공기능, 지도 API 마커 클러스터링으로 렌더링 성능 90% 이상 향상, GraphQL을 사용하여 API 응답속도 50% 이상 향상 등 다양한 기능과 개선 개발을 진행했습니다.',
    ],
  },
  {
    id: 'airus',
    name: 'Airus 홈페이지 - AIRUS',
    date: '’24.09.',
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
