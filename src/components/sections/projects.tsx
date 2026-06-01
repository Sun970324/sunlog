import SectionTitle from '../elements/section-title';
import { projectData } from '@/common/datas';
import ProjectCard from '../elements/project-card';
import SectionContainer from '../elements/section-container';

const Projects = () => {
  return (
    <SectionContainer bgGray className='py-[40px] md:py-[70px]'>
      <div className='mx-auto w-fit'>
        <SectionTitle title={'Projects'} />
      </div>
      <p className='text-[16px] md:text-[20px] my-[20px] md:my-[40px] font-semibold text-center text-gray-200 md:text-gray-700 leading-8'>
        웹사이트 개발부터 AI 개발까지
        <br />
        다양한 프로젝트를 경험해왔습니다.
      </p>
      <div className='flex flex-wrap gap-8 mx-auto max-w-6xl'>
        {projectData.map((el, idx) => (
          <ProjectCard data={el} key={idx} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
