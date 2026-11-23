'use client';

import {
  RiSparklingFill,
  RiShieldCheckFill,
  RiLineChartFill,
  RiServerFill,
} from 'react-icons/ri';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { values } from '@/lib/data';

const valueStyles = [
  {
    icon: RiSparklingFill,
    iconColor: 'text-gold-600',
  },
  {
    icon: RiShieldCheckFill,
    iconColor: 'text-gold-600',
  },
  {
    icon: RiLineChartFill,
    iconColor: 'text-gold-600',
  },
  {
    icon: RiServerFill,
    iconColor: 'text-gold-600',
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-cream py-24 border-t border-neutral-200/80">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll className="text-center">
          <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
            Core Principles
          </span>
          <h2 className="mx-auto max-w-[640px] text-[clamp(28px,3.8vw,42px)] font-black leading-[1.15] tracking-tight text-ink">
            The standards we hold every system to.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-neutral-600">
            Architectural principles that guide every commit, review, and deployment.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const style = valueStyles[i] || valueStyles[0];
              const Icon = style.icon;

              return (
                <div
                  key={v.title}
                  className="group flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-card hover:border-gold/40"
                >
                  <div>
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${style.iconColor}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-ink">
                      {v.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-neutral-600">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
