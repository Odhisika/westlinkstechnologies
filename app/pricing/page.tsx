import type { Metadata } from 'next';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { RiCompassDiscoverLine, RiHammerLine, RiTeamLine } from 'react-icons/ri';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Pricing & Engagement Models - WestLinks',
  description:
    'Clear, fixed-scope pricing for discovery sprints, full product builds, and embedded engineering teams. Indicative USD starting ranges with milestone-based billing.',
};

const models = [
  {
    icon: RiCompassDiscoverLine,
    name: 'Discovery & Architecture Sprint',
    price: '$3k – $6k',
    unit: 'Fixed scope · 2–3 weeks',
    tagline: 'A short engagement that turns your idea into a clear technical plan you can act on.',
    iconColor: 'text-gold-600',
    features: [
      'Technical discovery session with your team',
      'System architecture blueprint and diagrams',
      'Prioritised build roadmap with rough cost and timeline estimates',
      'Working proof-of-concept for the riskiest part',
      'Documented recommendations you own outright',
    ],
    cta: 'Start a Discovery Sprint',
    featured: false,
  },
  {
    icon: RiHammerLine,
    name: 'Full Product Build',
    price: '$20k – $60k',
    unit: 'Phased delivery · Milestone payments',
    tagline: 'Design, build and launch a production-ready web or mobile product in reviewable phases.',
    iconColor: 'text-gold-600',
    features: [
      'Product scoping, UX design and technical architecture',
      'Web, mobile and backend development',
      'Automated tests, CI/CD and deployment setup',
      'Milestone payments tied to working software you can review',
      'Handover documentation and optional post-launch support',
    ],
    cta: 'Scope a Product Build',
    featured: true,
  },
  {
    icon: RiTeamLine,
    name: 'Embedded Engineering Pod',
    price: 'From $9k/mo',
    unit: 'Monthly retainer · 1–2 senior engineers',
    tagline: 'Senior engineering capacity inside your team, without the cost and delay of hiring full-time.',
    iconColor: 'text-gold-600',
    features: [
      'One or two senior engineers working in your tools and workflow',
      'Code review, automated tests and clear weekly updates',
      'Flexible scope — scale up or down with 30 days’ notice',
      'Knowledge transfer and documentation as standard',
      'Ideal for legacy modernisation or filling a skills gap',
    ],
    cta: 'Check Pod Availability',
    featured: false,
  },
];

const principles = [
  {
    title: 'Scope and price agreed upfront',
    body: 'Every engagement starts with a fixed-price discovery phase. You approve the scope and budget before any build work begins.',
  },
  {
    title: 'You own what we build',
    body: 'All code, designs, infrastructure configs and documentation are handed over to you at the end of every engagement.',
  },
  {
    title: 'Senior engineers throughout',
    body: 'The engineers who scope your project are the ones who build it. No handoffs to junior teams or account managers.',
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="PRICING & ENGAGEMENTS"
        title="Clear scopes. Phased delivery. No surprises."
        subtitle="Indicative USD starting points for each engagement. We agree a fixed scope and price before any work begins."
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
                      Most Popular
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

          <p className="mt-8 text-center text-[13px] leading-relaxed text-neutral-500">
            Prices are indicative USD starting ranges, not quotes. Final scope and a fixed price are agreed during discovery, and build work is billed against milestones you approve.
          </p>

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
