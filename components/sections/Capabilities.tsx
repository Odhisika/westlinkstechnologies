'use client';

import Link from 'next/link';
import {
  FiArrowRight,
  FiTerminal,
  FiCloud,
  FiShield,
  FiCpu,
  FiLayout,
  FiCheckCircle,
} from 'react-icons/fi';
import {
  RiCodeSSlashLine,
  RiCloudLine,
  RiShieldCheckLine,
  RiBrainLine,
  RiPaletteLine,
  RiCheckDoubleLine,
} from 'react-icons/ri';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { capabilities } from '@/lib/data';

interface CapabilityStyle {
  icon: React.ElementType;
  badgeText: string;
  hoverGlow: string;
  tag: string;
}

const capabilityStyles: Record<string, CapabilityStyle> = {
  'Product Technologies': {
    icon: RiCodeSSlashLine,
    badgeText: 'text-gold-600',
    hoverGlow: 'group-hover:border-gold-500/40 group-hover:shadow-[0_20px_45px_-15px_rgba(241,182,11,0.18)]',
    tag: 'Full-Stack & APIs',
  },
  'Cloud & DevOps': {
    icon: RiCloudLine,
    badgeText: 'text-gold-600',
    hoverGlow: 'group-hover:border-gold-500/40 group-hover:shadow-[0_20px_45px_-15px_rgba(241,182,11,0.18)]',
    tag: 'IaC & Automated CI/CD',
  },
  'Security & Compliance': {
    icon: RiShieldCheckLine,
    badgeText: 'text-gold-600',
    hoverGlow: 'group-hover:border-gold-500/40 group-hover:shadow-[0_20px_45px_-15px_rgba(241,182,11,0.18)]',
    tag: 'Custody & Schema-Level Audit',
  },
  'Data & AI': {
    icon: RiBrainLine,
    badgeText: 'text-gold-600',
    hoverGlow: 'group-hover:border-gold-500/40 group-hover:shadow-[0_20px_45px_-15px_rgba(241,182,11,0.18)]',
    tag: 'Pipelines & Applied AI',
  },
  'Design Systems': {
    icon: RiPaletteLine,
    badgeText: 'text-gold-600',
    hoverGlow: 'group-hover:border-gold-500/40 group-hover:shadow-[0_20px_45px_-15px_rgba(241,182,11,0.18)]',
    tag: 'Unified Component Systems',
  },
  'QA & Testing': {
    icon: RiCheckDoubleLine,
    badgeText: 'text-gold-600',
    hoverGlow: 'group-hover:border-gold-500/40 group-hover:shadow-[0_20px_45px_-15px_rgba(241,182,11,0.18)]',
    tag: 'Continuous Automated Tests',
  },
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-white py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll className="max-w-3xl">
          <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
            Technologies Disciplines
          </span>
          <h2 className="text-[clamp(30px,3.8vw,44px)] font-black leading-[1.12] tracking-tight text-ink">
            Six disciplines. One uncompromising technologies standard.
          </h2>
          <p className="mt-4 text-[16.5px] leading-relaxed text-neutral-600">
            We don&apos;t outsource the hard parts. Every WestLinks system is architected, implemented,
            and hardened end-to-end by senior specialists under one unified standard.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => {
            const style = capabilityStyles[c.title] || capabilityStyles['Product Technologies'];
            const Icon = style.icon;

            return (
              <RevealOnScroll key={c.title}>
                <div
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white ${style.hoverGlow}`}
                >
                  <div>
                    {/* Flat Colorful Icon Badge */}
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${style.badgeText}`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-neutral-500">
                        {style.tag}
                      </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">
                      {c.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-neutral-600">
                      {c.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-5">
                    <span className="text-xs font-bold text-neutral-400 group-hover:text-gold-700 transition-colors">
                      Learn architecture
                    </span>
                    <Link
                      href="/solutions"
                      aria-label={`Learn more about ${c.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-neutral-200 text-neutral-700 shadow-sm transition-all duration-300 group-hover:border-gold group-hover:bg-ink group-hover:text-white"
                    >
                      <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
