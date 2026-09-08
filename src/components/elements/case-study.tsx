import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import ScreenshotGrid from '@/components/elements/screenshot-grid';
import AnimatedNumber from '@/components/elements/animated-number';
import { setLightboxOrigin } from '@/components/elements/lightbox';
import type { CaseStudy } from '@/common/datas';

type Props = {
  caseStudy: CaseStudy;
  onOpenLightbox: (index: number) => void;
};

export default function CaseStudyItem({ caseStudy, onOpenLightbox }: Props) {
  const { name, org, period, role, stacks, numbers, summary, problem, decision, result } =
    caseStudy;

  return (
    <Reveal as='article'>
      <Container wide className='grid items-start gap-x-20 md:grid-cols-[240px_minmax(0,1fr)]'>
        <div className='mb-8 flex flex-col gap-4 md:mb-0 md:self-start md:sticky md:top-[80px] md:pt-2'>
          {numbers.map(number => (
            <div key={number.label}>
              <div className='text-[40px] font-semibold leading-[1.1] tracking-[-0.03em] text-accent'>
                {number.before && (
                  <span className='font-normal text-muted'>{number.before} → </span>
                )}
                <AnimatedNumber text={number.value} from={number.before} />
              </div>
              <div className='mt-1 text-[13px] text-muted'>{number.label}</div>
            </div>
          ))}
        </div>

        <div>
          <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[14px] text-muted'>
            <h3 className='text-[28px] font-semibold leading-[1.3] tracking-[-0.02em] text-fg'>
              {name}
            </h3>
            <span>
              {org} · {period}
            </span>
          </div>
          <p className='mt-2 text-[14px] text-muted'>
            {role} · {stacks}
          </p>
          <p className='mt-8 text-[17px] leading-[1.7]'>{summary}</p>

          <h4 className='mb-2 mt-10 text-[14px] font-semibold text-muted'>문제</h4>
          <p className='text-[16px] leading-[1.7]'>{problem}</p>
          <h4 className='mb-2 mt-8 text-[14px] font-semibold text-muted'>판단</h4>
          <p className='text-[16px] leading-[1.7]'>{decision}</p>
          <h4 className='mb-2 mt-8 text-[14px] font-semibold text-muted'>결과</h4>
          <p className='text-[16px] leading-[1.7]'>{result}</p>
        </div>

        <div className='mt-12 md:col-span-2'>
          <ScreenshotGrid
            images={caseStudy.images.slice(0, 3)}
            ratio={caseStudy.ratio}
            alt={name}
            onOpen={(index, rect) => {
              setLightboxOrigin(rect);
              onOpenLightbox(index);
            }}
          />
        </div>
      </Container>
    </Reveal>
  );
}
