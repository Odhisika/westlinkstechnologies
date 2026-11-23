import type { Metadata } from 'next';
import Contact from '@/components/sections/Contact';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contact - WestLinks',
  description: "Get in touch with the WestLinks team about products, partnerships, or careers.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Let's build something that works."
        subtitle="Tell us what you're building - a real engineer will answer, not a sales script."
      />
      <Contact />
    </>
  );
}
