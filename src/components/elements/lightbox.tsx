import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';

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
const SLIDE_MS = 260;
const SNAP_MS = 220;
const SLIDE_FALLBACK_MS = 300;
const DISTANCE_RATIO = 0.25;
const VELOCITY_THRESHOLD = 0.5;
const VELOCITY_MIN_DISTANCE = 20;
const EASING = 'cubic-bezier(.2,.8,.2,1)';
// The track is 3 frames wide, so translate percentages are thirds of the track.
const REST_TRANSFORM = 'translateX(-33.3333%)';
const PREV_TRANSFORM = 'translateX(0%)';
const NEXT_TRANSFORM = 'translateX(-66.6667%)';

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
  const trackRef = useRef<HTMLDivElement>(null);
  const originRef = useRef<DOMRect | null>(null);
  const closingRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const slideTimerRef = useRef<number | null>(null);
  const animatingRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startTime: 0, dx: 0 });

  const [overlayStyle, setOverlayStyle] = useState<CSSProperties>({ opacity: 0 });
  const [frameStyle, setFrameStyle] = useState<CSSProperties>({});
  const [naturalRatios, setNaturalRatios] = useState<Record<string, number>>({});

  const [viewport, setViewport] = useState(() =>
    typeof window === 'undefined'
      ? { w: 0, h: 0 }
      : { w: window.innerWidth, h: window.innerHeight },
  );

  useEffect(() => {
    const onResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const fallbackRatio = isWide ? 16 / 9 : 9 / 19.5;
  const currentRatio = naturalRatios[images[index]] ?? fallbackRatio;
  // Explicit px width/height (not aspect-ratio) so the frame can animate between images.
  const frameWidth = Math.max(
    0,
    Math.min(viewport.w - 80, (viewport.h - 80) * currentRatio, 1200),
  );
  const sizeStyle: CSSProperties = {
    width: frameWidth,
    height: frameWidth / currentRatio,
  };
  const sizeTransition = prefersReducedMotion()
    ? ''
    : `width ${SLIDE_MS}ms ${EASING}, height ${SLIDE_MS}ms ${EASING}`;
  const frameTransition = [frameStyle.transition, sizeTransition].filter(Boolean).join(', ');

  const slideIndexes = hasMultiple
    ? [(index - 1 + images.length) % images.length, index, (index + 1) % images.length]
    : [index];

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
      if (slideTimerRef.current !== null) window.clearTimeout(slideTimerRef.current);
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

  const snapBack = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    if (prefersReducedMotion()) {
      track.style.transition = 'none';
      track.style.transform = REST_TRANSFORM;
      return;
    }
    track.style.transition = `transform ${SNAP_MS}ms ${EASING}`;
    void track.offsetWidth;
    track.style.transform = REST_TRANSFORM;
  }, []);

  const commit = useCallback(
    (direction: 1 | -1) => {
      if (!hasMultiple || animatingRef.current) return;
      const track = trackRef.current;
      const newIndex = (index + direction + images.length) % images.length;

      if (!track || prefersReducedMotion()) {
        onIndexChange(newIndex);
        return;
      }

      animatingRef.current = true;
      let settled = false;

      const finish = () => {
        if (settled) return;
        settled = true;
        track.removeEventListener('transitionend', onTransitionEnd);
        if (slideTimerRef.current !== null) {
          window.clearTimeout(slideTimerRef.current);
          slideTimerRef.current = null;
        }
        // Leave the track at the committed position; the layout effect on `index`
        // resets it to rest in the same paint as the re-rendered slides, so the
        // previous image never flashes.
        animatingRef.current = false;
        onIndexChange(newIndex);
      };

      const onTransitionEnd = (event: TransitionEvent) => {
        if (event.target !== track || event.propertyName !== 'transform') return;
        finish();
      };

      track.addEventListener('transitionend', onTransitionEnd);
      slideTimerRef.current = window.setTimeout(finish, SLIDE_FALLBACK_MS);

      track.style.transition = `transform ${SLIDE_MS}ms ${EASING}`;
      void track.offsetWidth;
      track.style.transform = direction === 1 ? NEXT_TRANSFORM : PREV_TRANSFORM;
    },
    [hasMultiple, images.length, index, onIndexChange],
  );

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || !hasMultiple) return;
    track.style.transition = 'none';
    track.style.transform = REST_TRANSFORM;
  }, [index, hasMultiple]);

  const goPrev = useCallback(() => commit(-1), [commit]);
  const goNext = useCallback(() => commit(1), [commit]);

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!hasMultiple || animatingRef.current) return;
      const track = trackRef.current;
      if (!track) return;
      dragRef.current = {
        active: true,
        startX: event.clientX,
        startTime: event.timeStamp,
        dx: 0,
      };
      track.setPointerCapture(event.pointerId);
      track.style.transition = 'none';
    },
    [hasMultiple],
  );

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.active) return;
    const track = trackRef.current;
    if (!track) return;
    drag.dx = event.clientX - drag.startX;
    track.style.transform = `translateX(calc(-33.3333% + ${drag.dx}px))`;
  }, []);

  const onPointerEnd = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;
      if (!drag.active) return;
      drag.active = false;

      const track = trackRef.current;
      if (track?.hasPointerCapture(event.pointerId)) {
        track.releasePointerCapture(event.pointerId);
      }

      const { dx } = drag;
      const distance = Math.abs(dx);
      if (distance < 5) {
        snapBack();
        return;
      }

      const frameWidth = frameRef.current?.clientWidth ?? 0;
      const elapsed = Math.max(1, event.timeStamp - drag.startTime);
      const velocity = Math.abs(dx / elapsed);
      const shouldCommit =
        (frameWidth > 0 && distance > DISTANCE_RATIO * frameWidth) ||
        (velocity > VELOCITY_THRESHOLD && distance > VELOCITY_MIN_DISTANCE);

      if (shouldCommit) commit(dx > 0 ? -1 : 1);
      else snapBack();
    },
    [commit, snapBack],
  );

  const handleLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>, key: string) => {
      const { naturalWidth, naturalHeight } = event.currentTarget;
      if (!naturalWidth || !naturalHeight) return;
      setNaturalRatios(prev => (prev[key] ? prev : { ...prev, [key]: naturalWidth / naturalHeight }));
    },
    [],
  );

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
        aria-label='닫기'
        className='absolute right-5 top-5 text-[24px] leading-none text-white/80'
      >
        ×
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
        style={{ ...sizeStyle, ...frameStyle, transition: frameTransition || undefined }}
        className='relative cursor-default overflow-hidden rounded-md border border-line shadow-[0_24px_64px_rgba(0,0,0,0.3)]'
      >
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
          onPointerCancel={onPointerEnd}
          style={{
            width: hasMultiple ? '300%' : '100%',
            transform: hasMultiple ? REST_TRANSFORM : undefined,
            willChange: 'transform',
            touchAction: 'none',
          }}
          className='absolute inset-y-0 left-0 flex select-none'
        >
          {slideIndexes.map((slideIndex, position) => (
            <div
              key={position}
              style={{ width: `${100 / slideIndexes.length}%` }}
              className='relative h-full shrink-0'
            >
              <Image
                src={images[slideIndex]}
                alt={`${alt} 화면 ${slideIndex + 1}`}
                fill
                sizes='(max-width: 1200px) 100vw, 1200px'
                className='select-none object-contain'
                draggable={false}
                priority={images[slideIndex] === images[index]}
                onLoad={event => handleLoad(event, images[slideIndex])}
              />
            </div>
          ))}
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
