import clsx from 'clsx';

export type Metric = {
  label: string;
  before: { value: number; text: string };
  after: { value: number; text: string };
};

type BarProps = { ratio: number; text: string; muted?: boolean };

/* 막대는 긴 쪽을 100%로 두고 비율로 그린다. 값 글자는 고정 폭 칸에 둬서 두 줄의 막대 시작점이 같다. */
const Bar = ({ ratio, text, muted }: BarProps) => (
  <div className='grid grid-cols-[minmax(0,1fr)_56px] items-center gap-x-3'>
    <div>
      <div
        className={clsx('h-1.5 rounded-full bg-accent', muted && 'opacity-30')}
        style={{ width: `${ratio * 100}%` }}
      />
    </div>
    <span className={clsx('text-[13px] tabular-nums', muted ? 'text-muted' : 'text-fg')}>
      {text}
    </span>
  </div>
);

/** 개선 전후 수치를 한 색 두 농도의 막대 두 줄로. 위가 전, 아래가 후. */
export default function MetricBars({ metrics }: { metrics: Metric[] }) {
  return (
    <div className='grid gap-x-8 gap-y-5 md:grid-cols-2'>
      {metrics.map(metric => {
        const max = Math.max(metric.before.value, metric.after.value) || 1;
        return (
          <div key={metric.label}>
            <p className='m-0 text-[13px] text-muted'>{metric.label}</p>
            <div className='mt-2 space-y-1.5'>
              <Bar ratio={metric.before.value / max} text={metric.before.text} muted />
              <Bar ratio={metric.after.value / max} text={metric.after.text} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
