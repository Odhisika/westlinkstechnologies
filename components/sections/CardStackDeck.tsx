'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FiArrowRight,
  FiShield,
  FiActivity,
  FiCpu,
  FiCheckCircle,
  FiLock,
  FiTrendingUp,
  FiDatabase,
  FiSmartphone,
  FiGlobe,
  FiZap,
} from 'react-icons/fi';
import {
  RiExchangeDollarLine,
  RiShieldFlashLine,
  RiSeedlingLine,
  RiLineChartLine,
} from 'react-icons/ri';

interface CardData {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  theme: {
    bg: string;
    text: string;
    subText: string;
    badgeBg: string;
    badgeText: string;
    buttonBg: string;
    buttonText: string;
    border: string;
    shadow: string;
    dotColor: string;
  };
  type: 'exchange' | 'blockos' | 'livestock' | 'cryptointel';
}

const cards: CardData[] = [
  {
    id: 'westlinks-exchange',
    tabLabel: 'WestLinks Exchange',
    badge: 'FinTech · P2P Exchange',
    title: 'Ghana-First P2P Digital Currency Exchange',
    subtitle: 'Live P2P rates, mobile-money on-ramps, and on-chain settlement.',
    description:
      'Buy and sell crypto with GHS through MTN MoMo, Telecel and bank transfer. P2P rates are aggregated from the Bybit and OKX ad books every ten seconds, filtered by trader execution quality, and priced with a real admin margin - and withdrawals are verified on-chain before they settle.',
    features: [
      'P2P rates from Bybit & OKX ad books, refreshed every 10 seconds',
      'Mobile-money on-ramps: MTN MoMo, Telecel and bank transfers',
      'On-chain withdrawal verification across TRC20, ERC20, BEP20 & BTC',
    ],
    ctaText: 'Explore Exchange Architecture',
    ctaHref: '/products#westlinks-exchange',
    theme: {
      bg: 'bg-gold',
      text: 'text-ink',
      subText: 'text-gold-800',
      badgeBg: 'bg-white text-gold-700 border border-white',
      badgeText: 'text-gold-700',
      buttonBg: 'bg-white hover:bg-gold-50',
      buttonText: 'text-gold-700',
      border: 'border-gold-400/40',
      shadow: 'shadow-[0_24px_60px_-12px_rgba(241,182,11,0.4)]',
      dotColor: '#F1B60B',
    },
    type: 'exchange',
  },
  {
    id: 'blockos',
    tabLabel: 'BlockOS',
    badge: 'Official Site · Factory Operations',
    title: 'BlockOS - The Operating System for Block Manufacturing',
    subtitle: 'Live at blockos.westlinkstechnologies.com',
    description:
      'A factory operations platform for block manufacturers - track batches through moulded, curing and ready stages with per-batch costing, run sales through a point-of-sale with a credit book and receivables aging, and control inventory of products and raw materials, labour, vehicles and expenses, all tied into profit & loss analytics.',
    features: [
      'Production pipeline: moulded → curing → ready, with batch costing',
      'Point-of-sale, credit book & receivables aging',
      'Inventory, raw materials, labour, fleet & P&L analytics',
    ],
    ctaText: 'Visit BlockOS →',
    ctaHref: 'https://blockos.westlinkstechnologies.com',
    theme: {
      bg: 'bg-paper',
      text: 'text-neutral-900',
      subText: 'text-neutral-600',
      badgeBg: 'bg-neutral-200 text-neutral-800 border border-neutral-300',
      badgeText: 'text-neutral-800',
      buttonBg: 'bg-ink hover:bg-neutral-900',
      buttonText: 'text-white',
      border: 'border-neutral-300/80',
      shadow: 'shadow-[0_24px_60px_-12px_rgba(10,13,16,0.12)]',
      dotColor: '#0A0D10',
    },
    type: 'blockos',
  },
  {
    id: 'livestockos',
    tabLabel: 'LivestockOS',
    badge: 'Live Product · AgTech',
    title: 'The Operating System for African Livestock Farms',
    subtitle: 'Offline-first herd and farm management, live in production.',
    description:
      'Live for African livestock farms. A Django, React and Flutter platform that tracks herds, breeds, health, feeding and farm accounts - and keeps working with zero signal in the field, recording locally and syncing conflict-free once a connection returns.',
    features: [
      'QR animal passports, pedigree & growth tracking',
      'Offline-first sync - records locally, syncs when signal returns',
      'Deterministic Farm Health Score & production reports',
    ],
    ctaText: 'Visit LivestockOS →',
    ctaHref: 'https://livestocks.westlinkstechnologies.com',
    theme: {
      bg: 'bg-ink',
      text: 'text-white',
      subText: 'text-gold-100',
      badgeBg: 'bg-gold-900 text-gold-100 border border-gold-700',
      badgeText: 'text-gold-100',
      buttonBg: 'bg-white hover:bg-gold-50',
      buttonText: 'text-ink',
      border: 'border-gold-600/40',
      shadow: 'shadow-[0_24px_60px_-12px_rgba(10,13,16,0.4)]',
      dotColor: '#F1B60B',
    },
    type: 'livestock',
  },
  {
    id: 'price-monitor',
    tabLabel: 'Crypto Intelligence',
    badge: 'Market Intelligence · Embedded in WestLinks',
    title: 'Explainable Crypto Market Intelligence',
    subtitle: 'Multi-source scoring, low-cap gems, and real-time alerting.',
    description:
      'Built into the WestLinks Exchange stack: scheduled ingestion from CoinGecko, CoinPaprika, DefiLlama, DexScreener, GitHub and Binance market feeds drives four explainable score models - 10X potential, undervaluation, momentum and risk - feeding a low-cap gem discovery pipeline, real-time price and score alerts, and backtested 30/60/90-day track records.',
    features: [
      'Four explainable models: 10X, undervaluation, momentum & risk',
      'Low-cap gem discovery across the $5M–$50M market cap band',
      'Real-time Telegram alerts, webhooks & 30/60/90-day backtests',
    ],
    ctaText: 'See Crypto Intelligence in Action',
    ctaHref: '/case-studies#price-monitor',
    theme: {
      bg: 'bg-gold-700',
      text: 'text-white',
      subText: 'text-gold-100',
      badgeBg: 'bg-white text-gold-700 border border-white',
      badgeText: 'text-gold-700',
      buttonBg: 'bg-white hover:bg-gold-50',
      buttonText: 'text-gold-700',
      border: 'border-gold-400/40',
      shadow: 'shadow-[0_24px_60px_-12px_rgba(138,97,0,0.4)]',
      dotColor: '#F1B60B',
    },
    type: 'cryptointel',
  },
];

export default function CardStackDeck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setSelectedCardIndex] = useState(0);

  // Hook scroll progress across the whole deck section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      id="product-deck"
      className="relative bg-neutral-50 py-12"
      style={{ height: `${cards.length * 100}vh` }}
    >
      {/* Sticky Deck Viewport */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Heading with Clean Aesthetics */}
          <div className="mb-20 text-center">
            <h2 className="mt-2 text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl lg:text-4xl">
              One technologies discipline. Built for real scale.
            </h2>
          </div>

          {/* 3D Flipping Card Stack Area */}
          <div className="perspective-1500 relative mx-auto h-[490px] w-full max-w-5xl sm:h-[510px]">
            {cards.map((card, index) => (
              <FlippingCardItem
                key={card.id}
                card={card}
                index={index}
                totalCards={cards.length}
                scrollYProgress={scrollYProgress}
                onInView={() => setSelectedCardIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlippingCardItem({
  card,
  index,
  totalCards,
  scrollYProgress,
  onInView,
}: {
  card: CardData;
  index: number;
  totalCards: number;
  scrollYProgress: import('framer-motion').MotionValue<number>;
  onInView: () => void;
}) {
  // Define progressive scroll windows for each card
  const step = 1 / totalCards;
  const start = index * step;
  const peak = start + step * 0.4;
  const end = (index + 1) * step;
  const pre = Math.max(0, start - step * 0.5);

  // 3D flip & tilt transformations:
  // As this card approaches its window, it rotates from negative tilt to flat (0deg),
  // and when the next card scrolls in, it slightly tilts back (+6deg) and scales down to 0.94 to stack!
  const rotateX = useTransform(
    scrollYProgress,
    [pre, start, peak, end],
    [index === 0 ? 0 : -10, 0, 0, 8]
  );

  const scale = useTransform(
    scrollYProgress,
    [pre, start, peak, end],
    [index === 0 ? 1 : 0.92, 1, 1, 0.94 - index * 0.015]
  );

  const y = useTransform(
    scrollYProgress,
    [pre, start, peak, end],
    [index === 0 ? 0 : 70, 0, 0, -18 * (totalCards - index)]
  );

  // Cards stay fully opaque - the flip must never reveal what is behind them.
  const opacity = useTransform(scrollYProgress, [pre, start, peak, end], [1, 1, 1, 1]);

  // Lift the active/incoming card above the rest of the stack so its copy is
  // never obscured (or see-through) while it flips.
  const zIndex = useTransform(scrollYProgress, (v) =>
    v >= pre && v <= end ? 40 : index
  );

  return (
    <motion.div
      style={{
        rotateX,
        scale,
        y,
        opacity,
        zIndex,
        transformStyle: 'preserve-3d',
      }}
      onViewportEnter={() => onInView()}
      className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[32px] p-6 sm:p-10 ${card.theme.bg} ${card.theme.border} ${card.theme.shadow} border transition-shadow duration-300`}
    >
      <div className="grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Left column: headline, bullet points and pill CTA */}
        <div className="flex flex-col justify-between h-full lg:col-span-7">
          <div>
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              <span className={`rounded-full px-2.5 py-0.5 ${card.theme.badgeBg} ${card.theme.badgeText}`}>
                {card.badge}
              </span>
            </div>

            {/* Massive Bold Headline */}
            <h3
              className={`mt-4 text-2xl font-black leading-tight tracking-tight sm:text-3xl lg:text-[34px] ${card.theme.text}`}
            >
              {card.title}
            </h3>

            <p className={`mt-3 text-xs sm:text-sm font-medium leading-relaxed ${card.theme.subText}`}>
              {card.description}
            </p>

            {/* 3 Standout Features */}
            <ul className="mt-5 space-y-2.5">
              {card.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
                  <FiCheckCircle
                    className={`h-4 w-4 shrink-0 ${
                      card.theme.text.includes('white') ? 'text-gold-300' : 'text-ink'
                    }`}
                  />
                  <span className={card.theme.text}>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA Pill */}
          <div className="mt-6 pt-2">
            <Link
              href={card.ctaHref}
              className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 ${card.theme.buttonBg} ${card.theme.buttonText}`}
            >
              <span>{card.ctaText}</span>
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Interface Showcase Mockup */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
          <CardGraphicVisual type={card.type} />
        </div>
      </div>
    </motion.div>
  );
}

function CardGraphicVisual({ type }: { type: CardData['type'] }) {
  switch (type) {
    case 'exchange':
      return (
        <div className="w-full rounded-2xl border border-neutral-700 bg-neutral-900 p-5 shadow-2xl text-white">
          <div className="flex items-center justify-between border-b border-neutral-700 pb-3">
            <div className="flex items-center gap-2">
              <RiExchangeDollarLine className="h-5 w-5 text-white" />
              <span className="font-mono text-xs font-bold tracking-wider">P2P_RATE_ENGINE</span>
            </div>
            <span className="rounded bg-gold-900 px-2 py-0.5 font-mono text-[10px] font-bold text-gold-200 border border-gold-700">
              BYBIT + OKX
            </span>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-[11px] font-mono opacity-75">
              <span>PAIR</span>
              <span>SELL</span>
              <span>BUY</span>
            </div>
            <div className="space-y-1 font-mono text-xs">
              <div className="flex justify-between text-gold-300 bg-gold-500/10 px-2 py-1 rounded">
                <span>USDT/GHS</span>
                <span>11.8450</span>
                <span>12.1901</span>
              </div>
              <div className="flex justify-between text-gold-200 bg-gold-500/5 px-2 py-1 rounded">
                <span>USDT/NGN</span>
                <span>1351.22</span>
                <span>1362.00</span>
              </div>
              <div className="flex justify-between text-gold-200 bg-gold-500/5 px-2 py-1 rounded">
                <span>TRX/GHS</span>
                <span>-</span>
                <span>-</span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-black/25 p-2.5 font-mono text-[10px] text-gold-100 flex items-center justify-between">
            <span>TRADER FILTER: ≥90% EXECUTION</span>
            <span className="text-gold-300 font-bold">REFETCH 10s</span>
          </div>
        </div>
      );

    case 'blockos':
      return (
        <div className="w-full rounded-2xl border border-neutral-300 bg-white p-5 shadow-xl text-neutral-800">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
            <div className="flex items-center gap-2">
              <RiShieldFlashLine className="h-5 w-5 text-gold-700" />
              <span className="font-mono text-xs font-bold text-neutral-900">BLOCKOS_PRODUCTION</span>
            </div>
            <span className="font-mono text-[10px] font-bold text-gold-700">
              FACTORY DASHBOARD
            </span>
          </div>

          <div className="mt-4 flex gap-2 font-mono text-[10px]">
            <div className="flex-1 rounded-lg border border-neutral-200 bg-neutral-50 p-2">
              <p className="text-neutral-500">MOULDED</p>
              <p className="mt-0.5 font-bold text-neutral-900">Batch #2041</p>
              <p className="text-gold-700">× 250 blocks</p>
            </div>
            <div className="flex-1 rounded-lg border border-neutral-200 bg-neutral-50 p-2">
              <p className="text-neutral-500">CURING</p>
              <p className="mt-0.5 font-bold text-neutral-900">Batch #2040</p>
              <p className="text-gold-700">48h remaining</p>
            </div>
            <div className="flex-1 rounded-lg border border-neutral-200 bg-neutral-50 p-2">
              <p className="text-neutral-500">READY</p>
              <p className="mt-0.5 font-bold text-neutral-900">Batch #2039</p>
              <p className="text-gold-700">Released</p>
            </div>
          </div>

          <div className="mt-3 rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-center font-mono text-[10px] text-neutral-600">
            Cost tracked per batch: cement, labour, transport
          </div>
        </div>
      );

    case 'livestock':
      return (
        <div className="w-full rounded-2xl border border-neutral-700 bg-neutral-900 p-5 shadow-2xl text-white">
          <div className="flex items-center justify-between border-b border-neutral-700 pb-3">
            <div className="flex items-center gap-2">
              <RiSeedlingLine className="h-5 w-5 text-gold-300" />
              <span className="font-mono text-xs font-bold">LIVESTOCK_OS_EDGE</span>
            </div>
            <span className="font-mono text-[10px] font-bold text-gold-200">
              OFFLINE SYNC READY
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-black/20 p-3">
              <span className="text-[10px] uppercase text-gold-200/80">Farm Health Score</span>
              <p className="font-mono text-xl font-bold text-white mt-1">82 / 100</p>
              <span className="text-[10px] text-gold-300">Explainable · No LLM</span>
            </div>
            <div className="rounded-xl bg-black/20 p-3">
              <span className="text-[10px] uppercase text-gold-200/80">Queue State</span>
              <p className="font-mono text-sm font-bold text-white mt-1">2 LOCAL</p>
              <span className="text-[10px] text-gold-300">Pushed on reconnect</span>
            </div>
          </div>

          <div className="mt-3 rounded-lg bg-black/20 p-2 text-center text-xs font-mono text-gold-200">
            QR Passport · Herd · Health · Feeding · Accounts
          </div>
        </div>
      );

    case 'cryptointel':
      return (
        <div className="w-full rounded-2xl border border-neutral-700 bg-neutral-900 p-5 shadow-2xl text-white">
          <div className="flex items-center justify-between border-b border-neutral-700 pb-3">
            <div className="flex items-center gap-2">
              <RiLineChartLine className="h-5 w-5 text-white" />
              <span className="font-mono text-xs font-bold">CRYPTO_INTEL</span>
            </div>
            <span className="font-mono text-[10px] font-bold text-white">
              6 INGESTION SOURCES
            </span>
          </div>

          <div className="mt-4 space-y-2 font-mono text-xs">
            <div className="rounded-xl bg-black/25 p-2.5">
              <p className="text-[10px] text-gold-200">SCORE MODEL · 10X POTENTIAL</p>
              <div className="mt-1 flex justify-between text-white">
                <span>On-chain · Dev activity · Liquidity</span>
                <span className="text-gold-400 font-bold">EXPLAINABLE</span>
              </div>
            </div>
            <div className="rounded-xl bg-black/25 p-2.5">
              <p className="text-[10px] text-gold-200">GEM WATCH · $5M–$50M CAP</p>
              <div className="mt-1 flex justify-between text-white">
                <span>DEX liquidity ≥ $50K · Vol ≥ $50K</span>
                <span className="text-gold-400 font-bold">GRADE S/A</span>
              </div>
            </div>
            <div className="rounded-xl bg-black/25 p-2.5">
              <p className="text-[10px] text-gold-200">ALERT ROUTING</p>
              <div className="mt-1 flex justify-between text-white">
                <span>Telegram · Email · HMAC webhook</span>
                <span className="text-gold-400 font-bold">LIVE</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
