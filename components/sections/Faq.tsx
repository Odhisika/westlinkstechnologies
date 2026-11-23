'use client';

import { useState } from 'react';
import { FiPlus, FiMinus, FiHelpCircle } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const faqs = [
  {
    q: 'Do you build products end-to-end or augment existing teams?',
    a: 'Both. We architect and ship complete products from zero to scaled production, and we also embed senior technologies pods inside high-growth teams that need deep technical specialization. Either way, the exact same rigor applies: automated CI/CD, schema-level security, and comprehensive test suites.',
  },
  {
    q: 'How do you handle security and compliance for financial systems?',
    a: 'Access control, zero-knowledge proofs, cold-storage multi-sig custody, and automated audit logs are designed at the database schema level before a single line of business logic is written. For FinTech and blockchain work, we build toward strict regulatory guidelines from day one.',
  },
  {
    q: 'Can you integrate with or modernize legacy infrastructure?',
    a: 'Yes. We favor pragmatic, incremental modernization - isolating legacy bottlenecks with resilient event bridges, establishing clean API boundaries, and migrating critical systems without customer downtime.',
  },
  {
    q: 'How does a typical engagement begin?',
    a: 'We start with a technical architecture & discovery sprint where we unpack your throughput, concurrency, latency, and compliance constraints. We deliver a clear architecture specification and fixed-milestone roadmap before you commit significant technologies capital.',
  },
  {
    q: 'What SLA and post-launch support do you provide?',
    a: 'Every deployment includes automated infrastructure-as-code, observability telemetry, and 24/7 monitoring alerts. We offer guaranteed uptime SLAs and continuous iteration retainer agreements to ensure your systems scale smoothly under production load.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <RevealOnScroll>
            <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
              Clear Answers
            </span>
            <h2 className="text-[clamp(30px,3.8vw,44px)] font-black leading-[1.15] tracking-tight text-ink">
              Frequently asked questions.
            </h2>
            <p className="mt-4 max-w-[400px] text-[16px] leading-relaxed text-neutral-600">
              Have questions about our architecture methodology, compliance standards, or delivery models?
            </p>
          </RevealOnScroll>

          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => (
              <RevealOnScroll key={f.q}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    open === i
                      ? 'border-gold bg-white shadow-brand-sm'
                      : 'border-neutral-200 bg-neutral-50 hover:border-neutral-300 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-[16px] font-bold tracking-tight text-ink">
                      {f.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        open === i ? 'bg-ink text-white rotate-45' : 'bg-neutral-200 text-neutral-700'
                      }`}
                    >
                      <FiPlus className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-neutral-600 border-t border-neutral-100 pt-4">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
