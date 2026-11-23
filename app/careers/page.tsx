import type { Metadata } from 'next';
import Link from 'next/link';
import {
  RiCodeSSlashFill,
  RiTeamFill,
  RiRocket2Fill,
  RiGlobeFill,
} from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Careers - WestLinks',
  description: 'Join the WestLinks technologies team. Remote-first, technologies-led, still early.',
};

const principles = [
  {
    icon: RiCodeSSlashFill,
    title: 'Senior Technologies Led',
    description: 'Every major architectural decision runs through the people who have to build and operate it.',
    badge: 'text-gold-700',
  },
  {
    icon: RiTeamFill,
    title: 'Small, High-Agency Pods',
    description: 'We hire slowly and intentionally - high ownership, minimal bureaucracy, zero vanity headcount.',
    badge: 'text-gold-600',
  },
  {
    icon: RiRocket2Fill,
    title: 'Production Infrastructure',
    description: 'You will build systems with real concurrency, real regulatory requirements, and real transactions.',
    badge: 'text-gold-600',
  },
  {
    icon: RiGlobeFill,
    title: 'Remote-First Worldwide',
    description: 'We hire for technologies caliber, not local zip codes. High asynchronous documentation and deep focus blocks.',
    badge: 'text-gold-600',
  },
];

const process = [
  { step: '01', title: 'Intro Conversation', desc: '30 minutes with a principal engineer - no algorithmic trivia, just discussing systems you built and our roadmap.' },
  { step: '02', title: 'Architecture Deep-Dive', desc: 'A walkthrough of production code you have shipped, or a paid architectural trial project relevant to the stack.' },
  { step: '03', title: 'Team Working Session', desc: 'Pairing with the engineers you will actually collaborate with on real architectural tradeoffs.' },
  { step: '04', title: 'Transparent Offer', desc: 'Clear equity and cash compensation with zero ambiguous clawbacks or surprises.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title="Join our technologies group."
        subtitle="We're always looking for exceptional engineers who want to architect real infrastructure, not just tweak superficial UI wrappers."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <RevealOnScroll key={p.title}>
                  <div className="group h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-brand-card hover:border-gold/40">
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${p.badge}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold tracking-tight text-ink">{p.title}</h3>
                    <p className="text-[14px] leading-relaxed text-neutral-600">{p.description}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 border-t border-neutral-200/80">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
              The Hiring Pipeline
            </span>
            <h2 className="text-[clamp(28px,3.8vw,42px)] font-black tracking-tight text-ink">
              Four steps. Two-week turnaround. Zero games.
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              No unpaid take-home assignments or whiteboard trickery. We value your technologies time as much as our own.
            </p>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s) => (
              <RevealOnScroll key={s.step}>
                <div className="h-full rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                  <div className="font-mono text-xs font-black text-gold-700">
                    Step {s.step}
                  </div>
                  <h3 className="mb-2 mt-4 text-lg font-bold tracking-tight text-ink">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-neutral-600">{s.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-t border-neutral-200/80">
        <div className="mx-auto max-w-content px-5 text-center md:px-8">
          <RevealOnScroll>
            <div className="mx-auto max-w-2xl rounded-[32px] border border-neutral-200 bg-cream p-10 shadow-sm md:p-14">
              <h2 className="text-2xl font-black tracking-tight text-ink sm:text-3xl">
                Ready to build with us?
              </h2>
              <p className="mx-auto mt-3 max-w-[480px] text-sm leading-relaxed text-neutral-600">
                We add engineers deliberately. If WestLinks sounds like the standard you want to hold yourself to, introduce yourself.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-ink-soft hover:scale-105"
              >
                Introduce Yourself <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTA />
    </>
  );
}
