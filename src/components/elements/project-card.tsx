import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProjectData } from '@/common/datas';
import Image from 'next/image';
import { useState } from 'react';
import ProjectDrawer from './project-drawer';

interface Props {
  data: ProjectData;
}

const ProjectCard = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border border-zinc-700 md:border-gray-200 bg-zinc-900 md:bg-white w-full md:h-60 rounded-2xl shadow-floating overflow-hidden flex flex-col md:flex-row text-white md:text-gray-800 font-medium'>
      <div className='relative w-full md:w-2/5 h-52 md:h-full flex-shrink-0'>
        <Image
          src={`/assets/projects/${data.images[0]}`}
          alt={data.name}
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col justify-between p-5 w-full md:w-3/5'>
        <div>
          <div className='flex justify-between items-start mb-2'>
            <p className='font-bold bg-primary text-white px-3 py-1 rounded-lg'>{data.name}</p>
            <p className='text-[13px] text-gray-400'>{data.date}</p>
          </div>
          {data.role && (
            <p className='text-gray-400 md:text-gray-500 text-[14px] mb-2'>{data.role}</p>
          )}
          <p className='font-bold mb-3 leading-6'>{data.subtitle}</p>
          <p className='border border-secondary-dark bg-secondary-light rounded-lg px-3 py-1 text-[13px] text-gray-800'>
            {data.stacks}
          </p>
        </div>
        <button
          className='border border-zinc-500 md:border-gray-600 px-3 py-1 mt-4 rounded-lg flex items-center gap-x-2 w-fit active:scale-110 duration-150'
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faFileLines} className='text-white md:text-gray-800 w-4 h-4' />
          <div className='text-[14px] font-bold text-white md:text-gray-800'>README</div>
        </button>
      </div>
      <ProjectDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} data={data} />
    </div>
  );
};

export default ProjectCard;
