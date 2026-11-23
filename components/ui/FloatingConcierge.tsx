'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FiMessageSquare,
  FiX,
  FiArrowRight,
  FiCheckCircle,
  FiPhone,
} from 'react-icons/fi';
import { RiCustomerService2Line } from 'react-icons/ri';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from '@/lib/site';

export default function FloatingConcierge() {
  const [isOpen, setIsOpen] = useState(true);
  const [minimized, setMinimized] = useState(false);

  const openCrispOrContact = () => {
    if (typeof window !== 'undefined' && (window as unknown as { $crisp?: { push: (args: unknown[]) => void } }).$crisp) {
      (window as unknown as { $crisp: { push: (args: unknown[]) => void } }).$crisp.push(['do', 'chat:open']);
    } else {
      window.location.href = '/contact';
    }
  };

  if (minimized) {
    return (
      <aside aria-label="Sales and Support" className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setMinimized(false)}
          className="group flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-xs font-bold text-neutral-800 shadow-brand-float transition-all hover:-translate-y-0.5 hover:shadow-brand-card hover:border-gold"
          aria-label="Open sales and technologies support concierge"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-500" />
          </span>
          <span className="flex items-center gap-1.5 text-neutral-700">
            <RiCustomerService2Line className="h-4 w-4 text-gold-700" />
            Talk with Technologies
          </span>
        </button>
      </aside>
    );
  }

  return (
    <aside aria-label="Sales and Support" className="fixed bottom-6 right-6 z-50 w-[320px] max-w-[calc(100vw-2rem)]">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-brand-float transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full text-gold-700">
              <RiCustomerService2Line className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-900 leading-tight">WestLinks Concierge</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                <span className="text-[11px] text-neutral-500 font-medium">Technical inquiries welcome</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setMinimized(true)}
            className="rounded-lg p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors"
            aria-label="Minimize concierge widget"
          >
            <FiX className="h-4 w-4" />
          </button>
        </div>

        {/* Action Row 1: Chat */}
        <div className="mt-3 space-y-2">
          <button
            onClick={openCrispOrContact}
            className="flex w-full items-center justify-between rounded-xl border border-gold-100 bg-gold-50 p-2.5 text-left transition-colors hover:bg-gold-100"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg text-gold-700">
                <FiMessageSquare className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900">Chat with Solutions Architect</p>
                <p className="text-[11px] text-neutral-500">Tell us what you&apos;re building</p>
              </div>
            </div>
            <FiArrowRight className="h-3.5 w-3.5 text-gold-700" />
          </button>

          {/* Action Row 2: Email Sales */}
          <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-2.5">
            <div className="flex items-center gap-2 text-neutral-700">
              <FiMessageSquare className="h-3.5 w-3.5 text-neutral-500" />
              <span className="text-[11px] font-semibold text-neutral-600">Enterprise Inquiries</span>
            </div>
            <div className="mt-1 flex items-center justify-between gap-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="min-w-0 truncate font-mono text-sm font-bold text-neutral-900 hover:text-gold-700 transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <Link
                href="/contact"
                className="flex-shrink-0 text-[11px] font-semibold text-gold-700 hover:underline"
              >
                Schedule &rarr;
              </Link>
            </div>
            <div className="mt-1.5 flex items-center justify-between gap-2 border-t border-neutral-200 pt-1.5">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center gap-1.5 font-mono text-xs font-bold text-neutral-900 hover:text-gold-700 transition-colors"
              >
                <FiPhone className="h-3 w-3 text-neutral-500" />
                {CONTACT_PHONE_DISPLAY}
              </a>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
                Direct line
              </span>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
          <span className="flex items-center gap-1">
            <FiCheckCircle className="h-3 w-3 text-gold-500" />
            Security-first engineering
          </span>
          <Link href="/pricing" className="text-neutral-600 hover:text-gold-700">
            Rate Card &rarr;
          </Link>
        </div>
      </div>
    </aside>
  );
}
