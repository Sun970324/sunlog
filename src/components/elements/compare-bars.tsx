import { parse } from '@/components/elements/animated-number';

export type Comparison = { beforeRatio: number; afterRatio: number; growth: boolean };

/** 단위가 같은 전후 수치만 비교한다. 결과가 0이면 단위가 달라도 된다. */
export const compareNumbers = (before: string | undefined, value: string): Comparison | null => {
  if (!before) return null;
  const from = parse(before);
  const to = parse(value);
  if (!from || !to) return null;
  if (from.suffix !== to.suffix && to.value !== 0) return null;
  const max = Math.max(from.value, to.value);
  if (max <= 0) return null;
  return {
    beforeRatio: from.value / max,
    afterRatio: to.value / max,
    growth: to.value > from.value,
  };
};

const WIDTH = 140;
const BAR = 6;
const GAP = 2;

type Props = { comparison: Comparison; title: string };

/** 전후 막대 두 줄. 위가 전, 아래가 후. 숫자는 위 텍스트가 보여 주므로 길이만 그린다. */
export default function CompareBars({ comparison, title }: Props) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${BAR * 2 + GAP}`}
      width={WIDTH}
      height={BAR * 2 + GAP}
      className='mt-2 block'
      role='img'
    >
      <title>{title}</title>
      <rect
        x='0'
        y='0'
        width={comparison.beforeRatio * WIDTH}
        height={BAR}
        rx='3'
        fill='var(--accent)'
        opacity='0.3'
      />
      <rect
        x='0'
        y={BAR + GAP}
        width={comparison.afterRatio * WIDTH}
        height={BAR}
        rx='3'
        fill='var(--accent)'
      />
    </svg>
  );
}
