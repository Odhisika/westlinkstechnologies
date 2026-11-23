import type { Metadata } from 'next';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Values from '@/components/sections/Values';
import Timeline from '@/components/sections/Timeline';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About - WestLinks',
  description: 'WestLinks is an technologies group building software infrastructure across FinTech, AI, Enterprise, and Agriculture.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT WESTLINKS"
        title="We started as an technologies group. We still think like one."
        subtitle="Software infrastructure across FinTech, AI, Enterprise, and Agriculture - built to a standard that holds up under real load, real regulation, and real constraints."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10 shadow-sm">
              <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-wider text-gold-700">
                Origin
              </span>
              <h2 className="mb-4 text-2xl font-black tracking-tight text-ink">Our Story</h2>
              <p className="mb-4 text-[15px] leading-relaxed text-neutral-600">
                WestLinks was founded in 2026 on a simple premise: most companies buy software
                infrastructure they don&apos;t fully understand, from vendors who don&apos;t fully
                understand their business. We build it ourselves instead - for our own products
                first, and for the industries we serve.
              </p>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                That started with two shipped products - LivestockOS and Price Monitor - and has
                grown into a broader portfolio spanning FinTech, blockchain infrastructure, and
                applied AI. The thread connecting all of it is the same: institutional technologies
                discipline applied consistently, whatever the industry.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10 shadow-sm">
              <span className="mb-3 inline-block font-mono text-xs font-bold uppercase tracking-wider text-gold-700">
                Standard
              </span>
              <h2 className="mb-4 text-2xl font-black tracking-tight text-ink">Our Mission</h2>
              <p className="mb-4 text-[15px] leading-relaxed text-neutral-600">
                To be the technologies team behind the software that high-consequence industries depend on -
                built to a standard that holds up under real load, strict regulation, and real
                constraints, not just a pitch demo.
              </p>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                We measure that by whether our own products keep working quietly, day after day -
                not by how impressive they look in a slide deck.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Values />
      <Timeline />
      <CTA />
    </>
  );
}
