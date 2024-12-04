import { Modal } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  handleClickMenu: (idx: number) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const MenuBar = ({ handleClickMenu, isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <Modal open={isMenuOpen} className='w-full flex justify-end h-full'>
      <div className='w-[80%] h-full bg-[rgb(198,198,198)] backdrop-blur-[50px] bg-opacity-[0.2] px-[20px] py-[15px] focus:outline-none'>
        <div className='flex justify-end mb-[20px]'>
          <Image
            src='/assets/close.png'
            alt=''
            width={25}
            height={25}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <ul className='h-full flex flex-col justify-between text-[16px] tracking-wider text-gray-200 font-[300] pb-[50px]'>
          <div className='h-[60%] flex justify-between flex-col'>
            <li
              onClick={() => {
                handleClickMenu(0);
                setIsMenuOpen(false);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                handleClickMenu(1);
                setIsMenuOpen(false);
              }}
            >
              Tech Skills
            </li>
            <li
              onClick={() => {
                handleClickMenu(3);
                setIsMenuOpen(false);
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                handleClickMenu(4);
                setIsMenuOpen(false);
              }}
            >
              Contact
            </li>
          </div>
        </ul>
      </div>
    </Modal>
  );
};

export default MenuBar;
