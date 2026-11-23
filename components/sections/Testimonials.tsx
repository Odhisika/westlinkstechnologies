'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { testimonials } from '@/lib/data';
import { FiCheckCircle } from 'react-icons/fi';
import { RiStarFill } from 'react-icons/ri';

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll className="text-center">
          <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
            Partner Testimonials
          </span>
          <h2 className="mx-auto max-w-[620px] text-[clamp(28px,3.8vw,42px)] font-black leading-[1.15] tracking-tight text-ink">
            Why technologies leaders trust WestLinks.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-neutral-600">
            Read direct feedback from partners running WestLinks architecture in production.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <RevealOnScroll key={t.role}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-brand-card hover:border-gold/30">
                <div>
                  {/* Star Rating */}
                  <div className="mb-4 flex items-center gap-1 text-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill key={i} className="h-4 w-4" />
                    ))}
                  </div>

                  <blockquote className="text-[15px] leading-relaxed text-neutral-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="mt-8 flex items-center gap-3.5 border-t border-neutral-200/80 pt-5">
                  <span className="font-mono text-xs font-bold text-gold-700">
                    {initials(t.name)}
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-ink">
                      {t.name}
                      <FiCheckCircle className="h-3.5 w-3.5 text-gold-500" />
                    </div>
                    <div className="text-xs text-neutral-500 font-medium">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
