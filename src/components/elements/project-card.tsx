import { ProjectData } from '@/common/datas';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ProjectModal from './project-modal';

interface Props {
  data: ProjectData;
}

const ProjectCard = ({ data }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='border w-[calc((100%-2rem)/2)] p-6 leading-7 rounded-2xl shadow-floating text-gray-800 font-medium'>
      <p className='font-bold bg-primary text-white w-fit px-3 py-1 rounded-lg mb-1'>{data.name}</p>
      {/* <p className='text-gray-500'>{data.date}</p> */}
      <p className='text-gray-500'>{data.role}</p>
      <hr className='h-[2px] bg-gray-400 mb-2' />
      <p className='font-bold mb-1'>{data.subtitle}</p>
      <ol className='list-disc ml-4 text-[14px] leading-6 mb-2'>
        {data.content.map((el, idx) => (
          <li key={idx}>{el}</li>
        ))}
      </ol>
      <p className='border border-secondary-dark bg-secondary-light rounded-lg px-3 py-1 text-[14px]'>
        {data.stacks}
      </p>
      <button className='border px-3 py-1 mt-5 rounded-lg border-gray-600  flex items-center gap-x-2 active:scale-110 duration-150'>
        <img src='/assets/readme.svg' height={20} width={20} />
        <div className='text-[14px] font-bold' onClick={() => setIsModalOpen(true)}>
          README
        </div>
      </button>
      <ProjectModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} data={data} />
    </div>
  );
};

export default ProjectCard;
