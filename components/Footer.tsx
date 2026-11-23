'use client';

import Link from 'next/link';
import { FiMail, FiPhone } from 'react-icons/fi';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 pb-16 pt-20 text-neutral-600">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        {/* Clean multi-column grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 pb-16 border-b border-neutral-200">
          {/* Col 1: Products & Pricing */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Products & Pricing
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/products#westlinks-exchange" className="hover:text-neutral-950 transition-colors">
                  WestLinks Exchange
                </Link>
              </li>
              <li>
                <Link href="/products#blockos" className="hover:text-neutral-950 transition-colors">
                  BlockOS
                </Link>
              </li>
              <li>
                <Link href="/products#livestockos" className="hover:text-neutral-950 transition-colors">
                  LivestockOS
                </Link>
              </li>
              <li>
                <Link href="/products#price-monitor" className="hover:text-neutral-950 transition-colors">
                  Crypto Intelligence
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-neutral-950 transition-colors">
                  Pricing & Rate Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/solutions#enterprises" className="hover:text-neutral-950 transition-colors">
                  Enterprises & Banks
                </Link>
              </li>
              <li>
                <Link href="/solutions#fintech" className="hover:text-neutral-950 transition-colors">
                  FinTech & Custody
                </Link>
              </li>
              <li>
                <Link href="/solutions#agtech" className="hover:text-neutral-950 transition-colors">
                  AgTech & Edge Telemetry
                </Link>
              </li>
              <li>
                <Link href="/solutions#retail" className="hover:text-neutral-950 transition-colors">
                  Retail Intelligence
                </Link>
              </li>
              <li>
                <Link href="/solutions#sovereign" className="hover:text-neutral-950 transition-colors">
                  Sovereign Ledgers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Integrations & Cloud */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Cloud & Platform
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/#capabilities" className="hover:text-neutral-950 transition-colors">
                  IaC & Cloud DevOps
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="hover:text-neutral-950 transition-colors">
                  Distributed Ledgers
                </Link>
              </li>
              <li>
                <Link href="/#capabilities" className="hover:text-neutral-950 transition-colors">
                  Event Streaming Mesh
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-neutral-950 transition-colors">
                  Multi-Sig Security
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neutral-950 transition-colors">
                  Professional Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/case-studies" className="hover:text-neutral-950 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-neutral-950 transition-colors">
                  Technologies Blog
                </Link>
              </li>
              <li>
                <Link href="/case-studies#livestockos" className="hover:text-neutral-950 transition-colors">
                  Offline-First Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-neutral-950 transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neutral-950 transition-colors">
                  System Benchmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/about" className="hover:text-neutral-950 transition-colors">
                  About WestLinks
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-neutral-950 transition-colors">
                  Technologies Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-neutral-950 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-neutral-950 transition-colors">
                  Contact Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Support & Direct Contacts */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Support & Sales
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/contact" className="hover:text-neutral-950 transition-colors">
                  Technical Architecture Call
                </Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-1 font-mono text-xs font-semibold text-neutral-900 hover:text-gold-700">
                  <FiMail className="h-3.5 w-3.5 text-neutral-400" />
                  {CONTACT_EMAIL}
                </a>
                <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-1 font-mono text-xs font-semibold text-neutral-900 hover:text-gold-700">
                  <FiPhone className="h-3.5 w-3.5 text-neutral-400" />
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <Link href="/security" className="hover:text-neutral-950 transition-colors">
                  Security Disclosures
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 font-bold text-gold-700 hover:underline"
                >
                  <span>Sign in / Portal</span>
                  <span>&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Brand, Status, and Legal */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.jpg"
                alt="WestLinks Logo"
                className="h-7 w-auto rounded shadow-sm ring-1 ring-neutral-200"
              />
              <span className="font-mono text-sm font-black text-neutral-900">WESTLINKS</span>
            </Link>
            <span className="text-neutral-300">|</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <Link href="/privacy" className="hover:text-neutral-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900 transition-colors">
              Terms of Service
            </Link>
            <span>&copy; {new Date().getFullYear()} WestLinks</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
