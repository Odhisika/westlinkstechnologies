'use client';

import { useState } from 'react';
import { FiMail, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { CONTACT_EMAIL, NEWSLETTER_ENDPOINT } from '@/lib/site';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!NEWSLETTER_ENDPOINT) return;
    if (!/.+@.+\..+/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, source: 'westlinks-memos' }),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="bg-white py-20 border-t border-neutral-200/80">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll>
          <div className="flex flex-col items-center gap-8 rounded-[32px] border border-neutral-200 bg-cream p-10 text-center shadow-sm md:flex-row md:p-14 md:text-left">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center text-gold-700">
              <FiMail className="h-7 w-7" />
            </div>

            {status === 'sent' ? (
              <div className="flex flex-1 flex-col items-center gap-2 md:items-start">
                <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-ink">
                  <FiCheckCircle className="h-5 w-5 text-gold-500" />
                  You&apos;re on the list.
                </h2>
                <p className="text-[14.5px] text-neutral-600">
                  One deep technical memo per month. Zero marketing sequences.
                </p>
              </div>
            ) : (
              <>
                <div className="flex-1">
                  <h2 className="text-2xl font-black tracking-tight text-ink">
                    Technologies memos, once a month.
                  </h2>
                  <p className="mt-1.5 max-w-[440px] text-[14px] leading-relaxed text-neutral-600">
                    Deep dives on high-throughput matching, offline sync CRDTs, and applied AI guardrails - written by engineers.
                  </p>
                </div>

                {NEWSLETTER_ENDPOINT ? (
                  <form onSubmit={submit} className="w-full max-w-[420px]">
                    <div className="flex gap-2.5">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="work-email@company.com"
                        aria-label="Email address"
                        className="min-w-0 flex-1 rounded-full border border-neutral-300 bg-white px-5 py-3.5 text-[14.5px] transition-shadow focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold-100"
                      />
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="flex-shrink-0 rounded-full bg-ink px-7 py-3.5 text-xs font-bold text-white shadow-md transition-all enabled:hover:bg-ink-soft enabled:hover:scale-105 disabled:opacity-60"
                      >
                        {status === 'sending' ? '…' : 'Subscribe'}
                      </button>
                    </div>
                    {status === 'error' ? (
                      <p className="mt-2 text-left text-[12px] text-gold-500">
                        Something went wrong - please try again later.
                      </p>
                    ) : null}
                  </form>
                ) : (
                  <div className="w-full max-w-[420px]">
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Request WestLinks technical memos')}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-ink-soft hover:scale-105"
                    >
                      Request the memo
                      <FiArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <p className="mt-2 text-[12px] text-neutral-500">
                      Email us and we&apos;ll add you to the list.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
