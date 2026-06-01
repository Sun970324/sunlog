import Image from 'next/image';

interface Props {
  handleClickMenu: (idx: number) => void;
  setIsMenuOpen: (value: boolean) => void;
}

const Header = ({ handleClickMenu, setIsMenuOpen }: Props) => {
  return (
    <header className='text-white md:text-gray-700 h-[72px] w-full sticky top-0 bg-black bg-opacity-[0.01] backdrop-blur-[15px] z-30 font-suitVariable'>
      <div className='flex justify-between mx-auto font-[600] py-[14px] max-w-[72rem] px-5 items-center h-full'>
        <div
          className='text-[20px] font-extrabold text-primary hover:scale-[1.1] duration-300 cursor-pointer'
          onClick={() => handleClickMenu(0)}
        >
          Sun&apos;s log
        </div>

        {/* 데스크탑 nav */}
        <nav className='hidden md:flex items-center text-[14px]'>
          <button onClick={() => handleClickMenu(0)} className='cursor-pointer hover:scale-[1.1] hover:duration-300 px-[20px]'>Home</button>
          <button onClick={() => handleClickMenu(1)} className='cursor-pointer hover:scale-[1.1] hover:duration-300 mx-[20px]'>Tech Skills</button>
          <button onClick={() => handleClickMenu(2)} className='cursor-pointer hover:scale-[1.1] hover:duration-300 mx-[20px]'>Projects</button>
          <button onClick={() => handleClickMenu(3)} className='cursor-pointer hover:scale-[1.1] hover:duration-300 mx-[20px]'>Contact</button>
        </nav>

        {/* 모바일 햄버거 */}
        <button className='md:hidden' onClick={() => setIsMenuOpen(true)}>
          <Image src='/assets/menus.png' alt='menu' width={24} height={24} className='brightness-0 invert' />
        </button>
      </div>
    </header>
  );
};

export default Header;
