import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface Props {
  children: ReactNode;
  fullHeight?: boolean;
  bgGray?: boolean;
  className?: string;
}

const SectionContainer = ({ children, fullHeight, bgGray, className }: Props) => (
  <div
    className={clsx(
      'w-full px-4 md:px-[8.5rem] relative font-suitVariable border-b border-b-zinc-700 md:border-b-gray-200',
      fullHeight && 'md:h-[calc(100vh-72px)]',
      bgGray && 'bg-zinc-900 md:bg-gray-100',
      className
    )}
  >
    {children}
  </div>
);

export default SectionContainer;
