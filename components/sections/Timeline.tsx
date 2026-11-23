'use client';

import { useEffect, useRef, useState } from 'react';
import { timeline } from '@/lib/data';
import { FiCheckCircle } from 'react-icons/fi';

export default function Timeline() {
  return (
    <section className="bg-cream py-24 border-t border-neutral-200/80">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="mx-auto mb-14 max-w-[620px] text-center">
          <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
            Roadmap & Milestones
          </span>
          <h2 className="text-[clamp(28px,3.8vw,42px)] font-black tracking-tight text-ink">
            Engineered deliberately. Scaling with purpose.
          </h2>
        </div>

        <div className="relative mx-auto max-w-[760px]">
          <div className="absolute bottom-2 left-[19px] top-2 w-[2px] bg-neutral-300" />
          {timeline.map((item, i) => (
            <TimelineItem key={item.title} item={item} isLast={i === timeline.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  isLast,
}: {
  item: { year: string; title: string; description: string };
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative pl-14 ${isLast ? '' : 'pb-12'}`}>
      <div
        className={`absolute left-[10px] top-1 z-[1] h-5 w-5 rounded-full border-2 bg-white transition-all duration-300 ${
          inView ? 'border-gold bg-ink shadow-[0_0_12px_rgba(241,182,11,0.5)]' : 'border-neutral-300'
        }`}
      />
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-brand-sm transition-shadow">
        <span className="inline-block font-mono text-xs font-bold text-gold-700">
          {item.year}
        </span>
        <h3 className="mt-2 text-lg font-extrabold tracking-tight text-ink">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{item.description}</p>
      </div>
    </div>
  );
}
