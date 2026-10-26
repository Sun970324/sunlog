import clsx from 'clsx';
import { useRef, useState, type CSSProperties } from 'react';
import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';

const EMAIL = 'ysw5202222@gmail.com';

/* 오른쪽에 떠 있는 성과 카드. case-{id} 클래스로 accent가 프로젝트 색을 따른다.
   넓은 화면에서는 position으로 살짝 겹쳐 흩어 두고, 좁은 화면에서는 2열로 정리한다. */
const HERO_CARDS = [
  {
    id: 'go2work',
    name: '출근하자',
    label: '지도 표시 시간',
    before: '약 30초',
    after: '2초 안팎',
    position: 'lg:left-0 lg:top-0',
  },
  {
    id: 'sudoku',
    name: '스도쿠 리그',
    label: '1:1 매칭 성공률',
    before: '3.5%',
    after: '28.6%',
    position: 'lg:left-[170px] lg:top-[70px]',
  },
  {
    id: 'kkulkkuk',
    name: '꿀꺽',
    label: '전화를 받은 뒤 무음',
    before: '15초',
    after: '0초',
    position: 'lg:left-[10px] lg:top-[180px]',
  },
  {
    id: 'highsleep',
    name: 'HighSleep',
    label: '반복 재생 소리 공백',
    before: '1초',
    after: '0초',
    position: 'lg:left-[170px] lg:top-[250px]',
  },
];
const PILL_CLASS =
  'inline-flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2 text-[14px] text-fg transition-colors hover:border-accent';

export default function Hero() {
  const [copyLabel, setCopyLabel] = useState('복사');
  const emailRef = useRef<HTMLSpanElement>(null);

  // 클립보드를 쓸 수 없는 환경이면 주소 글자를 선택해 두어 직접 복사하게 한다.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyLabel('복사됨');
    } catch {
      const el = emailRef.current;
      const selection = window.getSelection();
      if (!el || !selection) return;
      const range = document.createRange();
      range.selectNodeContents(el);
      selection.removeAllRanges();
      selection.addRange(range);
      setCopyLabel('선택됨');
    }
  };

  return (
    <Reveal as='section' stagger staggerStep={110} className='hero-seq'>
      <Container
        wide
        className='grid gap-12 pb-12 pt-16 md:pb-16 md:pt-24 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center'
      >
        <div>
          <p data-reveal-item className='text-[15px] text-muted'>
            프론트엔드 개발자
          </p>
          <h1 className='mt-4 text-[32px] font-semibold leading-[1.25] tracking-[-0.02em] md:text-[48px] lg:text-[40px] xl:text-[48px]'>
            <span data-reveal-item className='block'>
              사용자를 멈춰 세우는 문제는
            </span>
            <span data-reveal-item className='block'>
              끝까지 파고들어 해결합니다.
            </span>
          </h1>
          <p data-reveal-item className='mt-5 max-w-[600px] text-[17px] leading-[1.7] text-muted'>
            구인구직 서비스의 지도 마커 표시를 약 30초에서 2초 안팎으로, 실시간 대결 앱의 매칭
            성공률을 3.5%에서 28.6%로 개선했습니다.
          </p>
          <div data-reveal-item className='mt-6 flex flex-wrap gap-2.5'>
            <button type='button' onClick={copyEmail} className={PILL_CLASS}>
              <span ref={emailRef}>{EMAIL}</span>
              <span className='text-[12px] text-muted' aria-live='polite'>
                {copyLabel}
              </span>
            </button>
            <a
              href='https://github.com/Sun970324'
              target='_blank'
              rel='noreferrer'
              className={PILL_CLASS}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <ul className='m-0 grid list-none grid-cols-2 gap-3 p-0 lg:relative lg:block lg:h-[350px]'>
          {HERO_CARDS.map((card, i) => (
            <li
              key={card.id}
              data-reveal-item
              className={clsx(
                'hero-card lg:absolute lg:w-[230px]',
                `case-${card.id}`,
                card.position,
              )}
              style={{ transitionDelay: `${i * 250}ms` }}
            >
              {/* 등장 뒤에는 카드마다 다른 박자로 몇 픽셀만 떠 있는다. */}
              <div
                className='hero-float rounded-[14px] border border-line bg-subtle px-4 py-3.5'
                style={
                  {
                    '--float-duration': `${6 + i * 1.3}s`,
                    '--float-delay': `${-i * 1.7}s`,
                  } as CSSProperties
                }
              >
                <p className='m-0 flex items-center gap-1.5 text-[12px] text-muted'>
                  <span className='h-[7px] w-[7px] rounded-full bg-accent' aria-hidden />
                  {card.name}
                </p>
                <p className='m-0 mt-2 text-[13px] text-muted'>{card.label}</p>
                <p className='m-0 mt-0.5 flex flex-wrap items-baseline gap-x-2'>
                  <s className='text-[15px] text-muted decoration-1'>{card.before}</s>
                  <span className='text-[22px] font-semibold tracking-[-0.02em] text-accent md:text-[24px]'>
                    {card.after}
                  </span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Reveal>
  );
}
