import type { Metadata } from 'next';
import Link from 'next/link';
import { Circle, Square, Plus, Layers, ShieldCheck, Server, ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';
import Newsletter from '@/components/sections/Newsletter';
import { posts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog - WestLinks',
  description: 'Notes from the WestLinks technologies team on infrastructure, product, and company.',
};

const icons: Record<string, typeof Circle> = {
  Circle,
  Square,
  Plus,
  Layers,
  ShieldCheck,
  Server,
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="BLOG"
        title="Notes from the technologies team."
        subtitle="Infrastructure, product, and company - written by the people who build it."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-5 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
          {posts.map((post) => {
            const Icon = icons[post.icon] ?? Circle;
            return (
              <RevealOnScroll key={post.slug}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group block h-full overflow-hidden rounded-2xl border border-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_16px_32px_-18px_rgba(10,13,16,0.25)]"
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
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[13px] text-neutral-400">{post.readTime}</span>
                      <ArrowRight className="h-4 w-4 flex-shrink-0 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-gold-700" />
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>
      </section>

      <Newsletter />
      <CTA />
    </>
  );
}
