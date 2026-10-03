import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  images: string[];
  alt: string;
  /** 가로로 넓은 화면 묶음이면 열을 줄여 크게 보여 준다. */
  wide?: boolean;
  onOpen: (index: number, rect: DOMRect) => void;
};

/* 화면 폭에 따른 열 수. 기본은 768px 미만 2열, 1024px 미만 3열, 그 이상 4열. wide는 768px 미만 1열, 그 이상 2열 */
const useColumnCount = (wide: boolean) => {
  const [count, setCount] = useState(wide ? 1 : 2);

  useEffect(() => {
    const md = window.matchMedia('(min-width: 768px)');
    const lg = window.matchMedia('(min-width: 1024px)');
    const update = () =>
      setCount(wide ? (md.matches ? 2 : 1) : lg.matches ? 4 : md.matches ? 3 : 2);
    update();
    md.addEventListener('change', update);
    lg.addEventListener('change', update);
    return () => {
      md.removeEventListener('change', update);
      lg.removeEventListener('change', update);
    };
  }, [wide]);

  return count;
};

/* 사진마다 원래 비율을 그대로 두고 열에 차례로 나눠 쌓는다. 휴대폰 화면과 가로 화면이 섞여도 잘리거나 늘어나지 않고, 모든 열이 채워진다. */
export default function ScreenshotGrid({ images, alt, wide = false, onOpen }: Props) {
  const count = Math.min(useColumnCount(wide), images.length);
  const columns = Array.from({ length: count }, (_, col) =>
    images.map((src, index) => ({ src, index })).filter(({ index }) => index % count === col),
  );

  return (
    <div className='flex items-start gap-4'>
      {columns.map((column, col) => (
        <div key={col} className='flex min-w-0 flex-1 flex-col gap-4'>
          {column.map(({ src, index }) => (
            <button
              key={src}
              type='button'
              onClick={event => onOpen(index, event.currentTarget.getBoundingClientRect())}
              aria-label={`스크린샷 ${index + 1} 크게 보기`}
              className='block w-full cursor-pointer overflow-hidden rounded-md border border-line bg-subtle transition-[transform,border-color] duration-[280ms] hover:scale-[1.02] hover:border-fg motion-reduce:transition-none motion-reduce:hover:scale-100'
            >
              <Image
                src={src}
                alt={`${alt} 화면 ${index + 1}`}
                width={0}
                height={0}
                sizes={wide ? '(max-width: 768px) 100vw, 520px' : '(max-width: 768px) 50vw, 260px'}
                className='block h-auto w-full'
              />
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
