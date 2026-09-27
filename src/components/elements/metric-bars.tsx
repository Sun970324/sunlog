import clsx from 'clsx';

export type Metric = {
  label: string;
  before: { value: number; text: string };
  after: { value: number; text: string };
};

const PLOT_HEIGHT = 96;

type ColumnProps = { ratio: number; text: string; muted?: boolean };

/* 값 글자는 막대 바로 위에 붙고, 막대는 긴 쪽을 PLOT_HEIGHT로 삼아 비율로 그린다. */
const Column = ({ ratio, text, muted }: ColumnProps) => (
  <div className='flex flex-col items-center justify-end' style={{ height: PLOT_HEIGHT + 24 }}>
    <span className={clsx('text-[13px] tabular-nums', muted ? 'text-muted' : 'text-fg')}>
      {text}
    </span>
    <div
      className={clsx('mt-1 w-8 rounded-t bg-accent', muted && 'opacity-30')}
      style={{ height: ratio * PLOT_HEIGHT }}
    />
  </div>
);

/** 개선 전후 수치를 한 색 두 농도의 세로 막대 두 개로. 왼쪽이 전, 오른쪽이 후. */
export default function MetricBars({ metrics }: { metrics: Metric[] }) {
  return (
    <div className='flex flex-wrap gap-x-12 gap-y-6'>
      {metrics.map(metric => {
        const max = Math.max(metric.before.value, metric.after.value) || 1;
        return (
          <div key={metric.label} className='w-[120px]'>
            <div className='grid grid-cols-2 items-end gap-x-3 border-b border-line'>
              <Column ratio={metric.before.value / max} text={metric.before.text} muted />
              <Column ratio={metric.after.value / max} text={metric.after.text} />
            </div>
            <div className='mt-1.5 grid grid-cols-2 gap-x-3 text-center text-[11px] text-muted'>
              <span>전</span>
              <span>후</span>
            </div>
            <p className='m-0 mt-2 text-[13px] text-muted'>{metric.label}</p>
          </div>
        );
      })}
    </div>
  );
}
