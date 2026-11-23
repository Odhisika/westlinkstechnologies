import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CrispChat from '@/components/CrispChat';
import FloatingConcierge from '@/components/ui/FloatingConcierge';
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_URL, absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'WestLinks - Technologies Building the Infrastructure of Tomorrow',
  description:
    'WestLinks builds software infrastructure across FinTech, AI, Enterprise, and Agriculture - engineered to a global standard.',
  metadataBase: new URL(SITE_URL),
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'WestLinks - Technologies Building the Infrastructure of Tomorrow',
    description:
      'WestLinks builds software infrastructure across FinTech, AI, Enterprise, and Agriculture.',
    url: absoluteUrl('/'),
    siteName: 'WestLinks',
    type: 'website',
    images: [{ url: absoluteUrl('/logo.jpg'), width: 1536, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WestLinks',
    description: 'Technologies building the infrastructure of tomorrow.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0A0D10" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'WestLinks',
              url: absoluteUrl('/'),
              logo: absoluteUrl('/logo.jpg'),
              description:
                'WestLinks builds software infrastructure across FinTech, AI, Enterprise, and Agriculture - engineered to a global standard.',
              email: CONTACT_EMAIL,
              telephone: CONTACT_PHONE,
              foundingDate: '2026',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <CrispChat />
        <FloatingConcierge />
      </body>
    </html>
  );
}
