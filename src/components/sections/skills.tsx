import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import SectionLabel from '@/components/elements/section-label';
import { primarySkills, skillGroups } from '@/common/datas';

const Skills = () => (
  <Reveal stagger className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
    <Container>
      <SectionLabel>Skills</SectionLabel>

      <div data-reveal-item className='border-b border-line py-8'>
        <p className='m-0 mb-3 text-[13px] text-muted'>메인</p>
        <div className='flex flex-wrap gap-x-8 gap-y-2 text-[28px] font-semibold leading-[1.3] tracking-[-0.02em]'>
          {primarySkills.map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <dl className='m-0'>
        {skillGroups.map(group => (
          <div
            key={group.title}
            data-reveal-item
            className='grid gap-x-8 gap-y-2 border-b border-line py-5 md:grid-cols-[160px_1fr]'
          >
            <dt className='text-[13px] font-medium tracking-[0.04em] text-muted md:pt-[3px]'>
              {group.title}
            </dt>
            <dd className='m-0 flex flex-wrap items-baseline gap-y-1.5 text-[16px] leading-[1.5]'>
              {group.items.map((item, idx) => (
                <span key={item} className='whitespace-nowrap'>
                  {item}
                  {idx < group.items.length - 1 && <span className='mr-3 text-muted'>,</span>}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  </Reveal>
);

export default Skills;
