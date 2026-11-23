import NetworkCanvas from '@/components/NetworkCanvas';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-ink px-5 pb-20 pt-[160px] text-white md:px-8 border-b border-neutral-800">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-gold/20 blur-[150px]" />
        <div className="absolute bottom-[-160px] right-[-100px] h-[380px] w-[480px] rounded-full bg-gold/15 blur-[130px]" />
      </div>
      <NetworkCanvas variant="dark" />
      <div className="relative z-[1] mx-auto max-w-content text-center">
        <span className="mb-4 inline-block animate-fadeUp font-mono text-[12px] font-bold uppercase tracking-wider text-gold-200 opacity-0 [animation-delay:.1s]">
          {eyebrow}
        </span>
        <h1 className="mx-auto max-w-[840px] animate-fadeUp text-[clamp(34px,5vw,60px)] font-black leading-[1.08] tracking-[-0.03em] opacity-0 [animation-delay:.2s]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-4 max-w-[600px] animate-fadeUp text-[clamp(15px,1.7vw,17.5px)] leading-relaxed text-neutral-300 opacity-0 [animation-delay:.35s]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
