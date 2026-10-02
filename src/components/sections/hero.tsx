import { useRef, useState } from 'react';
import Container from '@/components/elements/container';
import Reveal from '@/components/elements/reveal';

const EMAIL = 'ysw5202222@gmail.com';
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
      <Container wide className='pb-12 pt-16 md:pb-16 md:pt-24'>
        <p data-reveal-item className='text-[15px] text-muted'>
          프론트엔드 개발자
        </p>
        <h1 className='mt-4 text-[32px] font-semibold leading-[1.25] tracking-[-0.02em] md:text-[48px]'>
          <span data-reveal-item className='block'>
            사용자의 불편을 구조로 해결하는
          </span>
          <span data-reveal-item className='block'>
            개발자 윤선웅입니다.
          </span>
        </h1>
        <p data-reveal-item className='mt-5 max-w-[600px] text-[17px] leading-[1.7] text-muted'>
          위치 기반 구인구직 서비스와 수면 유도 사운드 앱의 개발을 맡아 프론트엔드, 백엔드, 배포까지
          다루며 풀스택 역량을 쌓았습니다. 그 경험으로 스도쿠 대전 앱과 고령 환자를 위한 전화 기반
          재활 서비스를 직접 기획하고 개발했습니다.
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
      </Container>
    </Reveal>
  );
}
