import { Circle, Square, Plus } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { insights } from '@/lib/data';

const thumbIcons = [Circle, Square, Plus];

export default function Insights() {
  return (
    <section id="insights" className="py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll>
          <span className="mb-3.5 block font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-gold-700">
            Latest Insights
          </span>
          <h2 className="max-w-[640px] text-[clamp(28px,3.6vw,40px)] font-extrabold leading-[1.15] tracking-tight">
            From the technologies team.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {insights.map((post, i) => {
            const Icon = thumbIcons[i];
            return (
              <RevealOnScroll key={post.title}>
                <a
                  href="/blog"
                  className="block overflow-hidden rounded-2xl border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_-18px_rgba(10,13,16,0.2)]"
                >
                  <div className="relative h-[150px] overflow-hidden bg-gradient-to-br from-ink to-ink-muted">
                    <Icon className="absolute -bottom-5 -right-5 h-36 w-36 text-white/50" strokeWidth={1} />
                  </div>
                  <div className="p-5">
                    <span className="font-mono text-[11.5px] font-semibold uppercase tracking-wide text-gold-700">
                      {post.tag}
                    </span>
                    <div className="mb-1.5 mt-2.5 text-base font-bold leading-snug tracking-tight">
                      {post.title}
                    </div>
                    <div className="text-[13px] text-neutral-400">{post.meta}</div>
                  </div>
                </a>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
