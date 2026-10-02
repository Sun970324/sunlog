import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Footer from '@/components/footer';
import TopBar from '@/components/top-bar';
import Container from '@/components/elements/container';
import CaseNumber from '@/components/elements/case-number';
import Chips from '@/components/elements/chips';
import MetricBars from '@/components/elements/metric-bars';
import ScreenshotGrid from '@/components/elements/screenshot-grid';
import Lightbox, { setLightboxOrigin } from '@/components/elements/lightbox';
import { diagramsByCase } from '@/components/elements/diagrams';
import { caseStudies } from '@/common/datas';
import { saveSelectedCase } from '@/common/selected-case';

type Props = { id: string };

export const getStaticPaths: GetStaticPaths = () => ({
  paths: caseStudies.map(item => ({ params: { id: item.id } })),
  fallback: false,
});

// 구조도는 JSX라 props로 넘길 수 없어서 id만 넘기고 컴포넌트에서 데이터를 찾는다.
export const getStaticProps: GetStaticProps<Props> = ({ params }) => ({
  props: { id: String(params?.id) },
});

export default function WorkDetail({ id }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // 이름과 문제 제목 묶음이 헤더 밑으로 지나가면 헤더에 프로젝트 정보를 띄운다.
  const titleRef = useRef<HTMLElement>(null);
  const [showCase, setShowCase] = useState(false);
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowCase(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { rootMargin: '-56px 0px 0px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  // 이전/다음 프로젝트로 넘어가도 같은 컴포넌트가 재사용되므로 열려 있던 확대 보기를 닫는다.
  // 지금 보는 프로젝트를 기억해 두면 메인으로 돌아갔을 때 이 프로젝트가 선택돼 있다.
  useEffect(() => {
    setLightboxIndex(null);
    saveSelectedCase(id);
  }, [id]);
  const index = caseStudies.findIndex(item => item.id === id);
  const caseStudy = caseStudies[index];
  const total = caseStudies.length;
  const prev = caseStudies[(index + total - 1) % total];
  const next = caseStudies[(index + 1) % total];
  const diagrams = diagramsByCase[id];
  const ratio = caseStudy.wide ? '16:9' : '9:19.5';

  const sections = [
    { label: '배경', body: caseStudy.summary },
    { label: '문제', body: caseStudy.problem },
    { label: '판단', body: caseStudy.decision },
    { label: '결과', body: caseStudy.result },
  ];

  return (
    <>
      <Head>
        <title>{`${caseStudy.name} | Sun's log`}</title>
      </Head>
      <TopBar caseStudy={caseStudy} showCase={showCase} />
      <main className={`case-${id}`}>
        <Container wide className='flex flex-col gap-8 pb-20 pt-8 md:pt-12'>
          <Link href='/' className='self-start text-[14px] text-muted hover:text-fg'>
            ← Work
          </Link>

          <div
            className='flex aspect-[16/8] items-center justify-center overflow-hidden rounded-[14px] md:aspect-[16/5]'
            style={{ background: caseStudy.tile }}
          >
            <div
              className={
                caseStudy.iconFull
                  ? 'relative aspect-square w-[22%] overflow-hidden rounded-[22%] md:w-[14%]'
                  : 'relative aspect-[382/94] w-[50%] md:w-[34%]'
              }
            >
              <Image
                src={caseStudy.logo}
                alt={`${caseStudy.name} 로고`}
                fill
                sizes='(max-width: 768px) 50vw, 340px'
                className={caseStudy.iconFull ? 'object-cover' : 'object-contain'}
                priority
              />
            </div>
          </div>

          <header ref={titleRef} className='flex flex-col gap-2'>
            <h1 className='m-0 text-[28px] font-semibold tracking-[-0.02em] md:text-[36px]'>
              {caseStudy.name}
            </h1>
            <p className='m-0 text-[14px] text-muted'>
              {caseStudy.org}, {caseStudy.period} · {caseStudy.role}
            </p>
            <p className='m-0 mt-2 text-[18px] font-medium leading-[1.55] md:text-[20px]'>
              {caseStudy.problemTitle}
            </p>
          </header>

          <div className='flex flex-wrap gap-x-8 gap-y-5'>
            {caseStudy.numbers.map(number => (
              <div key={number.label} className='flex flex-col gap-1'>
                <CaseNumber number={number} className='text-[26px] md:text-[30px]' />
                <span className='text-[13px] text-muted'>{number.label}</span>
              </div>
            ))}
          </div>

          <div className='flex flex-col gap-7'>
            {sections.map(section => (
              <section
                key={section.label}
                className='grid gap-x-6 gap-y-2 md:grid-cols-[72px_minmax(0,1fr)]'
              >
                <h2 className='m-0 pt-0.5 text-[14px] font-semibold text-muted'>{section.label}</h2>
                <p className='m-0 max-w-[65ch] text-[16px] leading-[1.8]'>{section.body}</p>
              </section>
            ))}
          </div>

          {diagrams?.map(diagram => (
            <figure key={diagram.caption} className='m-0'>
              <div className='rounded-[10px] border border-line p-4'>
                <div className='grid gap-6 md:grid-cols-2'>
                  <div>
                    <p className='mb-2 text-[12px] tracking-[0.04em] text-muted'>
                      {diagram.before.label}
                    </p>
                    {diagram.before.svg}
                  </div>
                  <div className='border-t border-line pt-4 md:border-0 md:pt-0'>
                    <p className='mb-2 text-[12px] tracking-[0.04em] text-muted'>
                      {diagram.after.label}
                    </p>
                    {diagram.after.svg}
                  </div>
                </div>
                {diagram.metrics && (
                  <div className='mt-6 border-t border-line pt-5'>
                    <MetricBars metrics={diagram.metrics} />
                  </div>
                )}
              </div>
              <figcaption className='mt-3 text-[13px] leading-[1.6] text-muted'>
                {diagram.caption}
              </figcaption>
            </figure>
          ))}

          <ScreenshotGrid
            images={caseStudy.images}
            alt={caseStudy.name}
            wide={caseStudy.wide}
            onOpen={(imageIndex, rect) => {
              setLightboxOrigin(rect);
              setLightboxIndex(imageIndex);
            }}
          />

          {/* 비율이 다른 화면(관리자 웹, 모바일 앱, 태블릿)은 기본 갤러리에 섞으면 너무 작거나 커져서 따로 묶는다. 확대 보기는 앞 사진에 이어서 넘긴다. */}
          {caseStudy.extraGallery && (
            <section className='flex flex-col gap-4'>
              <h2 className='m-0 text-[14px] font-semibold text-muted'>
                {caseStudy.extraGallery.title}
              </h2>
              <ScreenshotGrid
                images={caseStudy.extraGallery.images}
                alt={`${caseStudy.name} ${caseStudy.extraGallery.title}`}
                wide={caseStudy.extraGallery.wide}
                onOpen={(imageIndex, rect) => {
                  setLightboxOrigin(rect);
                  setLightboxIndex(caseStudy.images.length + imageIndex);
                }}
              />
            </section>
          )}

          <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
            <Chips items={caseStudy.stack} />
            {caseStudy.links && (
              <div className='flex flex-wrap gap-3.5 text-[14px]'>
                {caseStudy.links.map(link => (
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
              </div>
            )}
          </div>

          <nav
            className='flex justify-between gap-4 border-t border-line pt-6'
            aria-label='다른 프로젝트'
          >
            <Link href={`/work/${prev.id}`} className='flex flex-col gap-1 hover:text-accent'>
              <span className='text-[12px] text-muted'>이전 프로젝트</span>← {prev.name}
            </Link>
            <Link
              href={`/work/${next.id}`}
              className='flex flex-col items-end gap-1 text-right hover:text-accent'
            >
              <span className='text-[12px] text-muted'>다음 프로젝트</span>
              {next.name} →
            </Link>
          </nav>
        </Container>
      </main>
      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          images={[...caseStudy.images, ...(caseStudy.extraGallery?.images ?? [])]}
          index={lightboxIndex}
          ratio={ratio}
          alt={caseStudy.name}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </>
  );
}
