import Container from '@/components/elements/container';
import SectionLabel from '@/components/elements/section-label';
import Chips from '@/components/elements/chips';
import { otherProjects } from '@/common/datas';

/* 상세 페이지가 없는 나머지 프로젝트. 이름, 기간, 한 줄 설명, 대표 스택만 2열로 짧게. */
const OtherProjects = () => (
  <Container wide className='pb-16 md:pb-24'>
    <SectionLabel>그 외 프로젝트</SectionLabel>
    <ul className='m-0 mt-5 grid list-none gap-3 p-0 md:grid-cols-2'>
      {otherProjects.map(project => (
        <li
          key={project.name}
          className='flex flex-col gap-2 rounded-[12px] border border-line p-5'
        >
          <div className='flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1'>
            <span className='text-[16px] font-semibold'>{project.name}</span>
            <span className='text-[13px] text-muted'>{project.period}</span>
          </div>
          <p className='m-0 text-[14px] leading-[1.6] text-muted'>{project.description}</p>
          <div className='mt-1 flex flex-wrap items-center justify-between gap-2'>
            <Chips items={project.stack} />
            {project.link && (
              <a
                href={project.link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-[13px] text-accent underline underline-offset-4'
              >
                {project.link.label} ↗
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  </Container>
);

export default OtherProjects;
