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
      className={clsx(
        'grid justify-end gap-4',
        isWide ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-[repeat(3,minmax(0,220px))]'
      )}
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
            isWide ? 'aspect-[4/3]' : 'aspect-[9/19.5]',
            index >= 2 && 'hidden md:block',
          )}
        >
          <Image
            src={src}
            alt={`${alt} 화면 ${index + 1}`}
            fill
            sizes={isWide ? '(max-width: 768px) 100vw, 340px' : '(max-width: 768px) 50vw, 220px'}
            className='object-cover'
          />
        </button>
      ))}
    </div>
  );
}
