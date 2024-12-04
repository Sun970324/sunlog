import Image from 'next/image';
import { useState } from 'react';

interface Props {
  handleClickMenu: (idx: number) => void;
  isDesktop: boolean;
}
const Header = ({ handleClickMenu, isDesktop }: Props) => {
  if (isDesktop) {
    return (
      <header className='text-gray-700 h-[72px] w-full  sticky top-0 bg-black bg-opacity-[0.01] backdrop-blur-[15px] z-30 font-suitVariable'>
        <div className='flex justify-between mx-auto font-[600] py-[14px] max-w-[72rem]  items-center h-full'>
          <div
            className='text-[20px] font-extrabold text-primary hover:scale-[1.1] duration-300 cursor-pointer'
            onClick={() => handleClickMenu(0)}
          >
            Sun&apos;s log
          </div>
          <nav className='flex'>
            <button
              onClick={() => handleClickMenu(0)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300 px-[20px]'
            >
              Home
            </button>
            <button
              onClick={() => handleClickMenu(1)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300 mx-[20px]'
            >
              Tech Skills
            </button>
            <button
              onClick={() => handleClickMenu(2)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300 mx-[20px]'
            >
              Projects
            </button>
            <button
              onClick={() => handleClickMenu(3)}
              className='cursor-pointer hover:scale-[1.1] hover:duration-300 mx-[20px]'
            >
              Contact
            </button>
          </nav>
        </div>
      </header>
    );
  }
  return (
    <header className='h-[50px] w-full max-w-full flex justify-between items-center sticky top-0 text-gray-50 bg-black bg-opacity-[0.01] backdrop-blur-[15px] z-30 font-suitVariable px-[30px]'>
      <div className='text-[20px] font-extrabold'>Sun&apos;s log</div>
    </header>
  );
};

export default Header;
