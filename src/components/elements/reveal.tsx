import clsx from 'clsx';
import { createElement, useEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  as?: 'div' | 'section' | 'article' | 'li';
  className?: string;
  stagger?: boolean;
  staggerStep?: number;
};

const Reveal = ({
  children,
  as = 'div',
  className,
  stagger,
  staggerStep = 60,
}: RevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealItems = () => {
      if (!stagger) return;
      const items = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal-item]'));
      items.forEach((item, idx) => {
        window.setTimeout(() => item.classList.add('is-visible'), idx * staggerStep);
      });
    };

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      el.querySelectorAll('[data-reveal-item]').forEach(item =>
        item.classList.add('is-visible')
      );
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
            revealItems();
          }
        });
      },
      { threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, staggerStep]);

  return createElement(as, { ref, className: clsx('reveal', className) }, children);
};

export default Reveal;
