import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight, FiBell, FiCheckCircle } from 'react-icons/fi';
import {
  RiExchangeDollarFill,
  RiShieldFlashFill,
  RiSeedlingFill,
  RiLineChartFill,
} from 'react-icons/ri';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';
import { products } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Products - WestLinks',
  description:
    'The WestLinks product family: Exchange, BlockOS, LivestockOS, and Crypto Intelligence embedded inside WestLinks Exchange.',
};

interface ProductMetaStyle {
  icon: React.ElementType;
  badgeText: string;
  cardBorder: string;
}

const productMeta: Record<string, ProductMetaStyle> = {
  'westlinks-exchange': {
    icon: RiExchangeDollarFill,
    badgeText: 'text-gold-700',
    cardBorder: 'hover:border-gold-300',
  },
  blockos: {
    icon: RiShieldFlashFill,
    badgeText: 'text-gold-600',
    cardBorder: 'hover:border-gold-300',
  },
  livestockos: {
    icon: RiSeedlingFill,
    badgeText: 'text-gold-600',
    cardBorder: 'hover:border-gold-300',
  },
  'price-monitor': {
    icon: RiLineChartFill,
    badgeText: 'text-gold-600',
    cardBorder: 'hover:border-gold-300',
  },
};

const statusStyles: Record<string, string> = {
  live: 'bg-gold-100 text-gold-800 border-gold-200',
  dev: 'bg-gold-100 text-gold-700 border-gold-200',
  soon: 'bg-neutral-100 text-neutral-700 border-neutral-200',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCT ECOSYSTEM"
        title="Four products. One technologies discipline."
        subtitle="Each WestLinks product is built independently, but shares the same infrastructure, security standards, and design language."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto flex max-w-content flex-col gap-8 px-5 md:px-8">
          {products.map((p) => {
            const meta = productMeta[p.slug] || productMeta['westlinks-exchange'];
            const Icon = meta.icon;

            return (
              <RevealOnScroll key={p.slug}>
                <div
                  id={p.slug}
                  className={`group grid scroll-mt-32 grid-cols-1 gap-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-brand-card md:grid-cols-[auto_1fr_auto] md:items-center md:p-10 ${meta.cardBorder}`}
                >
                  <div
                    className={`flex h-16 w-16 flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${meta.badgeText}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h2 className="text-2xl font-black tracking-tight text-ink">{p.name}</h2>
                      <span
                        className={`rounded-full border px-3 py-0.5 font-mono text-[11px] font-bold ${statusStyles[p.status]}`}
                      >
                        {p.statusLabel}
                      </span>
                    </div>
                    <p className="mb-4 max-w-[620px] text-[15px] leading-relaxed text-neutral-600">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] font-semibold text-neutral-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="group/btn inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-ink-soft hover:scale-105 md:justify-self-end"
                  >
                    {p.status === 'soon' ? (
                      <>
                        Get Early Access <FiBell className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Talk to Engineers <FiArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </>
                    )}
                  </Link>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
