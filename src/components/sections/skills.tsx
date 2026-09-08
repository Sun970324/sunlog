import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import SectionLabel from '@/components/elements/section-label';
import { primarySkills, skillGroups } from '@/common/datas';

const Skills = () => (
  <Reveal stagger className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
    <Container>
      <SectionLabel>Skills</SectionLabel>
      <div data-reveal-item className='flex flex-wrap gap-x-8 gap-y-2 border-b border-line py-8 text-[28px] font-semibold leading-[1.3] tracking-[-0.02em]'>
        {primarySkills.map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <div>
        {skillGroups.map(group => (
          <div
            key={group.title}
            data-reveal-item
            className='grid gap-x-8 gap-y-1 border-b border-line py-4 text-[15px] md:grid-cols-[160px_1fr]'
          >
            <div className='text-muted'>{group.title}</div>
            <div>{group.items}</div>
          </div>
        ))}
      </div>
    </Container>
  </Reveal>
);

export default Skills;
