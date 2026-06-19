import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface CarouselProps {
  images: string[];
  imgIdx: number;
  onIndexChange: React.Dispatch<React.SetStateAction<number>>;
  onImageClick?: () => void;
  containerClassName?: string;
  overlay?: boolean;
}

const THRESHOLD = 80;
const MAX_OFFSET = 200;

const Carousel = ({
  images,
  imgIdx,
  onIndexChange,
  onImageClick,
  containerClassName = '',
  overlay = false,
}: CarouselProps) => {
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragMeta = useRef({ startX: 0, startY: 0, dir: null as 'h' | 'v' | null });
  const isDraggingRef = useRef(false);
  const didDragRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = (x: number, y: number) => {
    dragMeta.current = { startX: x, startY: y, dir: null };
    isDraggingRef.current = true;
    didDragRef.current = false;
    setIsDragging(true);
  };

  const handleMove = (x: number, y: number) => {
    if (!isDragging) return;
    const { startX, startY, dir } = dragMeta.current;
    const dx = x - startX;

    if (dir === null) {
      if (Math.abs(dx) < 5 && Math.abs(y - startY) < 5) return;
      dragMeta.current.dir = Math.abs(dx) >= Math.abs(y - startY) ? 'h' : 'v';
    }

    if (dragMeta.current.dir === 'v') return;

    didDragRef.current = true;
    setDragOffset(Math.max(Math.min(dx, MAX_OFFSET), -MAX_OFFSET));
  };

  const handleEnd = () => {
    if (!isDragging) return;
    if (dragMeta.current.dir === 'h' && images.length > 1) {
      if (Math.abs(dragOffset) > THRESHOLD) {
        onIndexChange(i =>
          dragOffset < 0 ? (i + 1) % images.length : (i - 1 + images.length) % images.length,
        );
      }
    }
    if (!didDragRef.current && onImageClick) onImageClick();
    setDragOffset(0);
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && (dragMeta.current.dir === 'h' || dragMeta.current.dir === null)) {
        e.preventDefault();
      }
    };
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => el.removeEventListener('touchmove', onTouchMove);
  }, []);

  const arrowClass =
    'absolute top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center text-[20px]';

  return (
    <>
      <div className={`relative overflow-hidden ${containerClassName}`}>
        <div
          ref={containerRef}
          className='h-full select-none cursor-pointer'
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease',
          }}
          onMouseDown={e => handleStart(e.clientX, e.clientY)}
          onMouseMove={e => handleMove(e.clientX, e.clientY)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={e => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchMove={e => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={handleEnd}
        >
          <Image
            key={imgIdx}
            fill
            alt={images[imgIdx]}
            src={`/assets/projects/${images[imgIdx]}`}
            className='object-contain pointer-events-none'
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={() => onIndexChange(i => (i - 1 + images.length) % images.length)}
              className={`${arrowClass} left-2`}
            >
              ‹
            </button>
            <button
              onClick={() => onIndexChange(i => (i + 1) % images.length)}
              className={`${arrowClass} right-2`}
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className='flex justify-center gap-x-2 mt-3'>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => onIndexChange(() => i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                overlay
                  ? i === imgIdx
                    ? 'bg-white'
                    : 'bg-white/30'
                  : i === imgIdx
                    ? 'bg-primary'
                    : 'bg-zinc-500 md:bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Carousel;
