import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { absoluteUrl } from '@/lib/site';

const routes = [
  '/',
  '/about',
  '/blog',
  '/careers',
  '/case-studies',
  '/contact',
  '/pricing',
  '/privacy',
  '/products',
  '/security',
  '/solutions',
  '/team',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: new Date('2026-11-23'),
      changeFrequency: route === '/' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '/' ? 1 : 0.7,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
