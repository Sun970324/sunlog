import clsx from 'clsx';
import type { ReactNode } from 'react';

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
};

const SectionLabel = ({ children, className }: SectionLabelProps) => (
  <h2
    className={clsx(
      'm-0 border-b border-line pb-4 text-[14px] font-medium tracking-[0.04em] text-muted',
      className
    )}
  >
    {children}
  </h2>
);

export default SectionLabel;
