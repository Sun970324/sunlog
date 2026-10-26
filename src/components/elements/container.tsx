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
      // 넓은 화면에서는 글자를 키우지 않고 내용 폭을 넓혀 공백을 채운다. 2080px 이상은 globals.css의 zoom도 조금 걸린다.
      wide
        ? 'max-w-[1040px] xl:max-w-[1200px] min-[1680px]:max-w-[1360px] min-[2240px]:max-w-[1440px]'
        : 'max-w-[720px]',
      className,
    )}
  >
    {children}
  </div>
);

export default Container;
