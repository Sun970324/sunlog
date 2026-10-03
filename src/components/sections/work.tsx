import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, type KeyboardEvent, type TouchEvent } from 'react';
import Container from '@/components/elements/container';
import SectionLabel from '@/components/elements/section-label';
import Reveal from '@/components/elements/reveal';
import ProjectIcon from '@/components/elements/project-icon';
import CaseNumber from '@/components/elements/case-number';
import Chips from '@/components/elements/chips';
import Lightbox, { setLightboxOrigin } from '@/components/elements/lightbox';
import { caseStudies } from '@/common/datas';

type Props = {
  selected: number;
  onSelect: (index: number) => void;
};

/* 패널 스크린샷. 마우스를 올리면 살짝 커지고 누르면 크게 보기가 열린다.
   확대는 마우스가 있는 기기에서만. 터치 기기에서 탭한 뒤 확대가 남으면 갤러리가 세로로 넘쳐 페이지 스크롤을 가로챈다. */
const SHOT_CLASS =
  'block w-full cursor-pointer overflow-hidden border border-line bg-subtle transition-[transform,border-color] duration-[280ms] [@media(hover:hover)]:hover:scale-[1.03] [@media(hover:hover)]:hover:border-fg motion-reduce:transition-none motion-reduce:hover:scale-100';

const BRIEF_ROWS = [
  ['문제', 'problem'],
  ['판단', 'decision'],
  ['결과', 'result'],
] as const;

/* 앱 선반(아이콘 줄)에서 프로젝트를 고르면 아래 패널 하나만 바뀐다. */
export default function Work({ selected, onSelect }: Props) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const total = caseStudies.length;
  const current = caseStudies[selected];
  const prev = caseStudies[(selected + total - 1) % total];
  const next = caseStudies[(selected + 1) % total];
  const highlight = current.numbers[current.highlight];

  // 패널 스크린샷 크게 보기. 그 프로젝트의 기본 화면 전체를 좌우로 넘긴다.
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openLightbox = (index: number, rect: DOMRect) => {
    setLightboxOrigin(rect);
    setLightboxIndex(index);
  };

  // 넘어간 방향. 패널 내용이 그 방향에서 미끄러져 들어온다.
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const goTo = (index: number, dir: 'next' | 'prev') => {
    setDirection(dir);
    setLightboxIndex(null);
    onSelect(index);
  };
  const goNext = () => goTo((selected + 1) % total, 'next');
  const goPrev = () => goTo((selected + total - 1) % total, 'prev');

  const move = (index: number, dir: 'next' | 'prev') => {
    goTo(index, dir);
    tabRefs.current[index]?.focus();
  };

  const onShelfKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    if (event.key === 'ArrowRight') move((selected + 1) % total, 'next');
    else move((selected + total - 1) % total, 'prev');
  };

  // 터치 스와이프로 이전/다음 프로젝트. 가로로 밀어 보는 앱 화면 갤러리 안에서 시작한 터치는 갤러리 스크롤로 둔다.
  const touchRef = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    const touch = event.touches[0];
    touchRef.current = target.closest('[data-swipe-ignore]')
      ? null
      : { x: touch.clientX, y: touch.clientY };
  };
  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchRef.current;
    touchRef.current = null;
    if (!start) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    // 가로로 50px 이상, 세로보다 확실히 가로일 때만. 세로 스크롤과 헷갈리지 않게 한다.
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  return (
    <Reveal className='pb-16 pt-12 md:pb-24 md:pt-16'>
      <Container wide>
        <SectionLabel>Work</SectionLabel>

        <div
          role='tablist'
          aria-label='프로젝트'
          onKeyDown={onShelfKeyDown}
          className='-mx-1 mt-6 flex gap-1 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-2'
        >
          {caseStudies.map((item, index) => {
            const isSelected = index === selected;
            return (
              <button
                key={item.id}
                ref={node => {
                  tabRefs.current[index] = node;
                }}
                type='button'
                role='tab'
                id={`tab-${item.id}`}
                aria-selected={isSelected}
                aria-controls='work-panel'
                tabIndex={isSelected ? 0 : -1}
                onClick={() => {
                  if (index !== selected) goTo(index, index > selected ? 'next' : 'prev');
                }}
                className={clsx(
                  'flex min-w-[84px] shrink-0 flex-col items-center gap-2 rounded-[14px] px-2 pb-2 pt-2.5 transition-colors md:min-w-[104px] md:px-3',
                  isSelected ? 'bg-subtle text-fg' : 'text-muted hover:bg-subtle',
                )}
              >
                <ProjectIcon
                  caseStudy={item}
                  sizes='72px'
                  className={clsx(
                    'h-[60px] w-[60px] rounded-[15px] shadow-sm transition-transform md:h-[72px] md:w-[72px] md:rounded-[18px]',
                    isSelected && '-translate-y-0.5',
                  )}
                />
                <span className={clsx('text-[14px]', isSelected && 'font-semibold')}>
                  {item.name}
                </span>
                <span className='text-[12px]'>{item.year}</span>
              </button>
            );
          })}
        </div>

        <div
          id='work-panel'
          role='tabpanel'
          aria-labelledby={`tab-${current.id}`}
          className={`case-${current.id} mt-3 overflow-hidden rounded-[14px] border border-line bg-bg`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className='h-1.5' style={{ background: current.band }} />
          <div
            key={current.id}
            className={clsx(
              'grid gap-6 p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:gap-9 md:p-7',
              direction === 'next' && 'panel-enter-next',
              direction === 'prev' && 'panel-enter-prev',
            )}
          >
            <div className='min-w-0'>
              <div className='flex items-center gap-3.5'>
                <ProjectIcon
                  caseStudy={current}
                  sizes='44px'
                  className='h-11 w-11 rounded-[11px]'
                />
                <div className='min-w-0'>
                  <h3 className='m-0 text-[21px] font-semibold tracking-[-0.01em] md:text-[24px]'>
                    {current.name}
                  </h3>
                  <p className='m-0 text-[13px] text-muted'>
                    {current.org}, {current.period} · {current.role}
                  </p>
                </div>
              </div>

              <p className='mt-5 text-[17px] font-medium leading-[1.55] md:text-[18px]'>
                {current.problemTitle}
              </p>

              <div className='mt-4 flex flex-wrap items-baseline gap-2.5'>
                <CaseNumber number={highlight} className='text-[28px] md:text-[32px]' />
                <span className='text-[14px] text-muted'>{highlight.label}</span>
              </div>

              <dl className='mt-5 grid gap-x-3.5 gap-y-1 text-[15px] leading-[1.7] md:grid-cols-[40px_minmax(0,1fr)] md:gap-y-2.5'>
                {BRIEF_ROWS.map(([label, key]) => (
                  <div key={key} className='contents'>
                    <dt className='pt-0.5 text-[13px] font-semibold text-muted'>{label}</dt>
                    <dd className='m-0 mb-2.5 md:mb-0'>{current.brief[key]}</dd>
                  </div>
                ))}
              </dl>

              <div className='mt-6 flex flex-col gap-3 border-t border-line pt-4 md:flex-row md:flex-wrap md:items-center md:gap-x-4'>
                <div className='min-w-0 md:flex-1'>
                  <Chips items={current.stack} />
                </div>
                {current.links && (
                  <div className='flex flex-wrap gap-3.5 text-[14px]'>
                    {current.links.map(link => (
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
                <Link
                  href={`/work/${current.id}`}
                  className='whitespace-nowrap rounded-full bg-fg px-[18px] py-2.5 text-center text-[14px] font-semibold text-bg'
                >
                  자세히 보기
                </Link>
              </div>
            </div>

            {/* 웹은 가로 화면 1장, 앱은 세로 화면 3장. 모바일에서 앱 화면은 옆으로 밀어서 본다. 누르면 크게 보기 */}
            {current.wide ? (
              <button
                type='button'
                onClick={event => openLightbox(0, event.currentTarget.getBoundingClientRect())}
                aria-label={`${current.name} 화면 크게 보기`}
                className={clsx('relative aspect-[16/10] rounded-lg', SHOT_CLASS)}
              >
                <Image
                  src={current.images[0]}
                  alt={`${current.name} 화면`}
                  fill
                  sizes='(max-width: 768px) 100vw, 440px'
                  className='object-cover object-top'
                />
              </button>
            ) : (
              <div
                data-swipe-ignore
                className='grid snap-x snap-mandatory auto-cols-[42%] grid-flow-col gap-2.5 overflow-x-auto overflow-y-hidden pb-1 md:grid-flow-row md:grid-cols-3 md:overflow-visible'
              >
                {current.images.slice(0, 3).map((src, index) => (
                  <button
                    key={src}
                    type='button'
                    onClick={event =>
                      openLightbox(index, event.currentTarget.getBoundingClientRect())
                    }
                    aria-label={`${current.name} 화면 ${index + 1} 크게 보기`}
                    className={clsx('relative aspect-[9/19.5] snap-start rounded-xl', SHOT_CLASS)}
                  >
                    <Image
                      src={src}
                      alt={`${current.name} 화면 ${index + 1}`}
                      fill
                      sizes='(max-width: 768px) 42vw, 150px'
                      className='object-cover object-top'
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className='flex items-center justify-between border-t border-line px-5 py-3 text-[13px] text-muted md:px-7'>
            <button type='button' onClick={goPrev} className='max-w-[40%] truncate hover:text-fg'>
              ← {prev.name}
            </button>
            <span className='flex gap-1.5' aria-hidden>
              {caseStudies.map((item, index) => (
                <i
                  key={item.id}
                  className={clsx(
                    'block h-1.5 w-1.5 rounded-full',
                    index === selected ? 'bg-fg' : 'bg-line',
                  )}
                />
              ))}
            </span>
            <button type='button' onClick={goNext} className='max-w-[40%] truncate hover:text-fg'>
              {next.name} →
            </button>
          </div>
        </div>
      </Container>

      {lightboxIndex !== null && (
        <Lightbox
          images={current.images}
          index={lightboxIndex}
          ratio={current.wide ? '16:9' : '9:19.5'}
          alt={current.name}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </Reveal>
  );
}
