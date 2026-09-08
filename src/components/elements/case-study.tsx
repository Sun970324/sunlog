import clsx from 'clsx';
import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import ScreenshotGrid from '@/components/elements/screenshot-grid';
import AnimatedNumber from '@/components/elements/animated-number';
import { setLightboxOrigin } from '@/components/elements/lightbox';
import type { CaseStudy } from '@/common/datas';

type Props = {
  caseStudy: CaseStudy;
  index: number;
  total: number;
  onOpenLightbox: (index: number) => void;
};

export default function CaseStudyItem({ caseStudy, index, total, onOpenLightbox }: Props) {
  const { name, org, period, role, stacks, numbers, summary, problem, decision, result, links } =
    caseStudy;

  return (
    <Reveal as='article'>
      <Container wide className='grid items-start gap-x-20 md:grid-cols-[240px_minmax(0,1fr)]'>
        <div className='order-2 mt-10 flex flex-row flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6 md:order-none md:mt-0 md:flex-col md:border-0 md:pt-2 md:self-start md:sticky md:top-[80px]'>
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

        <div className='order-1 md:order-none'>
          <p className='mb-3 text-[13px] tabular-nums tracking-[0.04em] text-muted'>
            {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
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
          {links && links.length > 0 && (
            <p className='mt-2 flex flex-wrap gap-x-4 text-[14px]'>
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent underline underline-offset-4'
                >
                  {link.label} ↗
                </a>
              ))}
            </p>
          )}
          <p className='mt-8 text-[17px] leading-[1.7]'>{summary}</p>

          <h4 className='mb-2 mt-10 text-[14px] font-semibold text-muted'>문제</h4>
          <p className='text-[16px] leading-[1.7]'>{problem}</p>
          <h4 className='mb-2 mt-8 text-[14px] font-semibold text-muted'>판단</h4>
          <p className='text-[16px] leading-[1.7]'>{decision}</p>
          <h4 className='mb-2 mt-8 text-[14px] font-semibold text-muted'>결과</h4>
          <p className='text-[16px] leading-[1.7]'>{result}</p>
        </div>

        {caseStudy.images.length > 0 && (
          <div
            className={clsx(
              'order-3 mt-12 md:order-none',
              caseStudy.ratio === '16:9' ? 'md:col-start-2' : 'md:col-span-2'
            )}
          >
            <ScreenshotGrid
              images={caseStudy.images.slice(0, caseStudy.ratio === '16:9' ? 2 : 3)}
              ratio={caseStudy.ratio}
              alt={name}
              onOpen={(index, rect) => {
                setLightboxOrigin(rect);
                onOpenLightbox(index);
              }}
            />
          </div>
        )}
      </Container>
    </Reveal>
  );
}
