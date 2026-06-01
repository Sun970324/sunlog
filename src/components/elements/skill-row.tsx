import { SkillData } from '@/common/datas';
import Image from 'next/image';

interface Props {
  data: SkillData;
}
const SkillRow = ({ data }: Props) => {
  return (
    <div className='flex flex-col md:flex-row md:items-center gap-y-2'>
      <div className='w-auto md:w-44 font-extrabold text-[18px] md:text-[20px] flex items-center text-primary md:text-gray-800'>
        <Image
          className='mr-3'
          src={`/assets/${data.title}.png`}
          width={28}
          height={28}
          alt={data.title}
        />
        <div>{data.title}</div>
      </div>
      <div className='hidden md:block bg-gray-400 w-[2px] h-10 mr-5' />
      <div className='flex flex-wrap gap-x-3 md:gap-x-5 gap-y-2'>
        {data.stacks.map((el, idx) => (
          <div
            key={idx}
            className='px-4 py-2 rounded-md font-semibold text-[14px] md:text-[16px]'
            style={{
              background: `${el.color}`,
              color: `${el.isWhite ? 'white' : 'rgb(55 65 81)'}`,
            }}
          >
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillRow;
