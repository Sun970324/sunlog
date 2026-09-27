import type { ReactNode } from 'react';
import type { Metric } from '@/components/elements/metric-bars';

export type Diagram = {
  /** 이 그림이 무엇을 보여주는지 한 줄. 그림 아래에 캡션으로 깔린다. */
  caption: string;
  /** 캡션에 적은 개선 수치. 있으면 구조도 아래에 전후 막대로 그린다. */
  metrics?: Metric[];
  /** 왼쪽(개선 전) 패널. */
  before: { label: string; svg: ReactNode };
  /** 오른쪽(개선 후) 패널. */
  after: { label: string; svg: ReactNode };
};

// 색은 전부 CSS 변수로 쓴다. 다크 모드에서는 .dark가 변수 값만 바꾼다.
const LINE = 'var(--line)';
const SUBTLE = 'var(--subtle)';
const FG = 'var(--fg)';
const MUTED = 'var(--muted)';
const ACCENT = 'var(--accent)';

// 화살표 머리. id는 svg마다 겹치지 않게 접두어를 붙여 넘긴다.
function ArrowHead({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox='0 0 10 10'
        refX='9'
        refY='5'
        markerWidth='6'
        markerHeight='6'
        orient='auto-start-reverse'
      >
        <path d='M0 0L10 5L0 10z' fill={MUTED} />
      </marker>
    </defs>
  );
}

function Arrow({ d, marker }: { d: string; marker: string }) {
  return <path d={d} fill='none' stroke={MUTED} strokeWidth={1.2} markerEnd={`url(#${marker})`} />;
}

// 박스 하나와 가운데 정렬 글자. 두 줄이면 lines에 두 개를 넘긴다.
function Box({
  x,
  y,
  w,
  h = 34,
  lines,
  stroke = LINE,
  color = FG,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  lines: string[];
  stroke?: string;
  color?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={4} fill={SUBTLE} stroke={stroke} />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4 - ((lines.length - 1) * 15) / 2}
        textAnchor='middle'
        fontSize={12}
        fill={color}
      >
        {lines.map((line, i) => (
          <tspan key={line} x={x + w / 2} dy={i === 0 ? 0 : 15}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}

const sudokuTrust: Diagram = {
  caption:
    '점수 검사를 서버 함수 135개와 RLS 테이블 35개로 옮겨서 앱을 거치지 않은 직접 요청으로는 검사를 건너뛸 수 없게 했습니다. 정답과 관리자, 토큰 테이블은 정책을 0개로 두어 권한을 회수했습니다.',
  before: {
    label: '개선 전',
    svg: (
      <svg viewBox='0 0 320 240' className='h-auto w-full' role='img'>
        <title>개선 전: 점수 검사가 앱 안에 있어 직접 요청이 DB로 바로 들어간다</title>
        <ArrowHead id='trust-before-arrow' />
        <text x={115} y={24} fontSize={11} fill={MUTED}>
          앱
        </text>
        <rect
          x={115}
          y={30}
          width={170}
          height={118}
          rx={6}
          fill='none'
          stroke={LINE}
          strokeDasharray='4 3'
        />
        <Box x={130} y={46} w={140} lines={['앱 화면']} />
        <Arrow d='M200 80V100' marker='trust-before-arrow' />
        <Box x={130} y={100} w={140} lines={['점수 검사']} />
        <Arrow d='M200 134V184' marker='trust-before-arrow' />
        <Box x={130} y={184} w={140} lines={['DB']} />
        <text x={16} y={40} fontSize={12} fill={ACCENT}>
          <tspan x={16}>앱을 거치지 않은</tspan>
          <tspan x={16} dy={16}>
            직접 요청
          </tspan>
        </text>
        <Arrow d='M40 66V201H130' marker='trust-before-arrow' />
      </svg>
    ),
  },
  after: {
    label: '개선 후',
    svg: (
      <svg viewBox='0 0 320 240' className='h-auto w-full' role='img'>
        <title>개선 후: 검사를 서버 함수와 DB로 옮겨 직접 요청이 정책에서 막힌다</title>
        <ArrowHead id='trust-after-arrow' />
        <Box x={130} y={30} w={140} lines={['앱 화면']} />
        <Arrow d='M200 64V110' marker='trust-after-arrow' />
        <rect x={100} y={86} width={200} height={126} rx={6} fill='none' stroke={ACCENT} />
        <text x={108} y={101} fontSize={11} fill={ACCENT}>
          검사는 여기서만
        </text>
        <Box x={130} y={110} w={140} lines={['서버 함수 135개']} />
        <Arrow d='M200 144V164' marker='trust-after-arrow' />
        <Box x={130} y={164} w={140} lines={['DB 테이블 35개']} />
        <text x={200} y={230} textAnchor='middle' fontSize={11} fill={MUTED}>
          정답, 관리자, 토큰 테이블은 정책 0개
        </text>
        <text x={16} y={40} fontSize={12} fill={ACCENT}>
          <tspan x={16}>앱을 거치지 않은</tspan>
          <tspan x={16} dy={16}>
            직접 요청
          </tspan>
        </text>
        <path d='M40 66V181H100' fill='none' stroke={MUTED} strokeWidth={1.2} />
        <path d='M94 175L106 187M94 187L106 175' stroke={ACCENT} strokeWidth={2} />
        <text x={94} y={202} textAnchor='end' fontSize={11} fill={MUTED}>
          정책으로 차단
        </text>
      </svg>
    ),
  },
};

const sudokuEngines: Diagram = {
  caption:
    '보드를 만들 때 두 엔진을 같이 돌려 결과가 다르면 실패하게 했습니다. 연습 보드 137개 중 4개가 방치되던 문제가 0개로 줄었고, 새 보드는 만드는 시점에 바로 걸립니다.',
  metrics: [
    {
      label: '방치된 연습 보드 (137개 중)',
      before: { value: 4, text: '4개' },
      after: { value: 0, text: '0개' },
    },
  ],
  before: {
    label: '개선 전',
    svg: (
      <svg viewBox='0 0 320 264' className='h-auto w-full' role='img'>
        <title>개선 전: 두 엔진의 판단이 달라도 에러가 나지 않는다</title>
        <ArrowHead id='engine-before-arrow' />
        <Box x={110} y={16} w={100} lines={['보드 생성']} />
        <Arrow d='M160 50L75 76' marker='engine-before-arrow' />
        <Arrow d='M160 50L245 76' marker='engine-before-arrow' />
        <Box x={20} y={76} w={110} lines={['난이도 판정']} />
        <Box x={190} y={76} w={110} lines={['힌트 엔진']} />
        <line x1={130} y1={93} x2={190} y2={93} stroke={ACCENT} strokeDasharray='4 3' />
        <text x={160} y={132} textAnchor='middle' fontSize={11} fill={ACCENT}>
          판단이 달라도 에러 없음
        </text>
        <Box x={100} y={156} w={120} lines={['연습 보드 137개']} />
        <text x={160} y={212} textAnchor='middle' fontSize={11} fill={MUTED}>
          4개가 방치됨
        </text>
      </svg>
    ),
  },
  after: {
    label: '개선 후',
    svg: (
      <svg viewBox='0 0 320 264' className='h-auto w-full' role='img'>
        <title>개선 후: 두 엔진 결과를 비교해 다르면 테스트가 실패한다</title>
        <ArrowHead id='engine-after-arrow' />
        <Box x={110} y={16} w={100} lines={['보드 생성']} />
        <Arrow d='M160 50L75 76' marker='engine-after-arrow' />
        <Arrow d='M160 50L245 76' marker='engine-after-arrow' />
        <Box x={20} y={76} w={110} lines={['난이도 판정']} />
        <Box x={190} y={76} w={110} lines={['힌트 엔진']} />
        <Arrow d='M75 110L130 136' marker='engine-after-arrow' />
        <Arrow d='M245 110L190 136' marker='engine-after-arrow' />
        <Box x={95} y={136} w={130} lines={['결과 비교 테스트']} stroke={ACCENT} />
        <Arrow d='M160 170L95 196' marker='engine-after-arrow' />
        <Arrow d='M160 170L225 196' marker='engine-after-arrow' />
        <Box x={35} y={196} w={120} lines={['다르면 실패']} stroke={ACCENT} />
        <Box x={165} y={196} w={120} lines={['통과']} />
        <text x={160} y={252} textAnchor='middle' fontSize={11} fill={MUTED}>
          방치된 보드 0개
        </text>
      </svg>
    ),
  },
};

const go2workMap: Diagram = {
  caption:
    '마커에 쓰지 않는 필드 140줄을 제거하고 클러스터러로 묶어 그리자 지도 응답이 40초에서 5초로, 페이로드가 50MB에서 5MB로 줄었습니다. Chrome DevTools Performance 탭으로 전후를 측정했습니다.',
  metrics: [
    {
      label: '지도 응답 시간',
      before: { value: 40, text: '40초' },
      after: { value: 5, text: '5초' },
    },
    {
      label: 'API 페이로드',
      before: { value: 50, text: '50MB' },
      after: { value: 5, text: '5MB' },
    },
  ],
  before: {
    label: '개선 전',
    svg: (
      <svg viewBox='0 0 320 264' className='h-auto w-full' role='img'>
        <title>개선 전: 50MB 응답과 마커 전량 재렌더로 40초 멈춤</title>
        <ArrowHead id='map-before-arrow' />
        <Box x={16} y={16} w={170} lines={['검색 조건 변경']} />
        <Arrow d='M101 50V70' marker='map-before-arrow' />
        <Box x={16} y={70} w={170} lines={['GraphQL 응답 50MB']} />
        <text x={196} y={84} fontSize={11} fill={MUTED}>
          <tspan x={196}>쓰지 않는 기업 이미지,</tspan>
          <tspan x={196} dy={15}>
            재무 정보 포함
          </tspan>
        </text>
        <Arrow d='M101 104V124' marker='map-before-arrow' />
        <Box x={16} y={124} w={170} h={48} lines={['마커 수백 개', '전량 재렌더']} />
        <Arrow d='M101 172V192' marker='map-before-arrow' />
        <Box x={16} y={192} w={170} lines={['40초 멈춤']} color={ACCENT} />
      </svg>
    ),
  },
  after: {
    label: '개선 후',
    svg: (
      <svg viewBox='0 0 320 264' className='h-auto w-full' role='img'>
        <title>개선 후: 5MB 응답과 MarkerClusterer 렌더로 5초</title>
        <ArrowHead id='map-after-arrow' />
        <Box x={16} y={16} w={170} lines={['검색 조건 변경']} />
        <Arrow d='M101 50V70' marker='map-after-arrow' />
        <Box x={16} y={70} w={170} lines={['응답 5MB']} />
        <text x={196} y={84} fontSize={11} fill={MUTED}>
          <tspan x={196}>필드 140줄 제거,</tspan>
          <tspan x={196} dy={15}>
            반경 30% 축소
          </tspan>
        </text>
        <Arrow d='M101 104V124' marker='map-after-arrow' />
        <Box x={16} y={124} w={170} h={48} lines={['MarkerClusterer가', '묶어서 렌더']} />
        <Arrow d='M101 172V192' marker='map-after-arrow' />
        <Box x={16} y={192} w={170} lines={['5초']} color={ACCENT} />
        <text x={160} y={252} textAnchor='middle' fontSize={11} fill={MUTED}>
          직무 자동완성은 서버 대신 메모리에서 필터
        </text>
      </svg>
    ),
  },
};

const highsleepTracks: Diagram = {
  caption:
    '트랙 3개를 ViewModel 하나로 묶어 제어해서 반복 재생 때 1초씩 비던 소리와 재생, 정지 딜레이를 없앴습니다. 트랙별 음량 조절도 가능해졌습니다.',
  metrics: [
    {
      label: '반복 재생 시 소리 공백',
      before: { value: 1, text: '1초' },
      after: { value: 0, text: '0초' },
    },
  ],
  before: {
    label: '개선 전',
    svg: (
      <svg viewBox='0 0 320 246' className='h-auto w-full' role='img'>
        <title>개선 전: 반복 재생 사이 1초 공백, 오디오 인스턴스 세 개를 따로 제어</title>
        <ArrowHead id='track-before-arrow' />
        <text x={161} y={36} textAnchor='middle' fontSize={12} fill={ACCENT}>
          1초 공백
        </text>
        <rect x={16} y={44} width={130} height={20} rx={3} fill={SUBTLE} stroke={LINE} />
        <text x={81} y={58} textAnchor='middle' fontSize={11} fill={MUTED}>
          음원 1회 재생
        </text>
        <rect
          x={146}
          y={44}
          width={30}
          height={20}
          fill='none'
          stroke={ACCENT}
          strokeDasharray='4 3'
        />
        <rect x={176} y={44} width={128} height={20} rx={3} fill={SUBTLE} stroke={LINE} />
        <text x={240} y={58} textAnchor='middle' fontSize={11} fill={MUTED}>
          그다음 재생
        </text>
        <text x={160} y={108} textAnchor='middle' fontSize={11} fill={MUTED}>
          오디오 인스턴스 3개 제각각
        </text>
        <Arrow d='M34 124L56 160' marker='track-before-arrow' />
        <Arrow d='M182 128L164 160' marker='track-before-arrow' />
        <Arrow d='M284 122L264 160' marker='track-before-arrow' />
        <Box x={16} y={160} w={88} lines={['멜로디']} />
        <Box x={116} y={160} w={88} lines={['자연음']} />
        <Box x={216} y={160} w={88} lines={['주파수']} />
        <text x={160} y={216} textAnchor='middle' fontSize={11} fill={MUTED}>
          재생, 정지에 딜레이
        </text>
      </svg>
    ),
  },
  after: {
    label: '개선 후',
    svg: (
      <svg viewBox='0 0 320 246' className='h-auto w-full' role='img'>
        <title>개선 후: ViewModel 하나가 세 트랙을 같이 제어하고 자연음은 계속 이어진다</title>
        <ArrowHead id='track-after-arrow' />
        <Box x={100} y={16} w={120} lines={['ViewModel 하나']} stroke={ACCENT} />
        <Arrow d='M160 50L60 90' marker='track-after-arrow' />
        <Arrow d='M160 50V90' marker='track-after-arrow' />
        <Arrow d='M160 50L260 90' marker='track-after-arrow' />
        <Box x={16} y={90} w={88} lines={['멜로디']} />
        <Box x={116} y={90} w={88} lines={['자연음']} />
        <Box x={216} y={90} w={88} lines={['주파수']} />
        <rect x={16} y={146} width={150} height={20} rx={3} fill={SUBTLE} stroke={LINE} />
        <text x={24} y={160} fontSize={11} fill={MUTED}>
          멜로디
        </text>
        <rect x={16} y={172} width={288} height={20} rx={3} fill={SUBTLE} stroke={LINE} />
        <text x={24} y={186} fontSize={11} fill={MUTED}>
          자연음
        </text>
        <text x={160} y={212} textAnchor='middle' fontSize={11} fill={MUTED}>
          멜로디가 끝나도 자연음은 이어짐
        </text>
        <text x={160} y={236} textAnchor='middle' fontSize={13} fill={ACCENT}>
          공백 0
        </text>
      </svg>
    ),
  },
};

export const diagramsByCase: Record<string, Diagram[]> = {
  go2work: [go2workMap],
  sudoku: [sudokuTrust, sudokuEngines],
  highsleep: [highsleepTracks],
};
