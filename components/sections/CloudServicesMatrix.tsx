'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FiChevronDown,
  FiChevronUp,
  FiArrowRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiServer,
  FiShield,
  FiLayers,
  FiActivity,
  FiCheck,
} from 'react-icons/fi';
import {
  RiExchangeDollarLine,
  RiCloudLine,
  RiTerminalBoxLine,
  RiCpuLine,
  RiGitBranchLine,
} from 'react-icons/ri';
import TopographicBackground from '@/components/ui/TopographicBackground';

interface ServiceItem {
  id: string;
  name: string;
  summary: string;
  category: 'enterprise' | 'custom' | 'isv';
  features: string[];
  specs: string;
  href: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'developer-services',
    name: 'Developer Services & SDKs',
    summary: 'Cloud-native CLI tools, TypeScript/Go SDKs, automated CI/CD runners, and infrastructure-as-code scaffolding.',
    category: 'enterprise',
    features: ['Hermetic build pipelines', 'Automated OpenAPI generation', 'Instant staging sandboxes'],
    specs: 'IaC Terraform / OpenTofu',
    href: '/#capabilities',
  },
  {
    id: 'integration-services',
    name: 'Integration & Event Streaming',
    summary: 'High-throughput Kafka & RabbitMQ event fabrics for reliable zero-loss cross-system event choreography.',
    category: 'enterprise',
    features: ['Sub-millisecond message ingestion', 'Exactly-once delivery semantics', 'Schema registry validation'],
    specs: 'Kafka · gRPC · ZeroMQ',
    href: '/#capabilities',
  },
  {
    id: 'analytics-bi',
    name: 'Analytics & High-Volume BI',
    summary: 'Real-time telemetry aggregation, OLAP ClickHouse pipelines, and real-time operational dashboarding.',
    category: 'custom',
    features: ['Sub-second query response over billions of rows', 'Automated materialized views', 'Custom client dashboards'],
    specs: 'ClickHouse · DuckDB · Grafana',
    href: '/case-studies',
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning Infrastructure',
    summary: 'Deterministic private LLM pipelines, isolated GPU vector indexing, and rigorous schema adherence guardrails.',
    category: 'custom',
    features: ['Private multi-tenant vector store', 'Zero data leakage isolation', 'Deterministic JSON validation'],
    specs: 'vLLM · Qdrant · PyTorch',
    href: '/#product-deck',
  },
  {
    id: 'storage-db',
    name: 'Distributed High-Speed Databases',
    summary: 'PostgreSQL clusters with Raft replication, NVMe-backed caching tiers, and immutable cryptographic ledgers.',
    category: 'enterprise',
    features: ['High-availability automatic failover', 'Continuous point-in-time recovery', 'Transparent field encryption'],
    specs: 'PostgreSQL · Redis · BlockOS',
    href: '/products#blockos',
  },
  {
    id: 'containers-k8s',
    name: 'Containers, Kubernetes & Edge Functions',
    summary: 'Hardened Kubernetes distributions and lightweight edge workers with zero cold-start penalties.',
    category: 'isv',
    features: ['Zero-downtime rolling deploys', 'mTLS service mesh security', 'Multi-cloud workload portability'],
    specs: 'K8s · Docker · Nomad',
    href: '/#capabilities',
  },
  {
    id: 'networking-vpc',
    name: 'Networking, VPC Mesh & Cloud Gateways',
    summary: 'Software-defined overlay networks, global WireGuard meshes, and automated multi-region routing.',
    category: 'isv',
    features: ['Low-latency edge routing', 'DDoS protection & rate limiting', 'Direct BGP peering options'],
    specs: 'WireGuard · Envoy · eBPF',
    href: '/#capabilities',
  },
  {
    id: 'custody-security',
    name: 'Cryptographic Custody & Security',
    summary: 'Hardware-isolated key management, multi-party computation (MPC), and schema-level transaction audit trails.',
    category: 'custom',
    features: ['Hardware Security Module (HSM) support', 'Multi-sig authorization policies', 'SOC2 / ISO 27001 readiness'],
    specs: 'MPC · FIPS 140-2 · PBFT',
    href: '/security',
  },
];

export default function CloudServicesMatrix() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'enterprise' | 'custom' | 'isv'>('all');
  const [expandedId, setExpandedId] = useState<string | null>('developer-services');

  const filteredServices = servicesData.filter(
    (s) => activeCategory === 'all' || s.category === activeCategory
  );

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-t border-neutral-200/80">
      <TopographicBackground variant="light" showMesh={false} />

      <div className="relative z-10 mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <div className="h-1 w-12 bg-gold-400 rounded-full mb-3" />
          <h2 className="text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
            Complete cloud infrastructure and platform services for every workload
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600">
            WestLinks offers a cohesive suite of enterprise-grade infrastructure services. Get all the capabilities you need-from high-throughput order matching and edge sync to deterministic AI-to migrate, modernize, and scale your core business.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-neutral-200/80 pb-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`rounded-lg px-5 py-2.5 text-xs font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            All Workloads (8 Services)
          </button>
          <button
            onClick={() => setActiveCategory('enterprise')}
            className={`rounded-lg px-5 py-2.5 text-xs font-bold transition-all ${
              activeCategory === 'enterprise'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            Core Enterprise Applications
          </button>
          <button
            onClick={() => setActiveCategory('custom')}
            className={`rounded-lg px-5 py-2.5 text-xs font-bold transition-all ${
              activeCategory === 'custom'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            Custom FinTech & AI Platforms
          </button>
          <button
            onClick={() => setActiveCategory('isv')}
            className={`rounded-lg px-5 py-2.5 text-xs font-bold transition-all ${
              activeCategory === 'isv'
                ? 'bg-neutral-900 text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            ISV & Distributed Cloud Systems
          </button>
        </div>

        {/* Interactive services grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isExpanded
                    ? 'border-gold/60 bg-gold-50 shadow-md ring-1 ring-gold-100'
                    : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl">
                      <FiLayers className="h-5 w-5 text-gold-700" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-neutral-900">{service.name}</h3>
                      <span className="font-mono text-[11px] text-neutral-500 font-medium">
                        {service.specs}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline text-xs font-semibold text-neutral-500">
                      {isExpanded ? 'Collapse' : 'Details'}
                    </span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg text-neutral-600">
                      {isExpanded ? (
                        <FiChevronUp className="h-4 w-4" />
                      ) : (
                        <FiChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-neutral-100 bg-white p-5 pt-3 animate-fadeUp">
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {service.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 rounded-lg bg-neutral-50 p-2 text-xs font-medium text-neutral-700"
                        >
                          <FiCheck className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
                      <span className="text-[11px] font-mono text-neutral-500">
                        Production Ready · Tested Under Load
                      </span>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1 text-xs font-bold text-gold-700 hover:text-gold-700"
                      >
                        Explore Capability &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
