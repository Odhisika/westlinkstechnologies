'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const messages = [
  'Build Faster. Scale Harder. Stay Secure.',
  'From FinTech rails to offline-first field tools - one technologies standard.',
  'Security and compliance designed in from the first commit.',
  'Infrastructure built for year-three load, not day-one traffic.',
];

const ROTATE_MS = 30_000;

export default function RotatingBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % messages.length),
      ROTATE_MS
    );
  }, []);

  useEffect(() => {
    if (paused) {
      if (timer.current) clearInterval(timer.current);
      return;
    }
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, start]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="mx-auto mb-10 flex max-w-[720px] flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-neutral-700 bg-neutral-900 px-6 py-3"
    >
      <span className="inline-flex h-1.5 w-1.5 flex-shrink-0 animate-pulseDot rounded-full bg-gold" />
      <div key={index} className="min-h-[20px] animate-fadeUp text-center text-[13.5px] font-semibold tracking-wide text-gold-100">
        {messages[index]}
      </div>
      <div className="flex items-center gap-1.5">
        {messages.map((m, i) => (
          <button
            key={m}
            onClick={() => setIndex(i)}
            aria-label={`Show banner message ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-4 bg-gold-300' : 'w-1.5 bg-neutral-600 hover:bg-neutral-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
