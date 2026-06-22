import Image from 'next/image';

interface Props {
  handleClickMenu: (idx: number) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const MenuBar = ({ handleClickMenu, isMenuOpen, setIsMenuOpen }: Props) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] z-50 bg-zinc-900 transition-transform duration-300 ease-in-out font-suitVariable ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end p-4'>
          <Image
            src='/assets/close.png'
            alt='닫기'
            width={24}
            height={24}
            onClick={() => setIsMenuOpen(false)}
            className='cursor-pointer brightness-0 invert'
          />
        </div>
        <ul className='flex flex-col gap-y-8 px-8 pt-4 text-white text-[18px] font-[300] tracking-wider cursor-pointer'>
          <li onClick={() => { handleClickMenu(0); setIsMenuOpen(false); }}>Home</li>
          <li onClick={() => { handleClickMenu(1); setIsMenuOpen(false); }}>Tech Skills</li>
          <li onClick={() => { handleClickMenu(2); setIsMenuOpen(false); }}>Career</li>
          <li onClick={() => { handleClickMenu(3); setIsMenuOpen(false); }}>Projects</li>
          <li onClick={() => { handleClickMenu(4); setIsMenuOpen(false); }}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;
