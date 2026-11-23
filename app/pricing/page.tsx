import type { Metadata } from 'next';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';
import PricingContent from '@/components/sections/PricingContent';

export const metadata: Metadata = {
  title: 'Pricing - Business Software & Digital Solutions | WestLinks',
  description:
    'Straightforward pricing for Ghanaian and international clients: discovery, website and software development, dedicated developers, maintenance and integrations.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="PRICING & ENGAGEMENTS"
        title="Straightforward pricing. Serious engineering."
        subtitle="Technology solutions designed around your business."
      />

      <PricingContent />

      <CTA />
    </>
  );
}
