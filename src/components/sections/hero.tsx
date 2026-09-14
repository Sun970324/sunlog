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
          프론트엔드 개발자 윤선웅
        </p>
        <h1 className='mt-4 text-[36px] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[56px]'>
          <span data-reveal-item className='block'>
            Create value with code
          </span>
          <span data-reveal-item className='block'>
            Plan, Build, Improve
          </span>
        </h1>
        <p data-reveal-item className='mt-6 max-w-[560px] text-[18px] leading-[1.7] text-muted'>
          <span className='block'>
            Next.js와 Flutter로 웹과 앱 4개를 기획부터 스토어 출시까지 맡았습니다.
          </span>
          <span className='block'>
            두 회사 모두 개발자가 저 혼자였고, 리뷰어가 없는 공백은 테스트로 메웠습니다.
          </span>
          <span className='block'>
            AI로 만든 코드는 읽기 전에 먼저 실행해 사용자 흐름대로 확인한 뒤 배포합니다.
          </span>
        </p>
        <div
          data-reveal-item
          className='mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-6 md:grid-cols-[auto_auto_auto_auto] md:justify-between'
        >
          {heroStats.map(stat => (
            <div key={stat.label}>
              <div className='whitespace-nowrap text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] md:text-[32px]'>
                {stat.before && (
                  <span className='mr-2 font-normal text-muted line-through decoration-1'>
                    {stat.before}
                  </span>
                )}
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
