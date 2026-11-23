import type { Metadata } from 'next';
import {
  RiLock2Fill,
  RiKey2Fill,
  RiFileSearchFill,
  RiGitBranchFill,
  RiServerFill,
  RiEyeFill,
  RiShieldCheckFill,
} from 'react-icons/ri';
import { FiArrowRight } from 'react-icons/fi';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import CTA from '@/components/sections/CTA';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Security & Compliance - WestLinks',
  description:
    'How WestLinks engineers security into every product: encryption, access control, audit trails, and compliance-first architecture for FinTech and enterprise.',
};

const practices = [
  {
    icon: RiLock2Fill,
    title: 'End-to-End Field & Data Encryption',
    body: 'Data is encrypted in transit (TLS 1.3) and at rest (AES-256-GCM). Secrets and signing keys are isolated in hardware security modules (HSMs).',
    badge: 'text-gold-700',
  },
  {
    icon: RiKey2Fill,
    title: 'Schema-Level Zero-Trust RBAC',
    body: 'Role-based access control is designed into database row-level security, not superficial UI wrappers. Least privilege enforced at API gateway.',
    badge: 'text-gold-600',
  },
  {
    icon: RiFileSearchFill,
    title: 'Cryptographic Immutable Audit Trails',
    body: 'For FinTech & exchange platforms, audit trails are written at the schema level - append-only Merkle-linked records of every state transition.',
    badge: 'text-gold-600',
  },
  {
    icon: RiGitBranchFill,
    title: 'Deterministic CI/CD & Traceability',
    body: 'Mandatory peer review, automated static analysis (SAST), and cryptographic artifact signing. Every production release is 100% reproducible.',
    badge: 'text-gold-600',
  },
  {
    icon: RiServerFill,
    title: 'Hermetic Infrastructure as Code',
    body: 'Zero manual console tweaks. All VPCs, firewalls, container policies, and edge rules are defined in declarative, versioned IaC.',
    badge: 'text-gold-600',
  },
  {
    icon: RiEyeFill,
    title: 'Real-Time Observability & Threat Intel',
    body: 'Continuous distributed tracing, anomaly triggers, and automated rate-limiting active from release zero.',
    badge: 'text-gold-600',
  },
];

const roadmap = [
  { area: 'Data Protection', status: 'In place', detail: 'Hardware-backed encryption in transit & at rest across all platforms' },
  { area: 'Access Governance', status: 'In place', detail: 'Row-level security + least-privilege schema boundaries in every build' },
  { area: 'Immutable Audit Trails', status: 'In place', detail: 'Merkle-linked append-only logs for all FinTech workflows' },
  { area: 'Secure SDLC & SAST', status: 'In place', detail: 'Automated vulnerability scanning & mandatory 2-person review' },
  { area: 'SOC 2 Type II Alignment', status: 'In progress', detail: 'Security controls mapped directly to AICPA Trust Services Criteria' },
  { area: 'GDPR / CCPA Cryptographic Consent', status: 'In progress', detail: 'Cryptographic anonymization & automated data erasure tooling' },
];

const statusStyle: Record<string, string> = {
  'In place': 'bg-gold-100 text-gold-800 border-gold-200',
  'In progress': 'bg-gold-100 text-gold-700 border-gold-200',
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="SECURITY & COMPLIANCE"
        title="Security is not a phase. It is the architecture."
        subtitle="For a FinTech and enterprise portfolio, trust is the product. Here is exactly how we engineer and guarantee it."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <RevealOnScroll className="max-w-2xl">
            <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
              Architectural Practices
            </span>
            <h2 className="text-[clamp(30px,3.8vw,44px)] font-black leading-[1.12] tracking-tight text-ink">
              Six security disciplines baked into every release.
            </h2>
          </RevealOnScroll>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practices.map((p) => (
              <RevealOnScroll key={p.title}>
                <div className="group h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-brand-card hover:border-gold/40">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${p.badge}`}
                  >
                    <p.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2.5 text-xl font-bold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-neutral-600">{p.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 border-t border-neutral-200/80">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <RevealOnScroll className="text-center">
            <span className="mb-3.5 inline-block font-mono text-[12px] font-bold uppercase tracking-wider text-gold-700">
              Compliance Transparency
            </span>
            <h2 className="mx-auto max-w-[640px] text-[clamp(28px,3.8vw,42px)] font-black leading-[1.15] tracking-tight text-ink">
              Where we stand - stated plainly.
            </h2>
            <p className="mx-auto mt-3.5 max-w-[540px] text-base text-neutral-600">
              No marketing ambiguities. For each control area, here is our verifiable implementation status for enterprise due-diligence reviews.
            </p>
          </RevealOnScroll>

          <div className="mt-14 flex flex-col gap-4">
            {roadmap.map((r) => (
              <RevealOnScroll key={r.area}>
                <div className="grid grid-cols-1 items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors hover:border-gold/40 md:grid-cols-[auto_1fr_auto] md:gap-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl text-gold-700">
                    <RiShieldCheckFill className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-ink">{r.area}</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">{r.detail}</p>
                  </div>
                  <span
                    className={`justify-self-start font-mono text-[11px] font-bold ${statusStyle[r.status].replace(/bg-[^\s]+|border-[^\s]+/g, '').trim()} md:justify-self-end`}
                  >
                    {r.status}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 border-t border-neutral-200/80">
        <div className="mx-auto max-w-content px-5 md:px-8">
          <RevealOnScroll>
            <div className="rounded-[32px] border border-neutral-200 bg-cream p-10 text-center shadow-sm md:p-14">
              <h2 className="mx-auto max-w-[540px] text-2xl font-black tracking-tight text-ink sm:text-3xl">
                Need our security documentation for vendor procurement?
              </h2>
              <p className="mx-auto mt-3 max-w-[480px] text-sm leading-relaxed text-neutral-600">
                We provide architecture overviews, data-flow diagrams, cryptographic key-management specs, and control summaries under mutual NDA.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-ink-soft hover:scale-105"
              >
                Request Security Package
                <FiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTA />
    </>
  );
}
