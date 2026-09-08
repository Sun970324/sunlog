import clsx from 'clsx';
import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  wide?: boolean;
  className?: string;
};

const Container = ({ children, wide, className }: ContainerProps) => (
  <div
    className={clsx(
      'mx-auto w-full px-5',
      wide ? 'max-w-[1040px]' : 'max-w-[720px]',
      className
    )}
  >
    {children}
  </div>
);

export default Container;
