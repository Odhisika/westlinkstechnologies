import type { Metadata } from 'next';
import { FiGithub, FiLinkedin, FiCamera, FiCheckCircle } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Values from '@/components/sections/Values';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';
import { team } from '@/lib/data';
import { SOCIALS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Team - WestLinks',
  description:
    'The engineers behind WestLinks - a small, senior team building software infrastructure across FinTech, AI, Enterprise, and Agriculture.',
};

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR TALENT"
        title="The engineers powering your infrastructure."
        subtitle="A deliberate team of principal engineers. You work directly with the specialists who architect and implement your codebase."
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <RevealOnScroll key={m.name}>
                <div className="group h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-card hover:border-gold/40">
                  <div className="relative flex aspect-[4/3.4] items-center justify-center overflow-hidden bg-gradient-to-br from-ink to-neutral-900 text-white">
                    {m.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`/team/${m.photo}`}
                        alt={m.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <span className="font-mono text-[42px] font-black text-gold-200">
                          {initials(m.name)}
                        </span>
                        <span className="absolute bottom-3 right-3 flex items-center gap-1 text-white">
                          <FiCamera className="h-3 w-3" />
                        </span>
                      </>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold tracking-tight text-ink">{m.name}</h3>
                    <p className="mt-0.5 font-mono text-[11px] font-bold uppercase tracking-wider text-gold-700">
                      {m.role}
                    </p>
                    <p className="mt-3 text-[13.5px] leading-relaxed text-neutral-600">{m.bio}</p>
                    {SOCIALS.github || SOCIALS.linkedin ? (
                      <div className="mt-5 flex gap-2.5 border-t border-neutral-100 pt-4">
                        {SOCIALS.github ? (
                          <a
                            href={SOCIALS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${m.name} on GitHub`}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:border-gold hover:bg-gold-50 hover:text-gold-700"
                          >
                            <FiGithub className="h-3.5 w-3.5" />
                          </a>
                        ) : null}
                        {SOCIALS.linkedin ? (
                          <a
                            href={SOCIALS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${m.name} on LinkedIn`}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:border-gold hover:bg-gold-50 hover:text-gold-700"
                          >
                            <FiLinkedin className="h-3.5 w-3.5" />
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <p className="mx-auto mt-12 max-w-[520px] text-center text-xs leading-relaxed text-neutral-500">
              Want to build systems that scale?{' '}
              <a href="/careers" className="font-bold text-gold-700 hover:underline">
                We&apos;re hiring principal engineers →
              </a>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <Values />
      <CTA />
    </>
  );
}
