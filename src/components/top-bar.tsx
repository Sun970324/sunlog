import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect, useState, type CSSProperties } from 'react';
import ProjectIcon from '@/components/elements/project-icon';
import type { CaseStudy } from '@/common/datas';

type Props = {
  /** 상세 페이지에서 넘긴다. showCase가 켜지면 로고 옆에 프로젝트 썸네일과 이름이 나타난다. */
  caseStudy?: CaseStudy;
  showCase?: boolean;
};

/* 프로젝트 정보가 나타날 때는 썸네일, 이름 순서로 조금씩 늦게 떠오르고, 사라질 때는 한 번에 내려간다. */
const rise = (visible: boolean, order: number): CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(10px)',
  transitionDelay: visible ? `${order * 70}ms` : '0ms',
});
const RISE_CLASS =
  'transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none';

const TopBar = ({ caseStudy, showCase = false }: Props) => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const caseVisible = Boolean(caseStudy) && showCase;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 상세 페이지에서는 로고가 메인으로 돌아가는 링크 역할을 한다.
  const scrollTop = () => {
    if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' });
    else router.push('/');
  };

  return (
    <header
      className={clsx(
        'sticky top-0 z-30 border-b bg-bg transition-colors duration-300',
        scrolled ? 'border-line' : 'border-transparent',
      )}
    >
      <div className='mx-auto flex h-14 w-full max-w-[1040px] items-center px-5'>
        <button type='button' onClick={scrollTop} className='shrink-0 rounded-sm text-fg'>
          <span
            aria-hidden
            className='block h-9 w-auto bg-current'
            style={{
              aspectRatio: '1323 / 414',
              WebkitMaskImage: 'url(/assets/logo.svg)',
              maskImage: 'url(/assets/logo.svg)',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            }}
          />
          <span className='sr-only'>Sun&apos;s log</span>
        </button>

        {caseStudy && (
          <button
            type='button'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-hidden={!caseVisible}
            tabIndex={caseVisible ? 0 : -1}
            className={clsx(
              'flex min-w-0 items-center gap-3 text-left',
              !caseVisible && 'pointer-events-none',
            )}
          >
            <span
              aria-hidden
              className={clsx(
                'mx-1 h-5 w-px bg-line transition-opacity duration-300 md:mx-4',
                caseVisible ? 'opacity-100' : 'opacity-0',
              )}
            />
            <span className={RISE_CLASS} style={rise(caseVisible, 0)}>
              <ProjectIcon caseStudy={caseStudy} className='h-8 w-8 rounded-[9px]' sizes='32px' />
            </span>
            <span
              className={clsx('min-w-0 truncate text-[15px] font-semibold', RISE_CLASS)}
              style={rise(caseVisible, 1)}
            >
              {caseStudy.name}
            </span>
          </button>
        )}
      </div>
    </header>
  );
};

export default TopBar;
