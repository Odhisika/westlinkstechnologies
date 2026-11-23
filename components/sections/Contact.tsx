'use client';

import { useState } from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiGithub,
  FiLinkedin,
  FiArrowRight,
  FiArrowLeft,
  FiCalendar,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  CONTACT_ENDPOINT,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  SITE_URL,
  SOCIALS,
} from '@/lib/site';

const budgets = ['$10k – $20k', '$20k – $40k', '$40k – $80k', '$80k+', 'Not sure yet'];
const services = ['Full product build', 'Mobile app', 'Web platform', 'Branding & design', 'Consulting / audit'];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'mailto' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    selected: [] as string[],
    message: '',
  });

  const set = (k: keyof typeof form, v: string | string[]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleService = (s: string) =>
    set(
      'selected',
      form.selected.includes(s)
        ? form.selected.filter((x) => x !== s)
        : [...form.selected, s]
    );

  const stepValid =
    step === 0
      ? form.name.trim().length > 1 && /.+@.+\..+/.test(form.email)
      : step === 1
        ? form.budget !== ''
        : true;

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!CONTACT_ENDPOINT) {
      const details = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.company ? `Company / project: ${form.company}` : '',
        form.budget ? `Budget: ${form.budget}` : '',
        form.selected.length ? `Services: ${form.selected.join(', ')}` : '',
        form.message ? `\n${form.message}` : '',
      ]
        .filter(Boolean)
        .join('\n');
      const subject = encodeURIComponent(
        `Project inquiry - ${form.company || form.name}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(details)}`;
      setStatus('mailto');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, source: SITE_URL }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-cream py-24 border-t border-neutral-200/80">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 overflow-hidden rounded-[32px] border border-neutral-200 shadow-brand-card lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left panel */}
            <div className="flex flex-col bg-ink p-10 text-white md:p-12 border-b lg:border-b-0 lg:border-r border-neutral-800">
              <span className="mb-3 inline-block font-mono text-[11px] font-bold uppercase tracking-wider text-gold-200 self-start">
                Principal Direct
              </span>
              <h3 className="mb-3.5 text-3xl font-black tracking-tight">Let&apos;s build together</h3>
              <p className="mb-8 text-[14.5px] leading-relaxed text-neutral-300">
                Share your system specifications and we&apos;ll connect you directly with a principal architect -
                no sales scripts or intermediaries.
              </p>

              <InfoRow icon={<FiMail className="h-4 w-4 text-gold" />} text={CONTACT_EMAIL} />
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="mb-4 flex items-center gap-3.5 text-[14px] font-medium text-neutral-200 transition-colors hover:text-gold-200"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl">
                  <FiPhone className="h-4 w-4 text-gold-400" />
                </span>
                {CONTACT_PHONE_DISPLAY}
              </a>
              <InfoRow icon={<FiMapPin className="h-4 w-4 text-gold-400" />} text="Remote-first · Global Technologies" />
              <InfoRow icon={<FiClock className="h-4 w-4 text-gold-400" />} text="Every inquiry goes to a principal" />

              {BOOKING_URL ? (
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2.5 self-start rounded-full border border-neutral-600 px-5 py-3 text-xs font-bold transition-all hover:bg-neutral-800 hover:border-neutral-500"
                >
                  <FiCalendar className="h-4 w-4 text-gold" />
                  Book a 30-min discovery call
                </a>
              ) : null}

              {SOCIALS.github || SOCIALS.linkedin ? (
                <div className="mt-auto flex gap-3 pt-8">
                  {SOCIALS.github ? (
                    <a
                      href={SOCIALS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WestLinks on GitHub"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-gold hover:bg-neutral-800 hover:text-white"
                    >
                      <FiGithub className="h-4 w-4" />
                    </a>
                  ) : null}
                  {SOCIALS.linkedin ? (
                    <a
                      href={SOCIALS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WestLinks on LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 text-neutral-300 transition-colors hover:border-gold hover:bg-neutral-800 hover:text-white"
                    >
                      <FiLinkedin className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>

            {/* Right panel - multi-step form */}
            <div className="bg-white p-10 md:p-12">
              {status === 'sent' || status === 'mailto' ? (
                <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                  <FiCheckCircle className="mb-4 h-14 w-14 text-gold-500" />
                  <div className="mb-2 text-2xl font-black text-ink">
                    {status === 'mailto' ? 'Email draft opened.' : 'Inquiry received.'}
                  </div>
                  <p className="max-w-[380px] text-[15px] leading-relaxed text-neutral-600">
                    {status === 'mailto' ? (
                      <>
                        Your email app should open with your project details. If it
                        doesn&apos;t, send them to{' '}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-gold-700 underline">
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </>
                    ) : (
                      <>
                        Thanks {form.name.split(' ')[0]} - we&apos;ve received your specs and will be in touch.
                      </>
                    )}
                  </p>
                </div>
              ) : status === 'error' ? (
                <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                  <FiAlertCircle className="mb-4 h-14 w-14 text-gold-500" />
                  <div className="mb-2 text-2xl font-black text-ink">Something went wrong.</div>
                  <p className="max-w-[360px] text-[15px] leading-relaxed text-neutral-600">
                    Please email us directly at{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-gold-700 underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  {/* Progress Tabs */}
                  <div className="mb-8 flex items-center gap-2">
                    {['1. Contact info', '2. Scope & budget', '3. Architecture'].map((label, i) => (
                      <div key={label} className="flex flex-1 flex-col gap-1.5">
                        <div
                          className={`h-1.5 rounded-full transition-colors ${
                            i <= step ? 'bg-ink' : 'bg-neutral-200'
                          }`}
                        />
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider ${
                            i <= step ? 'text-gold-700' : 'text-neutral-400'
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {step === 0 && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field id="cname" label="Full name" placeholder="Jane Doe" required value={form.name} onChange={(v) => set('name', v)} />
                      <Field id="cemail" label="Work email" type="email" placeholder="jane@company.com" required value={form.email} onChange={(v) => set('email', v)} />
                      <div className="sm:col-span-2">
                        <Field id="ccompany" label="Company / Project name (optional)" placeholder="Acme FinTech Inc." value={form.company} onChange={(v) => set('company', v)} />
                      </div>
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <p className="mb-4 text-[14px] font-bold text-ink">
                        What is your estimated investment range?
                      </p>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {budgets.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => set('budget', b)}
                            className={`rounded-2xl border p-4 text-left text-[14.5px] font-bold transition-all ${
                              form.budget === b
                                ? 'border-gold bg-gold-50 text-gold-700 shadow-sm'
                                : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <>
                      <p className="mb-3 text-[14px] font-bold text-ink">
                        Required technologies disciplines (select all that apply)
                      </p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {services.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => toggleService(s)}
                            className={`rounded-full border px-4 py-2 text-[13px] font-bold transition-all ${
                              form.selected.includes(s)
                                ? 'border-gold bg-ink text-white shadow-sm'
                                : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                      <label htmlFor="cmsg" className="mb-1.5 block text-[13px] font-bold text-ink">
                        Technical requirements & timeline
                      </label>
                      <textarea
                        id="cmsg"
                        placeholder="What systems are you building? Concurrency, compliance, or architecture constraints?"
                        value={form.message}
                        onChange={(e) => set('message', e.target.value)}
                        className="min-h-[110px] w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-[14.5px] transition-shadow focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-100"
                      />
                    </>
                  )}

                  {/* Navigation buttons */}
                  <div className="mt-8 flex items-center justify-between gap-3 pt-4 border-t border-neutral-100">
                    {step > 0 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-ink"
                      >
                        <FiArrowLeft className="h-4 w-4" /> Back
                      </button>
                    ) : (
                      <span />
                    )}
                    {step < 2 ? (
                      <button
                        type="button"
                        disabled={!stepValid}
                        onClick={() => stepValid && setStep((s) => s + 1)}
                        className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-bold text-white shadow-md transition-all enabled:hover:bg-ink-soft enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Continue
                        <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="rounded-full bg-ink px-8 py-3.5 text-xs font-bold text-white shadow-md transition-all enabled:hover:bg-ink-soft enabled:hover:scale-105 disabled:opacity-60"
                      >
                        {status === 'sending' ? 'Submitting specs…' : 'Submit Architecture Inquiry'}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function InfoRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="mb-4 flex items-center gap-3.5 text-[14px] font-medium text-neutral-200">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl">
        {icon}
      </div>
      {text}
    </div>
  );
}

function Field({
  id,
  label,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-bold text-ink">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[14.5px] transition-shadow focus:border-gold focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-100"
      />
    </div>
  );
}
