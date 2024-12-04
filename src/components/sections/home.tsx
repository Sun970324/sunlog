import { TypeAnimation } from 'react-type-animation';

interface Props {
  handleClickMenu: (idx: number) => void;

  isDesktop: boolean;
}

const HomeSection = ({ isDesktop, handleClickMenu }: Props) => {
  if (isDesktop) {
    return (
      <div className='w-full bg-gray-100 px-[8.5rem]] relative h-[calc(100vh-72px)] py-[140px] font-suitVariable border-b-[1px] border-b-gray'>
        <div className='mx-auto w-fit'>
          <h1 className='text-[36px] font-bold text-gray-800 h-[100px] w-[700px]'>
            <TypeAnimation
              sequence={['Create Value With Code\nWebsites, Servers, Applications, AI']}
              cursor={false}
              className='whitespace-pre-line'
              speed={25}
            />
          </h1>
          <div className='text-[20px] mt-[30px] leading-8 text-gray-700'>
            <p>안녕하세요. 코드로 가치를 만들어내는 개발자 윤선웅입니다.</p>
            <p>
              <span className='font-semibold text-primary'>웹사이트, 서버, 어플리케이션, AI</span>{' '}
              개발을 하고 있습니다.
            </p>
            <p className=''>제가 할 수 있는 것과 제가 해왔던 것들을 살펴보세요.</p>
          </div>
          <button
            className='mt-[100px] px-[40px] border rounded-xl py-[20px] bg-primary text-white font-semibold hover:bg-primary-hover'
            onClick={() => handleClickMenu(1)}
          >
            더 알아보기 ↓
          </button>
        </div>
      </div>
    );
  }
  return <div className='w-fit h-fit bg-[rgb(02,02,02)] mt-[-50px] relative'></div>;
};

export default HomeSection;
