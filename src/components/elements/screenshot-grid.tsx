import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  images: string[];
  ratio: '16:9' | '9:19.5';
  alt: string;
  onOpen: (index: number, rect: DOMRect) => void;
};

export default function ScreenshotGrid({ images, ratio, alt, onOpen }: Props) {
  const isWide = ratio === '16:9';

  return (
    <div
      className={clsx('grid gap-4', isWide && 'md:grid-cols-2')}
      style={isWide ? undefined : { gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}
    >
      {images.map((src, index) => (
        <button
          key={src}
          type='button'
          onClick={event => onOpen(index, event.currentTarget.getBoundingClientRect())}
          aria-label={`스크린샷 ${index + 1} 크게 보기`}
          className={clsx(
            'relative block w-full cursor-zoom-in overflow-hidden rounded-md border border-line bg-subtle',
            'transition-[transform,border-color] duration-[280ms] hover:border-fg hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100',
            isWide ? 'aspect-[16/9]' : 'aspect-[9/19.5]',
            isWide && index === 0 && 'md:col-span-2',
          )}
        >
          <Image
            src={src}
            alt={`${alt} 화면 ${index + 1}`}
            fill
            sizes={
              isWide
                ? index === 0
                  ? '(max-width: 768px) 100vw, 1040px'
                  : '(max-width: 768px) 100vw, 520px'
                : '(max-width: 768px) 50vw, 200px'
            }
            className='object-cover'
          />
        </button>
      ))}
    </div>
  );
}
