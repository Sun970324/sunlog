import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import SectionLabel from '@/components/elements/section-label';
import { careerRows } from '@/common/datas';

const Career = () => (
  <Reveal stagger className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
    <Container>
      <SectionLabel>Career · Education</SectionLabel>
      <div>
        {careerRows.map(row => (
          <div
            key={`${row.period}-${row.org}`}
            data-reveal-item
            className='grid gap-x-8 gap-y-1 border-b border-line py-4 text-[15px] md:grid-cols-[160px_1fr]'
          >
            <div className='text-muted'>{row.period}</div>
            <div>
              <span className='font-semibold'>{row.org}</span>
              {row.role && <span className='text-muted'> · {row.role}</span>}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Reveal>
);

export default Career;
