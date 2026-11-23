'use client';

import Link from 'next/link';
import { FiArrowRight, FiShield, FiPhone } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import NetworkCanvas from '@/components/NetworkCanvas';

export default function CTA() {
  return (
    <section className="bg-cream py-20">
      <RevealOnScroll className="mx-5 md:px-8">
        <div className="relative mx-auto max-w-content overflow-hidden rounded-[36px] bg-ink px-6 py-20 text-center text-white shadow-2xl sm:px-12 border border-neutral-800">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-200px] h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-gold/30 blur-[140px]" />
          </div>

          <NetworkCanvas variant="dark" />

          <div className="relative z-[1]">
            <span className="mb-4 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-200">
              Start an Institutional Build
            </span>

            <h2 className="mx-auto mb-4 max-w-[720px] text-[clamp(30px,4.5vw,48px)] font-black leading-[1.08] tracking-tight">
              Ready to build systems that scale without breaking?
            </h2>

            <p className="mx-auto mb-10 max-w-[540px] text-[16.5px] leading-relaxed text-neutral-300">
              We&apos;re a specialized senior team taking on hard infrastructure problems. Share your requirements - a principal engineer will review your architecture.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-9 py-4 text-[15px] font-bold text-ink shadow-[0_16px_36px_-12px_rgba(241,182,11,0.65)] transition-all hover:scale-105 hover:bg-gold-300 hover:shadow-brand-glow"
              >
                Book Your Architecture Consultation
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/products"
                className="rounded-full border border-neutral-600 bg-neutral-800 px-8 py-4 text-[15px] font-bold transition-all hover:scale-105 hover:border-neutral-500 hover:bg-neutral-700"
              >
                Explore Product Family
              </Link>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
