'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { FiShield, FiCpu, FiGlobe, FiWifiOff } from 'react-icons/fi';

const recognition = [
  {
    icon: FiCpu,
    title: 'Senior Technologies Led',
    source: 'Every product ships with senior architectural audit',
    iconColor: 'text-gold-600',
  },
  {
    icon: FiShield,
    title: 'Zero-Trust Security',
    source: 'Cold-storage & schema-level cryptography by default',
    iconColor: 'text-gold-600',
  },
  {
    icon: FiGlobe,
    title: 'Global High-Load Standard',
    source: 'Engineered to survive 100x traffic spikes seamlessly',
    iconColor: 'text-gold-600',
  },
  {
    icon: FiWifiOff,
    title: 'Offline-First Resilience',
    source: 'Tested under extreme disconnected field constraints',
    iconColor: 'text-gold-600',
  },
];

export default function Awards() {
  return (
    <section className="border-y border-neutral-200 bg-white py-16">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll>
          <p className="mb-10 text-center font-mono text-[12px] font-bold uppercase tracking-[0.15em] text-neutral-500">
            What Every WestLinks Engagement Is Built Upon
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recognition.map((r) => (
              <div
                key={r.title}
                className="group flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-neutral-50 p-6 text-center transition-all hover:bg-white hover:shadow-brand-sm hover:border-neutral-300"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center transition-transform group-hover:scale-110 ${r.iconColor}`}
                >
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-ink">
                  {r.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500 max-w-[200px]">
                  {r.source}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
