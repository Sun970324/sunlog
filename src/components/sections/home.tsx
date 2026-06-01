import { TypeAnimation } from 'react-type-animation';
import SectionContainer from '../elements/section-container';

interface Props {
  handleClickMenu: (idx: number) => void;
}

const HomeSection = ({ handleClickMenu }: Props) => {
  return (
    <SectionContainer fullHeight bgGray className='py-[60px] md:py-[140px]'>
      <div className='mx-auto w-fit'>
        <h1 className='text-[24px] md:text-[36px] font-bold text-white md:text-gray-800 md:h-[100px] w-auto md:w-[700px]'>
          <TypeAnimation
            sequence={['Create Value With Code\nWebsites, Servers, Applications, AI']}
            cursor={false}
            className='whitespace-pre-line'
            speed={25}
          />
        </h1>
        <div className='text-[16px] md:text-[20px] mt-[20px] md:mt-[30px] leading-8 text-gray-200 md:text-gray-700'>
          <p>안녕하세요. 코드로 가치를 만들어내는 개발자 윤선웅입니다.</p>
          <p>
            <span className='font-semibold text-primary'>웹사이트, 서버, 어플리케이션, AI</span>{' '}
            개발을 하고 있습니다.
          </p>
          <p>제가 할 수 있는 것과 제가 해왔던 것들을 살펴보세요.</p>
        </div>
        <button
          className='mt-[60px] md:mt-[100px] block mx-auto md:mx-0 px-[40px] border rounded-xl py-[20px] bg-primary text-white font-semibold hover:bg-primary-hover'
          onClick={() => handleClickMenu(1)}
        >
          더 알아보기 ↓
        </button>
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
