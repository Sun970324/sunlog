import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';
import AnimatedNumber from '@/components/elements/animated-number';
import { heroStats } from '@/common/datas';

const LINK_CLASS = 'link-underline hover:text-accent';

export default function Hero() {
  return (
    <Reveal
      as='section'
      stagger
      staggerStep={110}
      className='hero-seq section-fill flex flex-col justify-center'
    >
      <Container className='py-16'>
        <p data-reveal-item className='text-[15px] text-muted'>
          윤선웅 · 프론트엔드 개발자
        </p>
        <h1 className='mt-4 text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[56px]'>
          <span data-reveal-item className='block'>
            기획부터 출시까지,
          </span>
          <span data-reveal-item className='block'>
            끝까지 책임집니다.
          </span>
        </h1>
        <p
          data-reveal-item
          className='mt-6 max-w-[560px] text-[18px] leading-[1.7] text-muted'
        >
          AI가 만든 코드는 사용자 흐름으로 검증해 제품 품질로 책임집니다.
        </p>

        <div
          data-reveal-item
          className='mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-6 md:grid-cols-[auto_auto_auto_auto] md:justify-between'
        >
          {heroStats.map(stat => (
            <div key={stat.label}>
              <div className='whitespace-nowrap text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[32px]'>
                {stat.before && (
                  <span className='font-normal text-muted'>{stat.before} → </span>
                )}
                <AnimatedNumber
                  text={stat.value}
                  from={stat.before}
                  className='text-accent'
                />
              </div>
              <div className='mt-1.5 text-[14px] text-muted'>{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          data-reveal-item
          className='mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[15px]'
        >
          <a
            href='https://github.com/Sun970324'
            target='_blank'
            rel='noreferrer'
            className={LINK_CLASS}
          >
            GitHub
          </a>
          <a href='mailto:ysw5202222@gmail.com' className={LINK_CLASS}>
            ysw5202222@gmail.com
          </a>
          <a href='/resume.pdf' target='_blank' rel='noreferrer' className={LINK_CLASS}>
            이력서 PDF
          </a>
        </div>
      </Container>
    </Reveal>
  );
}
