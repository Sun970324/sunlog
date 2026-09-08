import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import SectionLabel from '@/components/elements/section-label';
import { otherProjects } from '@/common/datas';

const OtherProjects = () => (
  <Reveal stagger className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
    <Container>
      <SectionLabel>그 외 프로젝트</SectionLabel>
      <div>
        {otherProjects.map(project => (
          <div
            key={project.name}
            data-reveal-item
            className='grid gap-x-8 gap-y-2 border-b border-line py-6 md:grid-cols-[160px_minmax(0,1fr)]'
          >
            <div className='text-[14px] text-muted'>{project.period}</div>
            <div>
              <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                <span className='font-semibold'>{project.name}</span>
                {project.role && <span className='text-[14px] text-muted'>{project.role}</span>}
              </div>
              <p className='mt-1.5 text-[15px]'>{project.description}</p>
              <p className='mt-2 text-[13px] text-muted'>{project.stacks}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Reveal>
);

export default OtherProjects;
