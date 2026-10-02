import clsx from 'clsx';
import type { CaseNumber as CaseNumberType } from '@/common/datas';

type Props = { number: CaseNumberType; className?: string };

/* 개선 전 값은 취소선으로, 개선 후 값은 accent로. */
export default function CaseNumber({ number, className }: Props) {
  return (
    <span
      className={clsx(
        'whitespace-nowrap font-semibold leading-[1.1] tracking-[-0.02em] text-accent',
        className,
      )}
    >
      {number.before && (
        <span className='mr-1.5 font-normal text-muted line-through decoration-1'>
          {number.before}
        </span>
      )}
      {number.value}
    </span>
  );
}
