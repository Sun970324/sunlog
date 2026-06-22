import { careerData } from '@/common/datas';
import { useEffect, useState } from 'react';
import Carousel from '../elements/carousel';
import SectionContainer from '../elements/section-container';
import SectionTitle from '../elements/section-title';

const Career = () => {
  const [imgIdxMap, setImgIdxMap] = useState<Record<string, number>>({});
  const [lightbox, setLightbox] = useState<{ id: string; images: string[] } | null>(null);

  const getImgIdx = (id: string) => imgIdxMap[id] ?? 0;
  const makeSetImgIdx = (id: string) => (action: React.SetStateAction<number>) =>
    setImgIdxMap(prev => ({
      ...prev,
      [id]: typeof action === 'function' ? action(prev[id] ?? 0) : action,
    }));

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  return (
    <SectionContainer className='py-[40px] md:py-[70px]'>
      <div className='mx-auto w-fit'>
        <SectionTitle title='Career' />
      </div>
      <p className='text-center text-gray-400 md:text-gray-500 text-[14px] mt-2 mb-10 md:mb-14'>
        {/* 실무 경력 총 1년 6개월 */}
      </p>

      <div className='max-w-3xl mx-auto'>
        <div className='relative border-l-2 border-primary/30 ml-3 md:ml-6'>
          {careerData.map((item, idx) => (
            <div
              key={item.id}
              className={`relative pl-8 md:pl-12 ${idx < careerData.length - 1 ? 'pb-12' : ''}`}
            >
              <div className='absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary' />

              <div className='flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-1'>
                <span className='font-bold text-primary text-[16px] md:text-[18px]'>
                  {item.company}
                </span>
                <span className='text-gray-400 text-[13px]'>{item.date}</span>
              </div>

              <div className='font-bold text-[20px] md:text-[22px] text-white md:text-gray-800 mb-1'>
                {item.name}
              </div>
              <div className='text-gray-400 md:text-gray-500 text-[13px] mb-4'>
                {item.subtitle}&nbsp;&nbsp;·&nbsp;&nbsp;{item.role}
              </div>

              <ul className='list-disc ml-4 text-[14px] leading-7 text-gray-200 md:text-gray-700 mb-4'>
                {item.content.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>

              <p className='border border-secondary-dark bg-secondary-light rounded-lg px-3 py-1 text-[13px] text-gray-800 w-fit'>
                {item.stacks}
              </p>

              {item.images && item.images.length > 0 && (
                <div className='mt-5'>
                  <Carousel
                    images={item.images}
                    imgIdx={getImgIdx(item.id)}
                    onIndexChange={makeSetImgIdx(item.id)}
                    onImageClick={() => setLightbox({ id: item.id, images: item.images! })}
                    containerClassName='h-64 bg-zinc-800 md:bg-gray-100 rounded-lg'
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <>
          <div
            className='fixed inset-0 z-[60] bg-black/90'
            onClick={() => setLightbox(null)}
          />
          <button
            className='fixed top-4 right-4 z-[62] text-white text-[28px] leading-none w-10 h-10 flex items-center justify-center bg-black/40 rounded-full hover:bg-black/60'
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <div className='fixed inset-0 z-[61] flex items-center justify-center px-4'>
            <Carousel
              images={lightbox.images}
              imgIdx={getImgIdx(lightbox.id)}
              onIndexChange={makeSetImgIdx(lightbox.id)}
              containerClassName='w-full h-[80vh] max-w-5xl'
              overlay
            />
          </div>
        </>
      )}
    </SectionContainer>
  );
};

export default Career;
