import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'career', label: 'Career' },
  { id: 'contact', label: 'Contact' },
];

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const syncIndicator = useCallback(() => {
    const el = activeSection ? linkRefs.current[activeSection] : null;
    if (!el) return;
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeSection]);

  useEffect(() => {
    syncIndicator();
    window.addEventListener('resize', syncIndicator);
    return () => window.removeEventListener('resize', syncIndicator);
  }, [syncIndicator]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 8);

      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      let active: string | null = null;
      if (atBottom) {
        active = NAV_ITEMS[NAV_ITEMS.length - 1].id;
      } else {
        NAV_ITEMS.forEach(item => {
          const el = document.getElementById(item.id);
          if (el && el.getBoundingClientRect().top <= 64) active = item.id;
        });
      }
      setActiveSection(active);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header
      className={clsx(
        'sticky top-0 z-30 border-b bg-bg transition-colors duration-300',
        scrolled ? 'border-line' : 'border-transparent'
      )}
    >
      <div className='mx-auto flex h-14 w-full max-w-[1040px] items-center justify-between gap-6 px-5'>
        <button
          type='button'
          onClick={scrollTop}
          className='rounded-sm text-fg'
        >
          <span
            aria-hidden
            className='block h-8 w-auto bg-current'
            style={{
              aspectRatio: '2079 / 513',
              WebkitMaskImage: 'url(/assets/logo.svg)',
              maskImage: 'url(/assets/logo.svg)',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
            }}
          />
          <span className='sr-only'>Sun&apos;s Log</span>
        </button>
        <nav className='flex items-center gap-6 text-[14px]'>
          <div className='relative hidden items-center gap-6 md:flex'>
            {NAV_ITEMS.map(item => (
              <a
                key={item.id}
                ref={node => {
                  linkRefs.current[item.id] = node;
                }}
                href={`#${item.id}`}
                className={clsx(
                  'rounded-sm transition-colors hover:text-fg',
                  activeSection === item.id ? 'text-fg' : 'text-muted'
                )}
              >
                {item.label}
              </a>
            ))}
            <span
              aria-hidden
              className='pointer-events-none absolute -bottom-2 left-0 h-px bg-accent transition-[transform,width,opacity] duration-[320ms] ease-out motion-reduce:transition-none'
              style={{
                width: indicator.width,
                transform: `translateX(${indicator.left}px)`,
                opacity: activeSection ? 1 : 0,
              }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
