'use client';

import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const challenges = [
  {
    title: 'Shipping fast without cutting corners',
    body: 'Speed pressure is real - but rewrites and production outages cost far more than architecture patience ever did.',
    tag: 'Discipline Over Short-Cuts',
  },
  {
    title: 'Institutional security & compliance from day one',
    body: 'Regulated industries expect audit trails, zero-knowledge access control, and cold-storage encryption baked in at schema creation.',
    tag: 'Schema-Level Cryptography',
  },
  {
    title: 'Systems engineered to survive real 100x load',
    body: 'Architecture designed for pitch demos collapses the moment high concurrent throughput hits. We build for year-three volume.',
    tag: 'Zero-Bottleneck Architecture',
  },
  {
    title: 'Measurable ROI on every technologies dollar',
    body: 'Every codebase commit should trace back to revenue protection, conversion lift, or structural risk reduction.',
    tag: 'Value Traceability',
  },
  {
    title: 'Lasting product moats in crowded markets',
    body: 'In saturated markets, extreme reliability, sub-millisecond responsiveness, and clean design are the only durable moats.',
    tag: 'Durable Product Moat',
  },
];

export default function Challenges() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <RevealOnScroll>
            <span className="mb-3.5 block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
              The Hard Problems
            </span>
            <h2 className="text-[clamp(30px,3.8vw,44px)] font-black leading-[1.15] tracking-tight text-ink">
              The five challenges builders face.
            </h2>
            <p className="mt-4 max-w-[460px] text-[16px] leading-relaxed text-neutral-600">
              Most ambitious software ventures don&apos;t fail on vision - they fail on execution
              discipline. We&apos;ve structured every WestLinks engagement around eliminating the five
              failure modes that sink software builds.
            </p>
            <div className="mt-8">
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-ink-soft hover:scale-105"
              >
                How We Solve Them
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="flex flex-col gap-4">
            {challenges.map((c, i) => (
              <RevealOnScroll key={c.title}>
                <div className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-brand-sm">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-black text-gold-700">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-[17px] font-bold tracking-tight text-ink group-hover:text-gold-700 transition-colors">
                          {c.title}
                        </h3>
                        <span className="font-mono text-[10px] font-bold text-neutral-500">
                          {c.tag}
                        </span>
                      </div>
                      <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
