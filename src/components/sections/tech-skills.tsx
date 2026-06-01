import SectionTitle from '../elements/section-title';
import { skillData } from '@/common/datas';
import SkillRow from '../elements/skill-row';
import SectionContainer from '../elements/section-container';

const TechSkills = () => {
  return (
    <SectionContainer fullHeight className='py-[40px] md:py-[70px]'>
      <div className='mx-auto w-fit'>
        <SectionTitle title={'Tech Skills'} />
        <p className='text-[16px] md:text-[20px] my-[20px] md:my-[40px] font-semibold text-center text-gray-200 md:text-gray-700 leading-8'>
          다양한 개발 언어
          <br />
          웹페이지, 서버, 어플리케이션, 배포, AI 개발이 가능한 기술 스택
        </p>
        <div className='flex flex-col gap-y-6 md:gap-y-10 px-4 md:px-20 py-6 md:py-10 border border-zinc-600 md:border-gray-200 shadow-lg rounded-xl bg-zinc-800 md:bg-slate-50'>
          {skillData.map((data, idx) => (
            <SkillRow key={idx} data={data} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default TechSkills;
