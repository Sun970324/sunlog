import { useState } from 'react';
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

      <div className='flex flex-col gap-20 pt-20 md:gap-[120px] md:pt-[120px]'>
        {caseStudies.map(caseStudy => (
          <CaseStudyItem
            key={caseStudy.id}
            caseStudy={caseStudy}
            onOpenLightbox={index =>
              setLightbox({
                images: caseStudy.images,
                index,
                ratio: caseStudy.ratio,
                alt: caseStudy.name,
              })
            }
          />
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
