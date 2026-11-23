'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FiArrowRight,
  FiShield,
  FiCpu,
  FiTrendingUp,
  FiCheckCircle,
  FiTerminal,
  FiActivity,
  FiLock,
} from 'react-icons/fi';
import { RiExchangeDollarLine, RiShieldFlashLine, RiSeedlingLine } from 'react-icons/ri';
import TopographicBackground from '@/components/ui/TopographicBackground';

const telemetryStreams = [
  {
    id: 'platform',
    label: 'Enterprise Platform',
    status: 'PRODUCTION · MONITORED',
    highlight: 'Continuously monitored infrastructure',
  },
  {
    id: 'automation',
    label: 'Workflow Automation',
    status: 'VALIDATED PROCESSES',
    highlight: 'Independently audited workflows',
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure',
    status: 'REDUNDANT · RESILIENT',
    highlight: 'Encrypted, redundant data storage',
  },
];

export default function Hero() {
  const [activeStream, setActiveStream] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStream((prev) => (prev + 1) % telemetryStreams.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const stream = telemetryStreams[activeStream];

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background topographic wave contours + luminous gradient mesh */}
      <TopographicBackground variant="light" showMesh={true} />

      {/* Gold aurora wave sweeping across top right (matches brand logo) */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-[680px] w-[750px] opacity-70 lg:opacity-85">
        <div
          className="h-full w-full rounded-full blur-[110px]"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, #E8B800 0%, #CC9606 35%, #A97A08 65%, #5A4206 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Authoritative Typography & High-Conversion CTAs */}
          <div className="lg:col-span-7">
            {/* Headline */}
            <h1 className="text-[clamp(38px,4.5vw,66px)] font-black leading-[1.08] tracking-[-0.035em] text-neutral-950">
              Technology Built for{' '}
              <span className="text-gold-700">
                Real-World Business.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[clamp(16px,1.8vw,19px)] font-medium leading-relaxed text-neutral-600">
              Westlinks Technologies builds practical software solutions that help businesses manage,
              automate, and grow with confidence.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(241,182,11,0.35)] transition-all hover:bg-ink-soft hover:shadow-brand-hover hover:scale-[1.02]"
              >
                <span>Book Technical Consultation</span>
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Key Specs Micro-List */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-neutral-200/80 pt-6">
              <div>
                <div className="font-mono text-2xl font-black text-neutral-900">Innovative</div>
                <div className="text-xs font-medium text-neutral-500">Products</div>
              </div>
              <div className="border-l border-neutral-200/80 pl-4">
                <div className="font-mono text-2xl font-black text-neutral-900">Reliable</div>
                <div className="text-xs font-medium text-neutral-500">Systems</div>
              </div>
              <div className="border-l border-neutral-200/80 pl-4">
                <div className="font-mono text-2xl font-black text-neutral-900">Africa</div>
                <div className="text-xs font-medium text-neutral-500">And Beyond</div>
              </div>
            </div>
          </div>

          {/* Right column: live interactive architecture telemetry console */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-5 shadow-brand-elevated">
              {/* Card Top Pill Badge & Window Controls */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-gold-300" />
                  <div className="h-3 w-3 rounded-full bg-gold-500" />
                  <div className="h-3 w-3 rounded-full bg-neutral-400" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-neutral-600">
                    <FiActivity className="h-3.5 w-3.5 text-gold-500 animate-pulse" />
                    LIVE PRODUCTION · MONITORED
                  </span>
                </div>
              </div>

              {/* Stream Switcher Tabs */}
              <div className="mt-4 flex rounded-xl bg-neutral-100 p-1">
                {telemetryStreams.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStream(idx)}
                    className={`flex-1 rounded-lg py-1.5 text-xs font-bold transition-all ${
                      activeStream === idx
                        ? 'bg-white text-gold-700 shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {s.label.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Dynamic Live Telemetry Card */}
              <div className="mt-4 rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      Core Telemetry
                    </span>
                    <h3 className="mt-0.5 text-sm font-bold text-neutral-900">{stream.label}</h3>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-gold-700">
                    {stream.status}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2 rounded-lg bg-white p-2.5 text-xs text-neutral-700 shadow-sm">
                  <FiCheckCircle className="h-4 w-4 text-gold-500 shrink-0" />
                  <span className="font-medium text-neutral-800">{stream.highlight}</span>
                </div>
              </div>

              {/* Live Mock Terminal Log */}
              <div className="mt-4 rounded-2xl bg-neutral-950 p-3.5 font-mono text-[11px] text-neutral-300">
                <div className="flex items-center justify-between text-neutral-500 pb-2 border-b border-neutral-800">
                  <span className="flex items-center gap-1.5">
                    <FiTerminal className="h-3.5 w-3.5 text-gold-400" />
                    wl_node_daemon (v3.1.0)
                  </span>
                  <span className="text-[10px] text-gold-400">SYNCED</span>
                </div>
                <div className="mt-2.5 space-y-1 text-[11px]">
                  <p className="text-gold-400">
                    &gt; [INFO] platform::scheduler run completed (420ms)
                  </p>
                  <p className="text-gold-300">
                    &gt; [AUTH] tenant access logged &mdash; region AF-01
                  </p>
                  <p className="text-neutral-400">
                    &gt; [SYNC] deployment state replicated across clusters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
