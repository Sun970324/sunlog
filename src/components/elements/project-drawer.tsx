import { ProjectData } from '@/common/datas';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectData;
}

const THRESHOLD = 80;
const MAX_OFFSET = 200;

const ProjectDrawer = ({ isOpen, onClose, data }: Props) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragMeta = useRef({ startX: 0, startY: 0, dir: null as 'h' | 'v' | null });

  const handleStart = (x: number, y: number) => {
    dragMeta.current = { startX: x, startY: y, dir: null };
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

    setDragOffset(Math.max(Math.min(dx, MAX_OFFSET), -MAX_OFFSET));
  };

  const handleEnd = () => {
    if (!isDragging) return;
    if (dragMeta.current.dir === 'h' && data.images.length > 1) {
      if (Math.abs(dragOffset) > THRESHOLD) {
        setImgIdx(i => dragOffset < 0
          ? (i + 1) % data.images.length
          : (i - 1 + data.images.length) % data.images.length
        );
      }
    }
    setDragOffset(0);
    setIsDragging(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setImgIdx(0);
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed z-50 overflow-y-auto bg-zinc-900 md:bg-white transition-transform duration-300 ease-in-out bottom-0 left-0 right-0 max-h-[90vh] rounded-t-2xl md:top-0 md:right-0 md:bottom-0 md:left-auto md:w-[500px] md:max-h-none md:h-full md:rounded-none md:rounded-l-2xl ${
          isOpen
            ? 'translate-y-0 md:translate-x-0'
            : 'translate-y-full md:translate-x-full md:translate-y-0'
        }`}
      >
        {/* Handle (모바일 전용) */}
        <div className='flex justify-center pt-3 pb-1 md:hidden'>
          <div className='w-12 h-1 bg-zinc-600 rounded-full' />
        </div>

        {/* Sticky Header */}
        <div className='bg-gray-800 text-white flex justify-between items-center px-4 py-3 sticky top-0 z-10'>
          <div className='font-bold text-[18px]'>{data.name}</div>
          <button
            onClick={onClose}
            className='text-gray-300 hover:text-white text-[22px] leading-none w-8 h-8 flex items-center justify-center'
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className='px-4 pb-8'>
          <div className='my-3 text-gray-400 text-[14px]'>{data.date}</div>
          <div className='my-3'>
            <div className='font-bold text-[20px] text-white md:text-gray-800'>Info</div>
            <p className='font-bold mb-1 text-white md:text-gray-800'>{data.subtitle}</p>
            <ol className='list-disc ml-4 text-[14px] leading-6 mb-2 text-gray-200 md:text-gray-800'>
              {data.content.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ol>
          </div>
          <div className='my-3'>
            <div className='font-bold text-[20px] text-white md:text-gray-800'>Meaning</div>
            {data.meaning.map((el, idx) => (
              <p key={idx} className='text-[14px] my-2 text-gray-200 md:text-gray-800 whitespace-pre-line'>
                {el}
              </p>
            ))}
          </div>

          {/* Images 캐러셀 */}
          {data.images.length > 0 && (
            <>
              <div className='font-bold text-[20px] text-white md:text-gray-800 mb-3'>Images</div>
              <div className='relative overflow-hidden rounded-lg'>
                {/* 드래그 가능 이미지 영역 */}
                <div
                  className='cursor-grab active:cursor-grabbing select-none'
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
                    alt={data.images[imgIdx]}
                    width={500}
                    height={400}
                    src={`/assets/projects/${data.images[imgIdx]}`}
                    className='w-full h-auto pointer-events-none'
                  />
                </div>

                {/* 화살표 버튼 (드래그 div 외부, transform 미적용) */}
                {data.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setImgIdx(i => (i - 1 + data.images.length) % data.images.length)}
                      className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center text-[20px]'
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setImgIdx(i => (i + 1) % data.images.length)}
                      className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center text-[20px]'
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* 점 인디케이터 */}
              {data.images.length > 1 && (
                <div className='flex justify-center gap-x-2 mt-3'>
                  {data.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImgIdx(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === imgIdx ? 'bg-primary' : 'bg-zinc-500 md:bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDrawer;
