import Image from 'next/image';
import SectionTitle from '../elements/section-title';
import { skillData } from '@/common/datas';
import SkillRow from '../elements/skill-row';
interface Props {
  isDesktop: boolean;
}
const TechSkills = ({ isDesktop }: Props) => {
  if (isDesktop) {
    return (
      <div className='w-full px-[8.5rem]] relative h-[calc(100vh-72px)] py-[70px] font-suitVariable border-b-[1px] border-b-gray'>
        <div className='mx-auto w-fit'>
          <SectionTitle title={'Tech Skills'} />
          <p className='text-[20px] my-[40px] font-semibold text-center text-gray-700 leading-8'>
            다양한 개발 언어
            <br />
            웹페이지, 서버, 어플리케이션, 배포, AI 개발이 가능한 기술 스택
          </p>
          <div className='flex flex-col gap-y-10 px-20 py-10 border shadow-lg rounded-xl bg-slate-50'>
            {skillData.map((data, idx) => (
              <SkillRow key={idx} data={data} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='w-fit h-fit'>
      <Image
        src={'/assets/mobile/korean/about-1.png'}
        width={550}
        height={750}
        alt='about-1-mobile'
      />
    </div>
  );
};

export default TechSkills;
