/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // Keep dev and production build caches separate so running `next build`
  // can never clobber the chunks served by a running `next dev`.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
};

module.exports = nextConfig;
