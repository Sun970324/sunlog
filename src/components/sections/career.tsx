import clsx from 'clsx';
import SectionLabel from '@/components/elements/section-label';
import { timeline, type TimelineRow } from '@/common/datas';

/* 채운 원: 재직 / 빈 원: 프로젝트 / 빈 마름모: 교육, 해커톤 / accent 원: 진행 중 */
const markerByType: Record<TimelineRow['type'], string> = {
  work: 'rounded-full bg-fg',
  project: 'rounded-full border border-muted bg-bg',
  education: 'rotate-45 border border-muted bg-bg',
};
const NOW_MARKER = 'rounded-full bg-accent';

const LEGEND = [
  { label: '재직', marker: markerByType.work },
  { label: '프로젝트', marker: markerByType.project },
  { label: '교육, 해커톤', marker: markerByType.education },
  { label: '진행 중', marker: NOW_MARKER },
];

type Props = { onView: (caseId: string) => void };

const Career = ({ onView }: Props) => (
  <div>
    <SectionLabel>Career &amp; Education</SectionLabel>
    <ul className='m-0 mt-4 flex list-none flex-wrap gap-x-4 gap-y-1.5 p-0 text-[12px] text-muted'>
      {LEGEND.map(item => (
        <li key={item.label} className='inline-flex items-center gap-1.5'>
          <span className={clsx('h-2 w-2', item.marker)} aria-hidden />
          {item.label}
        </li>
      ))}
    </ul>
    <div className='mt-3'>
      {timeline.map((row, i) => {
        const isFirst = i === 0;
        const isLast = i === timeline.length - 1;
        return (
          <div
            key={`${row.period}-${row.org}`}
            className='grid grid-cols-[16px_1fr] gap-x-4 gap-y-0.5 py-2.5 text-[14px] leading-[1.5] md:grid-cols-[16px_132px_1fr] md:gap-x-5'
          >
            {/* 세로 레일 + 마커. 레일은 py-2.5만큼 위아래로 넘겨 행 사이가 이어지고, 첫 행과 마지막 행은 마커에서 끊는다. */}
            <div
              className={clsx(
                'relative row-span-2 flex justify-center before:absolute before:w-px before:bg-line before:content-[""] md:row-span-1',
                isFirst ? 'before:top-[9px]' : 'before:-top-2.5',
                isLast ? 'before:bottom-[calc(100%-9px)]' : 'before:-bottom-2.5',
              )}
            >
              <span
                className={clsx(
                  'relative z-10 mt-1.5 h-2 w-2',
                  row.now ? NOW_MARKER : markerByType[row.type],
                )}
              />
            </div>
            <div className='whitespace-nowrap text-[13px] text-muted md:pt-px'>{row.period}</div>
            <div className='col-start-2 md:col-start-3'>
              <span className='font-semibold'>{row.org}</span>
              {row.role && <span className='text-muted'>, {row.role}</span>}
              {row.caseId && (
                <button
                  type='button'
                  onClick={() => onView(row.caseId as string)}
                  className='ml-1.5 text-[12px] text-accent hover:underline'
                >
                  보기
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Career;
