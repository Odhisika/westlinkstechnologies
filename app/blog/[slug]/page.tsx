import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import CTA from '@/components/sections/CTA';
import { getPost, posts } from '@/lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return { title: 'Not found - WestLinks' };
  return {
    title: `${post.title} - WestLinks Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  };
}

function renderContent(content: string) {
  return content.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="mb-4 mt-12 text-[22px] font-extrabold tracking-tight">
          {block.slice(3)}
        </h2>
      );
    }
    return (
      <p key={i} className="mb-5 text-[16px] leading-[1.75] text-neutral-500">
        {block}
      </p>
    );
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 pt-[150px]">
        <h1 className="text-2xl font-extrabold">Article not found.</h1>
        <Link href="/blog/" className="mt-4 font-semibold text-gold-700">
          ← Back to the blog
        </Link>
      </div>
    );
  }

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <header className="relative overflow-hidden bg-ink px-5 pb-[64px] pt-[168px] text-white md:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-280px] h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-gold/20 blur-[140px]" />
        </div>
        <div className="relative z-[1] mx-auto max-w-[780px]">
          <Link
            href="/blog/"
            className="group mb-7 inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All articles
          </Link>
          <span className="mb-4 block font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] text-gold-300">
            {post.tag}
          </span>
          <h1 className="text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.15] tracking-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-[13.5px] text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-[720px] px-5 md:px-8">{renderContent(post.content)}</div>
      </article>

      <section className="border-t border-neutral-200 bg-cream py-16">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <h2 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-neutral-400">
            Keep reading
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/blog/${o.slug}/`}
                className="group rounded-[18px] border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_20px_44px_-22px_rgba(241,182,11,0.35)]"
              >
                <span className="font-mono text-[11.5px] font-semibold uppercase tracking-wide text-gold-700">
                  {o.tag}
                </span>
                <h3 className="mt-2.5 text-[17px] font-bold leading-snug tracking-tight">
                  {o.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
