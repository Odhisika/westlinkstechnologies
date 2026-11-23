'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiMail,
  FiPhone,
  FiArrowRight,
  FiGlobe,
  FiShield,
  FiCpu,
  FiZap,
} from 'react-icons/fi';
import {
  RiExchangeDollarFill,
  RiShieldFlashFill,
  RiSeedlingFill,
  RiLineChartFill,
} from 'react-icons/ri';
import { products } from '@/lib/data';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from '@/lib/site';

interface ProductNavInfo {
  icon: React.ElementType;
  iconColor: string;
  statusBadge: string;
}

const productNavMeta: Record<string, ProductNavInfo> = {
  'westlinks-exchange': {
    icon: RiExchangeDollarFill,
    iconColor: 'text-gold-400',
    statusBadge: 'bg-gold-100 text-gold-800',
  },
  blockos: {
    icon: RiShieldFlashFill,
    iconColor: 'text-ink',
    statusBadge: 'bg-gold-100 text-gold-700',
  },
  livestockos: {
    icon: RiSeedlingFill,
    iconColor: 'text-gold-600',
    statusBadge: 'bg-gold-100 text-gold-700',
  },
  'price-monitor': {
    icon: RiLineChartFill,
    iconColor: 'text-gold-700',
    statusBadge: 'bg-gold-100 text-gold-800',
  },
};

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/#capabilities', label: 'Capabilities' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[200] transition-all duration-200 ${scrolled
            ? 'border-b border-neutral-200/80 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
            : 'border-b border-neutral-200/60 bg-white'
          }`}
      >
        <div className="mx-auto flex h-[72px] max-w-content items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Brand */}
          <div className="flex items-center gap-6">
            <Link href="/" className="group flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.jpg"
                alt="WestLinks Logo"
                className="h-9 w-auto rounded-lg shadow-sm ring-1 ring-neutral-900/10 transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-mono text-[17px] font-black tracking-tight text-neutral-900">
                  WESTLINKS
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                  Technologies
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen((v) => !v)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] font-semibold transition-colors ${dropdownOpen
                    ? 'bg-gold-50 text-gold-700'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Products
                <FiChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-gold-700' : 'text-neutral-400'
                    }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-[calc(100%+8px)] w-[420px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-brand-elevated animate-fadeUp">
                  <div className="mb-2 px-3 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      Engineered Platforms
                    </span>
                  </div>
                  <div className="space-y-1">
                    {products.map((p) => {
                      const meta = productNavMeta[p.slug];
                      const Icon = meta?.icon || RiExchangeDollarFill;
                      return (
                        <Link
                          key={p.slug}
                          href={`/products#${p.slug}`}
                          onClick={() => setDropdownOpen(false)}
                          className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-neutral-50"
                        >
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg`}
                          >
                            <Icon
                              className={`h-5 w-5 ${meta?.iconColor ?? 'text-gold-700'}`}
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-neutral-900 group-hover:text-gold-700 transition-colors">
                                {p.name}
                              </span>
                              <span className="text-[10px] font-bold uppercase text-gold-700">
                                {p.statusLabel}
                              </span>
                            </div>
                            <p className="mt-0.5 line-clamp-1 text-[12px] text-neutral-500">
                              {p.tagline}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-2 border-t border-neutral-100 px-3 pt-2.5">
                    <Link
                      href="/products"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-between text-xs font-semibold text-gold-700 hover:text-gold-700"
                    >
                      <span>View All Architecture & Products</span>
                      <FiArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-colors px-2 py-1.5"
            >
              <FiGlobe className="h-4 w-4 text-neutral-400" />
              <span>Global</span>
            </Link>

            {/* Vibrant Pill CTA Button */}
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_16px_rgba(241,182,11,0.35)] transition-all hover:bg-ink-soft hover:shadow-brand-glow hover:scale-[1.02]"
            >
              <span>Contact Sales</span>
              <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setDrawerOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 text-neutral-700 lg:hidden hover:bg-neutral-50"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          >
            {drawerOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[190] bg-neutral-900/40 lg:hidden animate-fadeUp">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <span className="font-mono font-bold text-neutral-900">WESTLINKS MENU</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile Product Links */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Products
                </span>
                <div className="mt-2 space-y-2">
                  {products.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products#${p.slug}`}
                      onClick={() => setDrawerOpen(false)}
                      className="flex items-center justify-between rounded-xl bg-neutral-50 p-2.5 text-xs font-semibold text-neutral-800 hover:bg-gold-50"
                    >
                      <span>{p.name}</span>
                      <span className="text-[10px] text-neutral-500">{p.statusLabel}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Nav Links */}
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-neutral-100">
              <Link
                href="/contact"
                onClick={() => setDrawerOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-bold text-white shadow-md hover:bg-ink-soft"
              >
                Book a Consultation
              </Link>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 py-3 text-xs font-semibold text-neutral-700"
              >
                <FiPhone className="h-4 w-4 text-neutral-500" />
                Call {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-neutral-200 py-3 text-xs font-semibold text-neutral-700"
              >
                <FiMail className="h-4 w-4 text-neutral-500" />
                Email us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
