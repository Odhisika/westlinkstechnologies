import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { industries } from '@/lib/data';

export default function Industries() {
  return (
    <section id="industries" className="bg-cream py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll>
          <div className="grid grid-cols-1 overflow-hidden rounded-[20px] lg:grid-cols-2">
            <div className="flex min-h-[340px] flex-col justify-center bg-ink p-10 text-white md:p-14">
              <span className="mb-3.5 block font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-gold-300">
                Experience
              </span>
              <h3 className="mb-4 text-[28px] font-extrabold tracking-tight">
                Advanced technology, applied practically
              </h3>
              <p className="max-w-[420px] text-[15px] leading-relaxed text-neutral-300">
                We&apos;re well versed in the technology that gets name-dropped everywhere - AI,
                machine learning, blockchain - but we only reach for it when it actually solves the
                problem in front of us.
              </p>
            </div>
            <div className="flex min-h-[340px] flex-col justify-center bg-white p-10 md:p-14">
              <span className="mb-3.5 block font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-gold-700">
                Industries Served
              </span>
              <h3 className="mb-4 text-[28px] font-extrabold tracking-tight">
                Built for sectors that can&apos;t afford to get it wrong
              </h3>
              <p className="max-w-[420px] text-[15px] leading-relaxed text-neutral-500">
                From regulated finance to low-connectivity agriculture, we design for the
                constraints of the industry first.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {industries.map((ind, i) => (
                  <div
                    key={ind}
                    className="flex items-center gap-2 rounded-full border border-neutral-200 py-2 pl-3 pr-4 text-[13.5px] font-semibold transition-colors hover:border-gold hover:bg-gold/[0.04]"
                  >
                    <span className="font-mono text-[10.5px] font-medium text-neutral-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {ind}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
