import Image from 'next/image';
import type { HistoryStage } from '@/common/datas';

type Props = {
  stages: HistoryStage[];
  alt: string;
  onOpen: (images: string[], index: number, rect: DOMRect) => void;
};

export default function HistoryStages({ stages, alt, onOpen }: Props) {
  return (
    <div className='flex flex-col gap-10'>
      {stages.map(stage => (
        <div key={stage.label}>
          <p className='text-[13px] tabular-nums tracking-[0.04em] text-muted'>{stage.label}</p>
          <div className='mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1'>
            <h4 className='text-[18px] font-semibold leading-[1.4] tracking-[-0.02em] text-fg'>
              {stage.title}
            </h4>
            <span className='text-[14px] text-muted'>{stage.period}</span>
          </div>
          <p className='mt-2 text-[16px] leading-[1.7]'>{stage.caption}</p>

          <div className='mt-4 flex gap-4 overflow-x-auto pb-1'>
            {stage.images.map((src, index) => (
              <button
                key={src}
                type='button'
                onClick={event => onOpen(stage.images, index, event.currentTarget.getBoundingClientRect())}
                aria-label={`${stage.label} 스크린샷 ${index + 1} 크게 보기`}
                className='relative block w-[120px] shrink-0 cursor-zoom-in overflow-hidden rounded-md border border-line bg-subtle aspect-[9/19.5] transition-[transform,border-color] duration-[280ms] hover:border-fg hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100 md:w-[140px]'
              >
                <Image
                  src={src}
                  alt={`${alt} ${stage.label} 화면 ${index + 1}`}
                  fill
                  sizes='140px'
                  className='object-cover'
                />
              </button>
            ))}
          </div>

          <ul className='mt-4 flex flex-col gap-1 text-[14px] leading-[1.7] text-muted'>
            {stage.added.map(item => (
              <li key={item} className='pl-4 -indent-4'>
                · {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
