import { SkillData } from '@/common/datas';
import { clsx } from 'clsx';
import Image from 'next/image';
interface Props {
  data: SkillData;
}
const SkillRow = ({ data }: Props) => {
  return (
    <div className='flex items-center'>
      <div className='w-44 font-extrabold text-[20px] flex'>
        <Image
          className='mr-4'
          src={`/assets/${data.title}.png`}
          width={32}
          height={32}
          alt={data.title}
        />
        <div>{data.title}</div>
      </div>
      <div className='bg-gray-400 w-[2px] h-10 mr-5' />
      <div className='flex gap-x-5'>
        {data.stacks.map((el, idx) => (
          <div
            key={idx}
            className='px-4 py-2 rounded-md font-semibold text-[16px]'
            style={{
              background: `${el.color}`,
              color: `${el.isWhite ? 'white' : 'rgb(55 65 81'}`,
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
