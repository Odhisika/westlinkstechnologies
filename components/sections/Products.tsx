import Link from 'next/link';
import { Coins, Boxes, Beef, LineChart, ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { products } from '@/lib/data';

const productIcons: Record<string, typeof Coins> = {
  'westlinks-exchange': Coins,
  blockos: Boxes,
  livestockos: Beef,
  'price-monitor': LineChart,
};

const statusStyles: Record<string, string> = {
  live: 'bg-gold-100 text-gold-800',
  dev: 'bg-gold-50 text-gold-700',
  soon: 'bg-neutral-100 text-neutral-500',
};

export default function Products() {
  return (
    <section id="products" className="bg-cream py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <RevealOnScroll>
          <span className="mb-3.5 block font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-gold-700">
            Product Ecosystem
          </span>
          <h2 className="max-w-[640px] text-[clamp(28px,3.6vw,40px)] font-extrabold leading-[1.15] tracking-tight">
            One technologies team. A growing family of products.
          </h2>
          <p className="mt-3.5 max-w-[640px] text-[16.5px] leading-relaxed text-neutral-500">
            Each WestLinks product is built independently, but shares the same infrastructure,
            security standards, and design language.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => {
            const Icon = productIcons[p.slug];
            return (
              <RevealOnScroll key={p.slug} className={i === 0 ? 'lg:col-span-2' : ''}>
                <div
                  id={p.slug}
                  className="relative h-full scroll-mt-28 rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_20px_40px_-20px_rgba(10,13,16,0.18)]"
                >
                  <span
                    className={`absolute right-6 top-7 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold ${statusStyles[p.status]}`}
                  >
                    {p.statusLabel}
                  </span>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center text-gold-600">
                    <Icon className="h-[22px] w-[22px]" />
                  </div>
                  <div className="mb-2 text-[19px] font-bold tracking-tight">{p.name}</div>
                  <p className="mb-5 text-[14.5px] leading-relaxed text-neutral-500">{p.description}</p>
                  <Link
                    href={`/products#${p.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold"
                  >
                    Learn more
                    <ArrowRight className="h-[14px] w-[14px] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
