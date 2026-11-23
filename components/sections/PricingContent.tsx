'use client';

import { useState } from 'react';
import type { ElementType } from 'react';
import { FiCheckCircle, FiArrowRight, FiGlobe } from 'react-icons/fi';
import { RiCompassDiscoverLine, RiHammerLine, RiTeamLine } from 'react-icons/ri';
import Link from 'next/link';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

type Market = 'ghana' | 'international';

type PriceInfo = {
  price: string;
  unit: string;
};

type Plan = {
  icon: ElementType;
  name: string;
  prices: Record<Market, PriceInfo>;
  tagline: string;
  features: string[];
  cta: string;
  featured: boolean;
};

type Service = {
  name: string;
  detail: string;
  prices: Record<Market, string>;
};

const markets: { id: Market; label: string; flag: string }[] = [
  { id: 'ghana', label: 'Ghana', flag: '🇬🇭' },
  { id: 'international', label: 'International', flag: '🌍' },
];

const plans: Plan[] = [
  {
    icon: RiCompassDiscoverLine,
    name: 'Discovery & Planning',
    prices: {
      ghana: { price: 'GH₵2,000–4,000', unit: 'Fixed scope · 1–2 weeks' },
      international: { price: '$500–$1,000', unit: 'Fixed scope · 1–2 weeks' },
    },
    tagline: 'Start with a clear plan, a realistic budget and a scope you can approve before any build work begins.',
    features: [
      'Business and technical requirements review',
      'Page or app structure with simple wireframes',
      'Recommended technology stack and approach',
      'Realistic cost and timeline estimate',
      'All notes and documents are yours to keep',
    ],
    cta: 'Start Discovery & Planning',
    featured: false,
  },
  {
    icon: RiHammerLine,
    name: 'Website & Software Development',
    prices: {
      ghana: { price: 'GH₵5,000–60,000+', unit: 'Project-based · Milestone payments' },
      international: { price: '$1,500–$15,000+', unit: 'Project-based · Milestone payments' },
    },
    tagline: 'From a professional business website to custom software that runs your operations — built in reviewable phases.',
    features: [
      'Business websites and web applications',
      'E-commerce and payment integrations',
      'API development and system integrations',
      'Business process automation where needed',
      'Milestone payments tied to work you review',
    ],
    cta: 'Get a Project Quote',
    featured: true,
  },
  {
    icon: RiTeamLine,
    name: 'Dedicated Developer',
    prices: {
      ghana: { price: 'From GH₵8,000/mo', unit: 'Monthly retainer · Agreed capacity' },
      international: { price: 'From $1,500/mo', unit: 'Monthly retainer · Agreed capacity' },
    },
    tagline: 'Extra engineering capacity inside your team, without the cost and delay of hiring full-time.',
    features: [
      'A developer working in your tools and workflow',
      'Weekly updates and clearly agreed priorities',
      'Code review and testing included',
      'Adjust or pause with 30 days’ notice',
      'Documentation and knowledge transfer as standard',
    ],
    cta: 'Check Availability',
    featured: false,
  },
];

const capabilities = [
  'Website design & development',
  'Custom web applications',
  'Business process automation',
  'E-commerce & payment integrations',
  'API development & integrations',
  'Software maintenance & support',
];

const services: Service[] = [
  {
    name: 'Website maintenance',
    detail: 'Updates, security checks, backups and small content changes.',
    prices: { ghana: 'GH₵500–1,500/mo', international: '$75–250/mo' },
  },
  {
    name: 'Software maintenance',
    detail: 'Bug fixes, dependency updates and ongoing technical support.',
    prices: { ghana: 'GH₵1,500–4,000/mo', international: '$250–750/mo' },
  },
  {
    name: 'API & system integrations',
    detail: 'Connect your platforms, payment providers and internal tools.',
    prices: { ghana: 'From GH₵3,000', international: 'From $500' },
  },
];

export default function PricingContent() {
  const [market, setMarket] = useState<Market>('ghana');

  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-content px-5 md:px-8">
        {/* Market selector */}
        <RevealOnScroll>
          <div className="mx-auto mb-12 flex w-fit items-center gap-1 rounded-full border border-neutral-200 bg-white p-1.5 shadow-sm">
            {markets.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setMarket(m.id)}
                aria-pressed={market === m.id}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                  market === m.id
                    ? 'bg-ink text-white shadow-md'
                    : 'text-neutral-500 hover:text-ink'
                }`}
              >
                <span aria-hidden="true">{m.flag}</span>
                {m.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <RevealOnScroll key={plan.name}>
              <div
                className={`relative flex h-full flex-col justify-between rounded-[32px] border p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.featured
                    ? 'border-gold bg-ink text-white shadow-brand-hover'
                    : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-brand-card'
                }`}
              >
                {plan.featured ? (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink shadow-md">
                    Most Popular
                  </span>
                ) : null}

                <div>
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center ${plan.featured ? 'text-gold' : 'text-gold-600'}`}
                  >
                    <plan.icon className="h-7 w-7" />
                  </div>

                  <h2 className="text-2xl font-black tracking-tight">{plan.name}</h2>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-black">{plan.prices[market].price}</span>
                  </div>
                  <div className={`mt-1 text-xs font-semibold ${plan.featured ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {plan.prices[market].unit}
                  </div>

                  <p className={`mt-4 text-[14.5px] leading-relaxed ${plan.featured ? 'text-neutral-300' : 'text-neutral-600'}`}>
                    {plan.tagline}
                  </p>

                  <ul className="mb-8 mt-6 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[14px] leading-relaxed">
                        <FiCheckCircle
                          className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                            plan.featured ? 'text-gold' : 'text-gold-700'
                          }`}
                        />
                        <span className={plan.featured ? 'text-neutral-200' : 'text-neutral-700'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all hover:scale-105 ${
                    plan.featured
                      ? 'bg-gold text-ink hover:bg-gold-300 shadow-lg'
                      : 'bg-ink text-white hover:bg-ink-soft shadow-md'
                  }`}
                >
                  {plan.cta}
                  <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="mt-8 text-center">
            <p className="text-[13px] leading-relaxed text-neutral-500">
              Illustrative pricing structure. Final quotations depend on project scope and complexity.
            </p>
            {market === 'ghana' ? (
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
                Standard payment plan: <span className="font-semibold text-neutral-700">50% upfront · 30% at the agreed development milestone · 20% before final handover.</span>
              </p>
            ) : (
              <p className="mt-2 text-[13px] leading-relaxed text-neutral-500">
                Payment milestones are agreed and fixed in your quotation before work begins.
              </p>
            )}
          </div>
        </RevealOnScroll>

        {/* Positioning strip */}
        <div className="mt-20 rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="mb-6 flex items-center gap-3">
            <FiGlobe className="h-5 w-5 text-gold-700" />
            <h2 className="text-xl font-black tracking-tight text-ink sm:text-2xl">
              Business Software &amp; Digital Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2.5 rounded-2xl bg-cream px-4 py-3 text-[14px] font-semibold text-neutral-700"
              >
                <FiCheckCircle className="h-4 w-4 flex-shrink-0 text-gold-700" />
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Additional services */}
        <div className="mt-16">
          <RevealOnScroll>
            <div className="mb-8 text-center">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-gold-700">
                Ongoing support
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-ink">
                Services beyond the build
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
                Keep your systems secure, updated and growing long after launch.
              </p>
            </div>
          </RevealOnScroll>

          <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm">
            {services.map((s, i) => (
              <RevealOnScroll key={s.name}>
                <div
                  className={`grid grid-cols-1 gap-4 px-6 py-6 sm:px-10 md:grid-cols-[1.4fr_1fr] md:items-center ${
                    i !== services.length - 1 ? 'border-b border-neutral-100' : ''
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-ink">{s.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{s.detail}</p>
                  </div>
                  <div className="md:text-right">
                    <span className="font-mono text-lg font-black text-gold-700">
                      {s.prices[market]}
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <p className="mt-4 text-center text-[13px] leading-relaxed text-neutral-500">
            Maintenance agreements specify support hours, response times, included changes, and any hosting or third-party costs.
          </p>
        </div>
      </div>
    </section>
  );
}
