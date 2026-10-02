import clsx from 'clsx';
import Image from 'next/image';
import type { CaseStudy } from '@/common/datas';

type Props = {
  caseStudy: CaseStudy;
  /** 타일 크기와 모서리. 예: 'h-[72px] w-[72px] rounded-[18px]' */
  className?: string;
  sizes: string;
};

/* 로고 바탕색 타일 위에 로고. 앱 아이콘은 타일을 꽉 채우고, 글자 로고는 안쪽 여백을 두고 가운데에 둔다. */
export default function ProjectIcon({ caseStudy, className, sizes }: Props) {
  const { logo, tile, iconFull } = caseStudy;
  return (
    <span
      className={clsx('relative block shrink-0 overflow-hidden', className)}
      style={{ background: tile }}
    >
      <span className={clsx('absolute', iconFull ? 'inset-0' : 'inset-[10%]')}>
        <Image
          src={logo}
          alt=''
          fill
          sizes={sizes}
          className={iconFull ? 'object-cover' : 'object-contain'}
        />
      </span>
    </span>
  );
}
