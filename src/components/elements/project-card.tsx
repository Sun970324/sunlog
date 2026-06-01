import { ProjectData } from '@/common/datas';
import { useState } from 'react';
import ProjectDrawer from './project-drawer';

interface Props {
  data: ProjectData;
}

const ProjectCard = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border border-zinc-700 md:border-gray-200 bg-zinc-900 md:bg-white w-full md:w-[calc((100%-2rem)/2)] p-6 leading-7 rounded-2xl shadow-floating text-white md:text-gray-800 font-medium'>
      <p className='font-bold bg-primary text-white w-fit px-3 py-1 rounded-lg mb-1'>{data.name}</p>
      <p className='text-gray-400 md:text-gray-500'>{data.role}</p>
      <hr className='h-[2px] bg-zinc-600 md:bg-gray-400 mb-2 border-0' />
      <p className='font-bold mb-1'>{data.subtitle}</p>
      <ol className='list-disc ml-4 text-[14px] leading-6 mb-2 text-gray-200 md:text-gray-800'>
        {data.content.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ol>
      <p className='border border-secondary-dark bg-secondary-light rounded-lg px-3 py-1 text-[14px] text-gray-800'>
        {data.stacks}
      </p>
      <button
        className='border border-zinc-500 md:border-gray-600 px-3 py-1 mt-5 rounded-lg flex items-center gap-x-2 active:scale-110 duration-150'
        onClick={() => setIsOpen(true)}
      >
        <img
          src='/assets/readme.svg'
          height={20}
          width={20}
          alt='readme'
          className='brightness-0 invert md:brightness-100 md:invert-0'
        />
        <div className='text-[14px] font-bold text-white md:text-gray-800'>README</div>
      </button>
      <ProjectDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} />
    </div>
  );
};

export default ProjectCard;
