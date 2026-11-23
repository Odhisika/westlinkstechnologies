import Link from 'next/link';
import { FiArrowLeft, FiMail, FiCompass } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className="flex min-h-[72vh] items-center bg-cream px-5 pb-24 pt-[150px] md:px-8">
      <div className="mx-auto max-w-[620px] text-center">
        <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-100 bg-gold-50 text-gold-700">
          <FiCompass className="h-6 w-6" />
        </div>
        <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700">
          404 / Route not found
        </p>
        <h1 className="text-4xl font-black tracking-tight text-ink md:text-5xl">
          That link isn&apos;t connected.
        </h1>
        <p className="mx-auto mt-5 max-w-[440px] text-[15px] leading-relaxed text-neutral-600">
          The page may have moved, or the address may be incomplete. Head back to
          the homepage or tell us what you were looking for.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-ink-soft hover:scale-105"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-xs font-bold text-ink transition-all hover:border-gold hover:bg-gold-50"
          >
            <FiMail className="h-3.5 w-3.5 text-gold-700" />
            Contact the team
          </Link>
        </div>
      </div>
    </section>
  );
}
