import { ProjectData } from '@/common/datas';
import { useEffect, useState } from 'react';
import Carousel from './carousel';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: ProjectData;
}

const ProjectDrawer = ({ isOpen, onClose, data }: Props) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        isLightboxOpen ? setIsLightboxOpen(false) : onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, isLightboxOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setImgIdx(0);
      setIsLightboxOpen(false);
    }
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

          {data.images.length > 0 && (
            <>
              <div className='font-bold text-[20px] text-white md:text-gray-800 mb-3'>Images</div>
              <Carousel
                images={data.images}
                imgIdx={imgIdx}
                onIndexChange={setImgIdx}
                onImageClick={() => setIsLightboxOpen(true)}
                containerClassName='h-72 bg-zinc-800 md:bg-gray-100 rounded-lg'
              />
            </>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <>
          <div
            className='fixed inset-0 z-[60] bg-black/90'
            onClick={() => setIsLightboxOpen(false)}
          />
          <button
            className='fixed top-4 right-4 z-[62] text-white text-[28px] leading-none w-10 h-10 flex items-center justify-center bg-black/40 rounded-full hover:bg-black/60'
            onClick={() => setIsLightboxOpen(false)}
          >
            ✕
          </button>
          <div className='fixed inset-0 z-[61] flex flex-col items-center justify-center px-4'>
            <Carousel
              images={data.images}
              imgIdx={imgIdx}
              onIndexChange={setImgIdx}
              containerClassName='w-full h-[80vh] max-w-5xl'
              overlay
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDrawer;
