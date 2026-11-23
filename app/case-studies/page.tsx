import type { Metadata } from 'next';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Case Studies - WestLinks',
  description:
    'How WestLinks builds products that survive real load, real regulation, and real constraints - with measurable results.',
};

const cases = [
  {
    id: 'livestockos',
    num: '01',
    product: 'LivestockOS',
    sector: 'AgTech · Live product',
    title: 'Engineered for patchy connectivity, not perfect Wi-Fi',
    challenge:
      'Farm-management tools assume a reliable connection. Our client’s field teams work across areas with intermittent signal and shared devices - records taken in the field were being lost, and spreadsheets had become the source of truth.',
    solution:
      'We designed LivestockOS offline-first: health records, herd tracking, and yield data log locally on-device and reconcile automatically once connectivity returns. Built in Flutter with encrypted local SQLite and zero-conflict multi-master sync.',
    metrics: [
      { value: '0', label: 'records lost since offline sync shipped' },
      { value: '< 10s', label: 'to log a complete health record in the field' },
      { value: '100%', label: 'of herd data reconciled after reconnect' },
    ],
    tags: ['Offline-First Sync', 'Flutter & SQLite', 'Conflict-Free Merge'],
  },
  {
    id: 'price-monitor',
    num: '02',
    product: 'Price Monitor',
    sector: 'Retail Intelligence · Live product',
    title: 'Continuous competitor intelligence without manual scraping',
    challenge:
      'Retail merchandising teams were spending dozens of hours every week manually checking competitor prices. By the time an aggressive price drop was spotted, market share had already migrated.',
    solution:
      'Price Monitor automates competitor tracking end-to-end: high-frequency distributed crawling, automated proxy rotation, change detection, and sub-minute alerting - protecting margins in real-time.',
    metrics: [
      { value: '6+ hrs/week', label: 'of manual checking eliminated per team' },
      { value: '420ms', label: 'from competitor price change to anomaly alert' },
      { value: '24/7/365', label: 'unattended automated market coverage' },
    ],
    tags: ['Distributed Crawler', 'Python & Redis', 'Predictive Margin Triggers'],
  },
  {
    id: 'westlinks-exchange',
    num: '03',
    product: 'WestLinks Exchange',
    sector: 'FinTech · In development',
    title: 'Custody-grade security & matching from the schema up',
    challenge:
      'A digital currency exchange lives or dies on trust. Most platforms bolt compliance and custody tooling on after launch - then discover the core database architecture cannot support high throughput regulatory audits.',
    solution:
      'Exchange is architected with a sub-millisecond matching engine, institutional multi-sig key sharding, automated AML/KYC filters, and schema-level immutable audit trails before a single live trade is accepted.',
    metrics: [
      { value: 'Day One', label: 'institutional compliance tooling baked in' },
      { value: '14,200 TPS', label: 'simulated matching engine throughput' },
      { value: 'Multi-Sig', label: 'cold-storage key isolation architecture' },
    ],
    tags: ['Order Matching Engine', 'Multi-Sig Custody', 'Automated Compliance'],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="CASE STUDIES"
        title="Proof over promises."
        subtitle="How we engineer systems that survive real volume, strict regulation, and harsh field constraints - with measurable performance."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto flex max-w-content flex-col gap-10 px-5 md:px-8">
          {cases.map((c) => (
            <RevealOnScroll key={c.id}>
              <article
                id={c.id}
                className="scroll-mt-32 overflow-hidden rounded-[32px] border border-neutral-200 shadow-brand-card bg-white"
              >
                <div className="bg-ink p-8 text-white sm:p-12 border-b border-neutral-800">
                  <div className="mb-3 font-mono text-xs font-bold text-gold tracking-wider">
                    {c.num} / {c.product} - <span className="text-neutral-300">{c.sector}</span>
                  </div>
                  <h2 className="max-w-[700px] text-[clamp(24px,3.5vw,36px)] font-black leading-[1.12] tracking-tight">
                    {c.title}
                  </h2>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] font-semibold text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="p-8 sm:p-12 lg:col-span-7">
                    <h3 className="mb-3 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                      The Operational Challenge
                    </h3>
                    <p className="text-[15px] leading-relaxed text-neutral-600">{c.challenge}</p>

                    <h3 className="mb-3 mt-8 font-mono text-[11px] font-bold uppercase tracking-wider text-gold-700">
                      What We Architected & Built
                    </h3>
                    <p className="text-[15px] leading-relaxed text-neutral-600">{c.solution}</p>
                  </div>

                  <div className="flex flex-col justify-center border-t border-neutral-200 bg-neutral-50 p-8 sm:p-12 lg:col-span-5 lg:border-l lg:border-t-0">
                    <h3 className="mb-6 font-mono text-[11px] font-bold uppercase tracking-wider text-gold-700">
                      Measured Business Results
                    </h3>
                    <div className="space-y-6">
                      {c.metrics.map((m) => (
                        <div key={m.label} className="flex items-start gap-4">
                          <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center text-gold-600">
                            <FiCheckCircle className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-mono text-2xl font-black text-ink">
                              {m.value}
                            </div>
                            <div className="text-xs text-neutral-600 font-medium">{m.label}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
