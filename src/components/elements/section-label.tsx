import clsx from 'clsx';
import type { ReactNode } from 'react';

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

const SectionLabel = ({ children, className }: SectionLabelProps) => (
  <h2
    className={clsx(
      'm-0 text-[22px] font-semibold tracking-[-0.01em] text-fg md:text-[26px]',
      className,
    )}
  >
    {children}
  </h2>
);

export default SectionLabel;
