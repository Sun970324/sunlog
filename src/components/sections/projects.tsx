import Image from 'next/image';
import SectionTitle from '../elements/section-title';
import { projectData } from '@/common/datas';
import ProjectCard from '../elements/project-card';

interface Props {
  isDesktop: boolean;
}
const Projects = ({ isDesktop }: Props) => {
  if (isDesktop) {
    return (
      <div className='w-full px-[8.5rem]] relative py-[70px] font-suitVariable border-b-[1px] border-b-gray bg-gray-100'>
        <div className='mx-auto w-fit'>
          <SectionTitle title={'Projects'} />
        </div>
        <p className='text-[20px] my-[40px] font-semibold text-center text-gray-700 leading-8'>
          웹사이트 개발부터 AI 개발까지
          <br />
          다양한 프로젝트를 경험해왔습니다.
        </p>
        <div className='flex flex-wrap gap-8 mx-auto max-w-6xl'>
          {projectData.map((el, idx) => (
            <ProjectCard data={el} key={idx} />
          ))}
        </div>
      </div>
    );
  }
  return <div className='w-fit h-fit'></div>;
};

export default Projects;
