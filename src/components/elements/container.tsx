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
      // 큰 모니터에서는 globals.css의 zoom으로 페이지 전체가 함께 커진다(1280px 이상 1.1배부터 2560px 이상 1.6배까지).
      wide ? 'max-w-[1040px] xl:max-w-[1200px]' : 'max-w-[720px]',
      className,
    )}
  >
    {children}
  </div>
);

export default Container;
