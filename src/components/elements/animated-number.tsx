import { useEffect, useRef, useState } from 'react';

type Props = {
  text: string;
  from?: string;
  className?: string;
  duration?: number;
};

type Parsed = { value: number; decimals: number; suffix: string };

const parse = (text: string): Parsed | null => {
  const match = /^\s*(-?\d+(?:\.\d+)?)(.*)$/.exec(text);
  if (!match) return null;
  const [, numberPart, suffix] = match;
  const dot = numberPart.indexOf('.');
  return {
    value: Number(numberPart),
    decimals: dot === -1 ? 0 : numberPart.length - dot - 1,
    suffix,
  };
};

const format = (value: number, decimals: number) =>
  decimals === 0 ? String(Math.round(value)) : value.toFixed(decimals);

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function AnimatedNumber({ text, from, className, duration = 1000 }: Props) {
  const target = parse(text);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const el = ref.current;
    if (!el || !target) return;
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const fromParsed = from ? parse(from) : null;
    const start = fromParsed ? fromParsed.value : 0;
    const end = target.value;
    const { decimals, suffix } = target;

    setDisplay(format(start, decimals) + suffix);

    let frame = 0;
    let startedAt = 0;

    const step = (now: number) => {
      if (!startedAt) startedAt = now;
      const progress = Math.min(1, (now - startedAt) / duration);
      const value = start + (end - start) * easeOut(progress);
      setDisplay(format(value, decimals) + suffix);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          frame = requestAnimationFrame(step);
        });
      },
      { threshold: 0.01 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, from, duration]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {target ? display : text}
    </span>
  );
}
