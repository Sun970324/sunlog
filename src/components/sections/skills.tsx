import SectionLabel from '@/components/elements/section-label';
import Chips from '@/components/elements/chips';
import { mainSkills, skillGroups } from '@/common/datas';

/* 주력 4개는 크게, 나머지는 묶음별 칩으로. */
const Skills = () => (
  <div>
    <SectionLabel>Skills</SectionLabel>
    <div className='mt-5 flex flex-wrap gap-x-[18px] gap-y-2 text-[20px] font-semibold tracking-[-0.02em] md:text-[22px]'>
      {mainSkills.map(skill => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
    <dl className='m-0 mt-6 flex flex-col gap-3.5'>
      {skillGroups.map(group => (
        <div key={group.title} className='flex flex-col gap-2'>
          <dt className='text-[12px] tracking-[0.04em] text-muted'>{group.title}</dt>
          <dd className='m-0'>
            <Chips items={group.items} />
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

export default Skills;
