'use client';

import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Counter from '@/components/ui/Counter';
import { FiTrendingUp, FiShield, FiCpu, FiCheckCircle } from 'react-icons/fi';

export default function Stats() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 gap-8 rounded-[32px] bg-ink px-8 py-16 text-white shadow-2xl sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 border border-neutral-800">
            <Stat
              icon={<FiCpu className="h-6 w-6 text-gold" />}
              num={<Counter target={5} />}
              label="Products in Ecosystem"
              sub="Independently engineered"
              first
            />
            <Stat
              icon={<FiTrendingUp className="h-6 w-6 text-gold-400" />}
              num={<Counter target={7} />}
              label="Industries Served"
              sub="High-consequence domains"
            />
            <Stat
              icon={<FiCheckCircle className="h-6 w-6 text-gold-400" />}
              num={<Counter target={2026} noCommify />}
              label="Year Founded"
              sub="Global standard bar"
            />
            <Stat
              icon={<FiShield className="h-6 w-6 text-gold-400" />}
              num={<div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white">100%</div>}
              label="Senior Technologies Led"
              sub="Zero offshore shortcuts"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Stat({
  icon,
  num,
  label,
  sub,
  first = false,
}: {
  icon: React.ReactNode;
  num: React.ReactNode;
  label: string;
  sub: string;
  first?: boolean;
}) {
  return (
    <div className={`px-6 text-center lg:border-l lg:border-neutral-700 ${first ? 'lg:border-l-0' : ''}`}>
      <div className="mb-3 flex justify-center">{icon}</div>
      <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-white">{num}</div>
      <div className="mt-2 text-sm font-bold text-neutral-200">{label}</div>
      <div className="mt-0.5 text-xs text-neutral-400">{sub}</div>
    </div>
  );
}
