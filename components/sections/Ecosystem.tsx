'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';
import {
  RiBankLine,
  RiShieldCheckLine,
  RiSeedlingLine,
  RiShoppingCart2Line,
  RiBrainLine,
  RiGovernmentLine,
} from 'react-icons/ri';

const segments = [
  {
    icon: RiBankLine,
    title: 'FinTech & Exchange',
    body: 'Trust is currency. We build real-time matching engines with custody-grade security and compliance tooling regulators expect.',
    badge: 'text-gold-600',
    hoverBorder: 'hover:border-gold-400',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Blockchain & Enterprise',
    body: 'Auditable, permissioned ledgers for organizations that need provable infrastructure without building it from scratch.',
    badge: 'text-gold-600',
    hoverBorder: 'hover:border-gold-400',
  },
  {
    icon: RiSeedlingLine,
    title: 'AgTech & Field Systems',
    body: 'Offline-first field tools designed around intermittent signal and shared devices - not perfect Wi-Fi.',
    badge: 'text-gold-600',
    hoverBorder: 'hover:border-gold-400',
  },
  {
    icon: RiShoppingCart2Line,
    title: 'Retail Intelligence',
    body: 'Always-on market monitoring that turns pricing decisions from guesswork into data.',
    badge: 'text-gold-600',
    hoverBorder: 'hover:border-gold-400',
  },
  {
    icon: RiBrainLine,
    title: 'AI & Machine Learning',
    body: 'Applied AI in service of the core workflow - not a demo sitting beside the product.',
    badge: 'text-gold-600',
    hoverBorder: 'hover:border-gold-400',
  },
  {
    icon: RiGovernmentLine,
    title: 'Government & Public Sector',
    body: 'Systems built to a global standard, where reliability, auditability, and uptime are non-negotiable.',
    badge: 'text-gold-600',
    hoverBorder: 'hover:border-gold-400',
  },
];

export default function Ecosystem() {
  return (
    <section id="industries" className="bg-cream py-24 border-t border-neutral-200/80">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll className="text-center">
          <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
            Cross-Industry Discipline
          </span>
          <h2 className="mx-auto max-w-[700px] text-[clamp(28px,3.8vw,42px)] font-black leading-[1.15] tracking-tight text-ink">
            One technologies standard across every sector we serve.
          </h2>
          <p className="mx-auto mt-3.5 max-w-[580px] text-[16px] leading-relaxed text-neutral-600">
            From regulated finance to low-connectivity farms, we design for the constraints of the
            industry first - then apply the same institutional discipline everywhere.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((s) => (
            <RevealOnScroll key={s.title}>
              <div
                className={`group h-full rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-card ${s.hoverBorder}`}
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${s.badge}`}
                >
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2.5 text-xl font-bold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-neutral-600">
                  {s.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
