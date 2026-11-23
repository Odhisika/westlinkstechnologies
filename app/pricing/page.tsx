import type { Metadata } from 'next';
import { FiCompass, FiTool, FiUsers, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { RiCompassDiscoverLine, RiHammerLine, RiTeamLine } from 'react-icons/ri';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Engagement Models - WestLinks',
  description:
    'Three ways to work with WestLinks: discovery sprints, full product builds, and embedded technologies teams. Transparent scope, phased delivery.',
};

const models = [
  {
    icon: RiCompassDiscoverLine,
    name: 'Architecture Sprint',
    price: '$8k – $15k',
    unit: 'Fixed scope · 2–4 weeks',
    tagline: 'De-risk technical complexity and constraints before committing capital.',
    iconColor: 'text-gold-600',
    features: [
      'Institutional technical architecture blueprint',
      'Phased roadmap with cost & latency bounds per phase',
      'Throughput, custody & security constraint audit',
      'Interactive prototype or proof-of-concept',
      'Full IP ownership - yours to keep regardless',
    ],
    cta: 'Start an Architecture Sprint',
    featured: false,
  },
  {
    icon: RiHammerLine,
    name: 'Full Product Build',
    price: '$40k – $120k+',
    unit: 'Phased milestone delivery',
    tagline: 'From system architecture to shipped production software, end-to-end.',
    iconColor: 'text-gold-600',
    features: [
      'Web, mobile & high-concurrency microservices',
      'Schema-level security & compliance audit trails',
      'Automated CI/CD, observability & IaC by default',
      'Milestone payments tied directly to verified software',
      'Guaranteed post-launch SLA & scaling support',
    ],
    cta: 'Scope a Production Build',
    featured: true,
  },
  {
    icon: RiTeamLine,
    name: 'Embedded Technologies Pod',
    price: 'From $15k/mo',
    unit: 'Monthly retainer · Rolling',
    tagline: 'Dedicated senior technologies capacity embedded directly inside your team.',
    iconColor: 'text-gold-600',
    features: [
      'Principal engineers embedded in your daily workflow',
      'Strict technologies bar: peer review, automated tests',
      'Flexible scale up or down with 30-day notice',
      'Ideal for incremental legacy modernization',
      'Structured technical documentation & knowledge transfer',
    ],
    cta: 'Check Pod Availability',
    featured: false,
  },
];

const principles = [
  {
    title: 'Fixed discovery, honest builds',
    body: 'We quote milestones against working, tested software - never arbitrary estimates that inflate halfway through.',
  },
  {
    title: '100% Client IP Ownership',
    body: 'All code, infrastructure configs, schemas, and documentation are transferred in full. Zero vendor lock-in.',
  },
  {
    title: 'Principal Engineers Only',
    body: 'You work directly with the senior specialists architecting your systems. No junior handoffs or account managers.',
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="ENGAGEMENT MODELS"
        title="Clear scopes. Phased delivery. Zero surprises."
        subtitle="Every engagement starts with proven architecture - you test working software before committing large capital."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {models.map((m) => (
              <RevealOnScroll key={m.name}>
                <div
                  className={`relative flex h-full flex-col justify-between rounded-[32px] border p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 ${
                    m.featured
                      ? 'border-gold bg-ink text-white shadow-brand-hover'
                      : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-brand-card'
                  }`}
                >
                  {m.featured ? (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink shadow-md">
                      Flagship Model
                    </span>
                  ) : null}

                  <div>
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center ${m.iconColor}`}
                    >
                      <m.icon className="h-7 w-7" />
                    </div>

                    <h2 className="text-2xl font-black tracking-tight">{m.name}</h2>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-mono text-3xl font-black">{m.price}</span>
                    </div>
                    <div className={`mt-1 text-xs font-semibold ${m.featured ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {m.unit}
                    </div>

                    <p className={`mt-4 text-[14.5px] leading-relaxed ${m.featured ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {m.tagline}
                    </p>

                    <ul className="mb-8 mt-6 space-y-3">
                      {m.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[14px] leading-relaxed">
                          <FiCheckCircle
                            className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                              m.featured ? 'text-gold' : 'text-gold-700'
                            }`}
                          />
                          <span className={m.featured ? 'text-neutral-200' : 'text-neutral-700'}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all hover:scale-105 ${
                      m.featured
                        ? 'bg-gold text-ink hover:bg-gold-300 shadow-lg'
                        : 'bg-ink text-white hover:bg-ink-soft shadow-md'
                    }`}
                  >
                    {m.cta}
                    <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Guiding Principles */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <RevealOnScroll key={p.title}>
                <div className="h-full rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold tracking-tight text-ink">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{p.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
