import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  images: string[];
  index: number;
  ratio: '16:9' | '9:19.5';
  alt: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

let originRect: DOMRect | null = null;

export function setLightboxOrigin(rect: DOMRect | null) {
  originRect = rect;
}

const OPEN_MS = 380;
const CLOSE_MS = 280;
const EASING = 'cubic-bezier(.2,.8,.2,1)';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const flipTransform = (origin: DOMRect, target: DOMRect) => {
  if (target.width === 0 || target.height === 0) return null;
  const dx = origin.left - target.left;
  const dy = origin.top - target.top;
  const sx = origin.width / target.width;
  const sy = origin.height / target.height;
  return `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
};

export default function Lightbox({
  images,
  index,
  ratio,
  alt,
  onClose,
  onIndexChange,
}: Props) {
  const isWide = ratio === '16:9';
  const hasMultiple = images.length > 1;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<DOMRect | null>(null);
  const closingRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  const [overlayStyle, setOverlayStyle] = useState<CSSProperties>({ opacity: 0 });
  const [frameStyle, setFrameStyle] = useState<CSSProperties>({});
  const [slideStyle, setSlideStyle] = useState<CSSProperties>({});

  useLayoutEffect(() => {
    const origin = originRect;
    originRect = null;
    originRef.current = origin;

    const reduced = prefersReducedMotion();
    const target = frameRef.current?.getBoundingClientRect();
    const transform = !reduced && origin && target ? flipTransform(origin, target) : null;

    if (!transform) {
      setOverlayStyle({ opacity: 1, transition: reduced ? undefined : 'opacity 280ms ease' });
      setFrameStyle({});
      return;
    }

    setFrameStyle({ transform, transformOrigin: 'top left', willChange: 'transform' });

    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        setOverlayStyle({ opacity: 1, transition: 'opacity 280ms ease' });
        setFrameStyle({
          transform: 'none',
          transformOrigin: 'top left',
          willChange: 'transform',
          transition: `transform ${OPEN_MS}ms ${EASING}`,
        });
      });
    });

    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;

    const origin = originRef.current;
    const target = frameRef.current?.getBoundingClientRect();
    const transform =
      !prefersReducedMotion() && origin && target ? flipTransform(origin, target) : null;

    if (!transform) {
      onClose();
      return;
    }

    setOverlayStyle({ opacity: 0, transition: `opacity ${CLOSE_MS}ms ease` });
    setFrameStyle({
      transform,
      transformOrigin: 'top left',
      willChange: 'transform',
      transition: `transform ${CLOSE_MS}ms ${EASING}`,
    });
    timerRef.current = window.setTimeout(onClose, CLOSE_MS);
  }, [onClose]);

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  const prevIndexRef = useRef(index);

  useEffect(() => {
    const prev = prevIndexRef.current;
    if (prev === index) return;
    prevIndexRef.current = index;

    if (prefersReducedMotion()) {
      setSlideStyle({});
      return;
    }

    const forward = (index - prev + images.length) % images.length === 1;
    setSlideStyle({ opacity: 0, transform: `translateX(${forward ? 24 : -24}px)` });

    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        setSlideStyle({
          opacity: 1,
          transform: 'none',
          transition: 'opacity 260ms ease, transform 260ms ease',
        });
      });
    });

    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [index, images.length]);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        requestClose();
        return;
      }
      if (event.key === 'ArrowLeft' && hasMultiple) {
        event.preventDefault();
        goPrev();
        return;
      }
      if (event.key === 'ArrowRight' && hasMultiple) {
        event.preventDefault();
        goNext();
        return;
      }
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [goNext, goPrev, hasMultiple, requestClose]);

  return (
    <div
      ref={dialogRef}
      role='dialog'
      aria-modal='true'
      aria-label={`${alt} 스크린샷 크게 보기`}
      onClick={requestClose}
      style={overlayStyle}
      className='fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/45 p-10 backdrop-blur-[8px]'
    >
      <button
        ref={closeRef}
        type='button'
        onClick={requestClose}
        className='absolute right-5 top-5 text-[13px] text-white/80'
      >
        ESC 또는 배경 클릭으로 닫기
      </button>

      {hasMultiple && (
        <button
          type='button'
          aria-label='이전'
          onClick={event => {
            event.stopPropagation();
            goPrev();
          }}
          className='absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-[28px] leading-none text-white'
        >
          ‹
        </button>
      )}

      <div
        ref={frameRef}
        onClick={event => event.stopPropagation()}
        style={frameStyle}
        className={clsx(
          'relative max-h-full w-full cursor-default overflow-hidden rounded-md border border-line shadow-[0_24px_64px_rgba(0,0,0,0.3)]',
          isWide ? 'aspect-[16/9] max-w-[1200px]' : 'aspect-[9/19.5] max-w-[400px]',
        )}
      >
        <div key={index} style={slideStyle} className='absolute inset-0'>
          <Image
            src={images[index]}
            alt={`${alt} 화면 ${index + 1}`}
            fill
            sizes={isWide ? '(max-width: 1200px) 100vw, 1200px' : '400px'}
            className='object-contain'
            priority
          />
        </div>
      </div>

      {hasMultiple && (
        <button
          type='button'
          aria-label='다음'
          onClick={event => {
            event.stopPropagation();
            goNext();
          }}
          className='absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-[28px] leading-none text-white'
        >
          ›
        </button>
      )}

      {hasMultiple && (
        <div className='absolute bottom-5 left-1/2 -translate-x-1/2 text-[13px] text-white/80'>
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
