'use client';

import Link from 'next/link';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const cases = [
  {
    num: '01 / LivestockOS',
    slug: 'livestockos',
    gradient: 'from-neutral-900 via-gold-950 to-neutral-950',
    title: 'Engineered for patchy connectivity, not perfect Wi-Fi',
    blurb:
      'Most field tools assume constant cellular connection. LivestockOS operates offline-first, ensuring zero data loss across thousands of distributed agricultural records.',
    tags: ['Offline-First CRDT', 'Flutter & SQLite', 'Conflict-Free Sync'],
    status: 'Live In Production',
    statusStyle: 'bg-gold-100 text-gold-800 border-gold-200',
    body: 'We designed LivestockOS around how field operations actually run: dead zones, shared rugged tablets, and field staff who need instant responsiveness. Records are logged locally in encrypted SQLite and reconciled automatically once signal returns.',
    cta: 'View Case Study',
    metric: '100% Zero-Data-Loss Rate',
  },
  {
    num: '02 / Price Monitor',
    slug: 'price-monitor',
    gradient: 'from-neutral-900 via-gold-950 to-neutral-950',
    title: 'Continuous competitor intelligence without manual scraping',
    blurb:
      'Replaces manual spreadsheet audits with always-on market crawling, enabling dynamic pricing adjustments based on real-time market shifts.',
    tags: ['Automated Distributed Crawling', 'Python & Redis', 'Sub-Minute Triggers'],
    status: 'Live In Production',
    statusStyle: 'bg-gold-100 text-gold-800 border-gold-200',
    body: 'Commercial teams were losing margins to unmonitored competitor discounts. Price Monitor crawls millions of SKUs with automated proxy rotation, alerting merchandising heads before price discrepancies erode market share.',
    cta: 'View Case Study',
    metric: '420ms Anomaly Flagging',
  },
  {
    num: '03 / WestLinks Exchange',
    slug: 'westlinks-exchange',
    gradient: 'from-neutral-900 via-gold-950 to-ink',
    title: 'Institutional custody & matching from schema up',
    blurb:
      'A digital asset exchange lives or dies on trust. We architected custody-grade security and automated compliance tooling into Exchange from the ground up.',
    tags: ['Matching Engine', 'Multi-Sig Custody', 'Automated AML/KYC'],
    status: 'In Active Development',
    statusStyle: 'bg-gold-100 text-gold-700 border-gold-200',
    body: 'Exchange is our most rigorous build yet - an ultra-low latency matching engine paired with cold-storage key management and compliance tooling that global FinTech regulators mandate.',
    cta: 'Get Early Access',
    metric: '14,200 TPS Matching Bar',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-24 border-t border-neutral-200/80">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
              Proven Architecture
            </span>
            <h2 className="max-w-[640px] text-[clamp(28px,3.8vw,42px)] font-black leading-[1.15] tracking-tight text-ink">
              A closer look at what we&apos;ve shipped.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group flex flex-shrink-0 items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-xs font-bold text-neutral-700 hover:border-gold hover:text-gold-700 transition-colors"
          >
            All Case Studies
            <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>

        <div className="flex flex-col gap-8">
          {cases.map((c, i) => (
            <RevealOnScroll key={c.num}>
              <div
                className={`grid grid-cols-1 overflow-hidden rounded-[28px] border border-neutral-200 shadow-brand-card transition-all duration-300 hover:shadow-brand-hover lg:grid-cols-12 ${
                  i % 2 === 1 ? 'lg:[direction:rtl] [&>*]:[direction:ltr]' : ''
                }`}
              >
                {/* Visual / Gradient Banner */}
                <div
                  className={`flex flex-col justify-between bg-gradient-to-br ${c.gradient} p-8 text-white sm:p-10 lg:col-span-6`}
                >
                  <div>
                    <div className="mb-4 font-mono text-xs font-bold text-gold-300 tracking-wider">
                      {c.num}
                    </div>
                    <h3 className="mb-4 text-2xl font-black tracking-tight sm:text-3xl">
                      {c.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-300">{c.blurb}</p>
                  </div>

                  <div className="mt-8 border-t border-neutral-700 pt-5">
                    <div className="flex flex-wrap gap-2">
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
                </div>

                {/* Content & Action */}
                <div className="flex flex-col justify-between bg-white p-8 sm:p-10 lg:col-span-6">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span
                        className={`font-mono text-[11px] font-bold ${c.statusStyle.includes('gold') ? (c.statusStyle.includes('100') || c.statusStyle.includes('50') ? 'text-gold-800' : 'text-gold-700') : 'text-neutral-600'}`}
                      >
                        {c.status}
                      </span>
                      <span className="font-mono text-xs font-bold text-neutral-600">
                        {c.metric}
                      </span>
                    </div>

                    <p className="text-[15px] leading-relaxed text-neutral-600">
                      {c.body}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-neutral-100 pt-6">
                    <Link
                      href={`/case-studies#${c.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-ink-soft hover:scale-105"
                    >
                      {c.cta}
                      <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-xs font-bold text-neutral-700 transition-all hover:border-neutral-800"
                    >
                      Talk to an Engineer
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
