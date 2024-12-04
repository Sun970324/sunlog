import { ProjectData } from '@/common/datas';

interface Props {
  data: ProjectData;
}

const ProjectCard = ({ data }: Props) => {
  return (
    <div className='border w-[calc((100%-2rem)/2)] p-6 leading-7 rounded-2xl shadow-floating text-gray-800 font-medium'>
      <p className='font-bold bg-primary text-white w-fit px-3 py-1 rounded-lg mb-1'>{data.name}</p>
      <p className='text-gray-500'>{data.date}</p>
      <p className='text-gray-500'>{data.role}</p>
      <hr className='h-[2px] bg-gray-400 mb-2' />
      <p className='font-bold mb-1'>{data.subtitle}</p>
      <ol className='list-disc ml-4 text-[14px] leading-6 mb-2'>
        {data.content.map(el => (
          <li>{el}</li>
        ))}
      </ol>
      <p className='border border-secondary-dark bg-secondary-light rounded-lg px-3 py-1 text-[14px]'>
        {data.stacks}
      </p>
    </div>
  );
};

export default ProjectCard;
