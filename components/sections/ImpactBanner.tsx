'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function ImpactBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gold-900 via-gold-950 to-neutral-900 px-4 py-8 text-white sm:px-6 lg:px-8">
      {/* Subtle background glow & organic curves */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-gold-400 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-gold-300 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-content flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <h2 className="text-lg font-black tracking-tight text-white sm:text-xl lg:text-2xl">
            See AI and Real-Time Infrastructure deliver measurable enterprise outcomes
          </h2>
          <p className="mt-1 text-xs text-gold-100/80 sm:text-sm">
            Learn how financial institutions and AgTech networks achieved sub-millisecond execution and 100% offline sync resilience with WestLinks architecture.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold text-neutral-900 shadow-lg transition-all hover:bg-gold-50 hover:scale-105"
          >
            <span>Explore Case Studies</span>
            <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-gold-800" />
          </Link>
        </div>
      </div>
    </section>
  );
}
