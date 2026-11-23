import type { Metadata } from 'next';
import {
  RiBankLine,
  RiSeedlingLine,
  RiHeartPulseLine,
  RiGraduationCapLine,
  RiGovernmentLine,
  RiShoppingCart2Line,
  RiTruckLine,
} from 'react-icons/ri';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Capabilities from '@/components/sections/Capabilities';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Solutions - WestLinks',
  description: 'WestLinks builds software for Finance, Agriculture, Healthcare, Education, Government, Retail, and Logistics.',
};

const solutions = [
  {
    icon: RiBankLine,
    title: 'Finance & Banking',
    description:
      'Real-time transaction systems, compliance tooling, and custody-grade security for platforms that handle money.',
    badge: 'text-gold-600',
  },
  {
    icon: RiSeedlingLine,
    title: 'Agriculture & Field Systems',
    description:
      'Offline-first tools built for the field, not the office - because connectivity is a constraint, not an assumption.',
    badge: 'text-gold-600',
  },
  {
    icon: RiHeartPulseLine,
    title: 'Healthcare & Life Sciences',
    description:
      'Software built around extreme data sensitivity and zero-downtime reliability, where errors carry real consequences.',
    badge: 'text-gold-600',
  },
  {
    icon: RiGraduationCapLine,
    title: 'Education & Knowledge',
    description:
      'Platforms that stay responsive at scale across disparate devices and low bandwidth, for institutions and learners.',
    badge: 'text-gold-600',
  },
  {
    icon: RiGovernmentLine,
    title: 'Government & Public Sector',
    description:
      'Auditable, transparent state systems built to withstand stringent public security review and high concurrent citizen traffic.',
    badge: 'text-gold-600',
  },
  {
    icon: RiShoppingCart2Line,
    title: 'Retail & Commerce',
    description:
      'Continuous pricing intelligence and commerce tooling that responds to dynamic markets moving in minutes, not weeks.',
    badge: 'text-gold-600',
  },
  {
    icon: RiTruckLine,
    title: 'Logistics & Supply Chain',
    description:
      'Real-time fleet telemetry and inventory coordination systems where a delayed update is as costly as an incorrect one.',
    badge: 'text-gold-600',
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="SOLUTIONS"
        title="Built for sectors that cannot afford to get it wrong."
        subtitle="From regulated finance to low-connectivity agriculture, we design for the structural constraints of the industry first."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-6 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <RevealOnScroll key={s.title}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-card hover:border-gold/40">
                  <div>
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${s.badge}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-neutral-600">
                      {s.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <Capabilities />
      <CTA />
    </>
  );
}
