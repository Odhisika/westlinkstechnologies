import { techStack } from '@/lib/data';
import { FaAws } from 'react-icons/fa6';
import {
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiPostgresql,
  SiRust,
  SiRedis,
  SiNvidia,
  SiStripe,
  SiFlutter,
} from 'react-icons/si';

const brandPartners = [
  { name: 'Amazon Web Services', icon: FaAws, label: 'AWS Cloud' },
  { name: 'Google Cloud Platform', icon: SiGooglecloud, label: 'Google Cloud' },
  { name: 'NVIDIA Accelerated', icon: SiNvidia, label: 'NVIDIA AI' },
  { name: 'Kubernetes Infrastructure', icon: SiKubernetes, label: 'Kubernetes' },
  { name: 'Rust Core Systems', icon: SiRust, label: 'Rust Engine' },
  { name: 'PostgreSQL Distributed', icon: SiPostgresql, label: 'PostgreSQL' },
  { name: 'Stripe Global Payments', icon: SiStripe, label: 'Stripe Partner' },
  { name: 'Flutter Edge Telemetry', icon: SiFlutter, label: 'Flutter Edge' },
  { name: 'Docker Containers', icon: SiDocker, label: 'Docker' },
  { name: 'Redis In-Memory Tier', icon: SiRedis, label: 'Redis Cache' },
];

export default function TrustedTech() {
  return (
    <div className="overflow-hidden border-y border-neutral-200/80 bg-neutral-50 py-9">
      <div className="mx-auto max-w-content px-4 text-center">
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500">
          POWERING HIGH-AVAILABILITY PRODUCTION SYSTEMS WITH TRUSTED PLATFORMS
        </p>
      </div>

      <div className="mt-6 flex w-max animate-marquee">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex items-center gap-10 pr-10" aria-hidden={rep === 1}>
            {brandPartners.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={`${rep}-${b.name}`}
                  className="flex items-center gap-2.5 rounded-full border border-neutral-200/80 bg-white px-4 py-2 text-neutral-600 shadow-sm transition-all hover:border-neutral-300 hover:text-neutral-950"
                >
                  <Icon className="h-4 w-4 text-neutral-700" />
                  <span className="font-mono text-xs font-bold">{b.label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
