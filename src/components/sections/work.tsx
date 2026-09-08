import { Fragment, useState } from 'react';
import Container from '@/components/elements/container';
import SectionLabel from '@/components/elements/section-label';
import Reveal from '@/components/elements/reveal';
import CaseStudyItem from '@/components/elements/case-study';
import Lightbox from '@/components/elements/lightbox';
import { caseStudies } from '@/common/datas';

type LightboxState = {
  images: string[];
  index: number;
  ratio: '16:9' | '9:19.5';
  alt: string;
};

export default function Work() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  return (
    <div className='pb-16 pt-16 md:pb-[96px] md:pt-[96px]'>
      <Reveal>
        <Container>
          <SectionLabel>Work</SectionLabel>
        </Container>
      </Reveal>

      <div className='flex flex-col gap-16 pt-16 md:gap-20 md:pt-20'>
        {caseStudies.map((caseStudy, idx) => (
          <Fragment key={caseStudy.id}>
            {idx > 0 && (
              <Container wide>
                <hr className='m-0 border-0 border-t border-line' />
              </Container>
            )}
            <CaseStudyItem
              caseStudy={caseStudy}
              index={idx + 1}
              total={caseStudies.length}
              onOpenLightbox={index =>
                setLightbox({
                  images: caseStudy.images,
                  index,
                  ratio: caseStudy.ratio,
                  alt: caseStudy.name,
                })
              }
            />
          </Fragment>
        ))}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          ratio={lightbox.ratio}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
          onIndexChange={index => setLightbox(prev => (prev ? { ...prev, index } : prev))}
        />
      )}
    </div>
  );
}
