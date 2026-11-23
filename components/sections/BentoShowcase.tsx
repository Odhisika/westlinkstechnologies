'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function BentoShowcase() {
  const [selectedCurrency, setSelectedCurrency] = useState<'BTC' | 'ETH' | 'USDT'>('BTC');

  return (
    <section className="bg-neutral-50 py-24 border-t border-neutral-200/80">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll className="mb-14 text-center">
          <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
            Ecosystem Showcase
          </span>
          <h2 className="mx-auto max-w-2xl text-[clamp(28px,3.8vw,42px)] font-black tracking-tight text-ink">
            Engineered like the world&apos;s leading FinTechs.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-neutral-600">
            From low-latency matching engines to offline-first edge databases, see the architecture that powers our products.
          </p>
        </RevealOnScroll>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Card 1: Large Featured - WestLinks Exchange (Col span 7) */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-brand-card transition-all duration-300 hover:shadow-brand-hover md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Brand Pill Tag */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-800 tracking-wide">WestLinks Exchange</span>
                <span className="text-xs font-bold text-gold-700">Real-Time Engine</span>
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight text-ink">
                Sub-millisecond Order Matching & Custody
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 max-w-lg">
                Built from the ground up in high-throughput C++/Go with FPGA-compatible architecture, audited multi-sig key sharding, and real-time automated regulatory reporting.
              </p>
            </div>

            {/* Interactive Widget Mockup */}
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-ink to-neutral-900 p-5 text-white shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-3">
                <div className="flex items-center gap-2">
                  {(['BTC', 'ETH', 'USDT'] as const).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setSelectedCurrency(curr)}
                      className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                        selectedCurrency === curr
                          ? 'bg-gold text-ink'
                          : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                      }`}
                    >
                      {curr}/USD
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gold-400 font-mono">
                  <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
                  Live Order Book
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase">24h Volume</div>
                  <div className="text-base font-bold text-white mt-0.5">$48.2M USD</div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-400 uppercase">Execution Latency</div>
                  <div className="text-base font-bold text-gold-400 mt-0.5">&lt; 0.45 ms</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-100">
              <span className="text-xs font-semibold text-neutral-500">Custody compliance verified</span>
              <Link
                href="/products#westlinks-exchange"
                className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 hover:text-gold-900"
              >
                View exchange architecture
                <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: AgTech - LivestockOS (Col span 5) */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-brand-card transition-all duration-300 hover:shadow-brand-hover md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Pill Tag */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold text-gold-900">LivestockOS</span>
                <span className="font-mono text-[11px] font-bold text-neutral-500">
                  Flutter + SQLite
                </span>
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-ink">
                Offline-First Field Telemetry
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Guaranteed zero data loss even in dead-zones. Local CRDT-based multi-master replication reconciles thousands of herd health logs cleanly.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gold-200 bg-gold-50 p-5">
              <div className="flex items-center justify-between text-xs font-bold text-gold-900">
                <span>Field Sync Status</span>
                <span className="text-gold-700">100% Conflict-Free</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-2 flex-1 rounded-full bg-gold-200 overflow-hidden">
                  <div className="h-full w-full bg-gold-600 rounded-full" />
                </div>
                <span className="font-mono text-xs font-bold text-gold-800">1,240/1,240</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100">
              <Link
                href="/case-studies#livestockos"
                className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 hover:text-gold-900"
              >
                Read field study
                <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 3: Price Monitor (Col span 5) */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-brand-card transition-all duration-300 hover:shadow-brand-hover md:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Pill Tag */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold text-gold-900">Price Monitor</span>
                <span className="text-xs font-bold text-gold-700">Live Crawler</span>
              </div>

              <h3 className="text-xl font-extrabold tracking-tight text-ink">
                Market Radar & Price Intelligence
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Continuous crawling across global retail channels. Automatic margin-defense triggers notify commercial teams before revenue is impacted.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gold-200 bg-gold-50 p-5">
              <div className="flex items-center justify-between text-xs text-gold-950 font-bold">
                <span>Real-Time Anomaly Flagged</span>
                <span className="text-gold-700 font-mono font-black">-14% Competitor Drop</span>
              </div>
              <p className="mt-1 text-xs text-gold-800">
                Defensive re-price recommendation generated automatically.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100">
              <Link
                href="/case-studies#price-monitor"
                className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 hover:text-gold-900"
              >
                Explore crawler engine
                <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 4: BlockOS (Col span 7) */}
          <div className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-brand-card transition-all duration-300 hover:shadow-brand-hover md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Brand Pill Tag */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-900">BlockOS Enterprise</span>
                <span className="text-xs font-bold text-gold-700">Permissioned Ledger</span>
              </div>

              <h3 className="text-2xl font-extrabold tracking-tight text-ink">
                Cryptographic Audit Trails for Regulated Enterprises
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 max-w-xl">
                Zero-knowledge proof verification, automated compliance ledgering, and immutable state machines engineered for sovereign institutions.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center">
                <div className="font-mono text-xl font-black text-ink">PBFT</div>
                <div className="mt-1 text-xs font-semibold text-neutral-500">Byzantine Fault Consensus</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center">
                <div className="font-mono text-xl font-black text-ink">Zero-ZK</div>
                <div className="mt-1 text-xs font-semibold text-neutral-500">Privacy Proofs</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center">
                <div className="font-mono text-xl font-black text-ink">SCHEMA</div>
                <div className="mt-1 text-xs font-semibold text-neutral-500">Security-first design</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-neutral-100">
              <span className="text-xs font-semibold text-neutral-500">Enterprise deployment ready</span>
              <Link
                href="/products#blockos"
                className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-gold-700 hover:text-gold-900"
              >
                Read BlockOS specifications
                <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

