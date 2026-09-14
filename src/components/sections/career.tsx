import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import SectionLabel from '@/components/elements/section-label';
import { careerRows, type CareerRow } from '@/common/datas';

/* 채운 원: 재직·운영 / 빈 원: 개인 프로젝트 / 빈 마름모: 교육·수료 */
const markerByType: Record<CareerRow['type'], string> = {
  work: 'rounded-full bg-fg',
  project: 'rounded-full border border-muted bg-bg',
  education: 'rotate-45 border border-muted bg-bg',
};

const Career = () => (
  <Reveal stagger className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
    <Container>
      <SectionLabel>Career &amp; Education</SectionLabel>
      <div>
        {careerRows.map((row, i) => {
          const isCurrent = row.period.includes('현재');
          const isFirst = i === 0;
          const isLast = i === careerRows.length - 1;
          return (
            <div
              key={`${row.period}-${row.org}`}
              data-reveal-item
              className='grid grid-cols-[16px_1fr] gap-x-4 gap-y-1 py-4 text-[15px] md:grid-cols-[16px_160px_1fr] md:gap-x-8'
            >
              {/* 세로 레일 + 마커. 레일은 py-4만큼 위아래로 넘겨 행 사이가 이어지고, 첫·마지막 행은 마커에서 끊는다. */}
              <div
                className={`relative row-span-2 flex justify-center before:absolute before:w-px before:bg-line before:content-[""] md:row-span-1 ${
                  isFirst ? 'before:top-[11px]' : 'before:-top-4'
                } ${isLast ? 'before:bottom-[calc(100%-11px)]' : 'before:-bottom-4'}`}
              >
                <span
                  className={`relative z-10 mt-[7px] h-2 w-2 ${
                    isCurrent ? 'rounded-full bg-accent' : markerByType[row.type]
                  }`}
                />
              </div>
              <div className='text-muted'>{row.period}</div>
              <div className='col-start-2 md:col-start-3'>
                <span className='font-semibold'>{row.org}</span>
                {row.role && <span className='text-muted'>, {row.role}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  </Reveal>
);

export default Career;
