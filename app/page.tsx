import Hero from '@/components/sections/Hero';
import TrustedTech from '@/components/sections/TrustedTech';
import ImpactBanner from '@/components/sections/ImpactBanner';
import CardStackDeck from '@/components/sections/CardStackDeck';
import CloudServicesMatrix from '@/components/sections/CloudServicesMatrix';
import Capabilities from '@/components/sections/Capabilities';
import BentoShowcase from '@/components/sections/BentoShowcase';
import Challenges from '@/components/sections/Challenges';
import Stats from '@/components/sections/Stats';
import CaseStudies from '@/components/sections/CaseStudies';
import Ecosystem from '@/components/sections/Ecosystem';
import Testimonials from '@/components/sections/Testimonials';
import Awards from '@/components/sections/Awards';
import Timeline from '@/components/sections/Timeline';
import Faq from '@/components/sections/Faq';
import Newsletter from '@/components/sections/Newsletter';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedTech />
      <ImpactBanner />
      <CardStackDeck />
      <CloudServicesMatrix />
      <Capabilities />
      <BentoShowcase />
      <Challenges />
      <Stats />
      <CaseStudies />
      <Ecosystem />
      <Testimonials />
      <Awards />
      <Timeline />
      <Faq />
      <Newsletter />
      <CTA />
    </>
  );
}
