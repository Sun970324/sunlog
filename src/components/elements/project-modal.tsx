import { ProjectData } from '@/common/datas';
import { Dialog, Modal } from '@mui/material';
import Image from 'next/image';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  data: ProjectData;
}
const ProjectModal = ({ isModalOpen, setIsModalOpen, data }: Props) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className='flex justify-center'
    >
      <div className='w-[600px] relative'>
        <div className='bg-gray-800 text-white flex justify-between p-3 fixed w-[600px]'>
          <div className='font-bold text-[20px]'>{data.name}</div>
          <Image
            src='/assets/close.png'
            alt=''
            width={25}
            height={25}
            onClick={() => setIsModalOpen(false)}
            className='cursor-pointer'
          />
        </div>
        <div className='bg-white rounded-b-lg px-3 mt-[70px]'>
          <div className='my-3 text-gray-500'>{data.date}</div>
          <div className='my-3'>
            <div className='font-bold text-[20px]'>Info</div>
            <p className='font-bold mb-1'>{data.subtitle}</p>
            <ol className='list-disc ml-4 text-[14px] leading-6 mb-2'>
              {data.content.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ol>
          </div>
          <div className='my-3'>
            <div className='font-bold text-[20px]'>Meaning</div>
            {data.meaning.map((el, idx) => (
              <p key={idx} className='text-[14px] my-2'>
                {el}
              </p>
            ))}
          </div>
          <div className='font-bold text-[20px]'>Images</div>
          {data.images.map((el, idx) => (
            <img key={idx} src={`assets/projects/${el}`} className='mx-auto my-3' />
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
