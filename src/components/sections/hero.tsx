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
            웹과 앱을 만들어
          </span>
          <span data-reveal-item className='block'>
            스토어에 올리는 개발자입니다.
          </span>
        </h1>
        <p data-reveal-item className='mt-6 max-w-[560px] text-[18px] leading-[1.7] text-muted'>
          Next.js로 만든 구인구직 플랫폼에서 지도 검색 응답을 40초에서 5초로 줄였고 웹과 앱 네
          개를 기획부터 출시까지 완주했습니다. 만든 건 사용자 흐름을 직접 따라가 보고 나서
          배포합니다.
        </p>

        <div
          data-reveal-item
          className='mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-6 md:grid-cols-[auto_auto_auto_auto] md:justify-between'
        >
          {heroStats.map(stat => (
            <div key={stat.label}>
              <div className='whitespace-nowrap text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[32px]'>
                {stat.before && <span className='font-normal text-muted'>{stat.before} → </span>}
                <AnimatedNumber text={stat.value} from={stat.before} className='text-accent' />
              </div>
              <div className='mt-1.5 text-[14px] text-muted'>{stat.label}</div>
            </div>
          ))}
        </div>

        <div data-reveal-item className='mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[15px]'>
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
        </div>
      </Container>
    </Reveal>
  );
}
