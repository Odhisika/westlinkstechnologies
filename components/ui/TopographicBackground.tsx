'use client';

export default function TopographicBackground({
  variant = 'light',
  showMesh = true,
  showLattice = true,
}: {
  variant?: 'light' | 'white' | 'dark';
  showMesh?: boolean;
  showLattice?: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Ambient luminous mesh glows */}
      {showMesh && (
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-32 -right-32 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-gold-400/20 via-gold-400/15 to-gold-300/10 blur-[130px] animate-mesh" />
          <div className="absolute top-1/3 -left-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-gold-400/20 via-gold-500/15 to-gold-400/10 blur-[140px]" />
          <div className="absolute -bottom-24 right-1/4 h-[400px] w-[600px] rounded-full bg-gradient-to-r from-gold-400/15 via-gold-300/15 to-gold-400/10 blur-[120px]" />
        </div>
      )}

      {/* Bespoke architectural interwoven lattice pattern */}
      {showLattice && (
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <pattern
              id="architectural-lattice"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              {/* Quadrant 1: Top-Left Horizontal Bars */}
              <rect x="4" y="5" width="16" height="2.4" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />
              <rect x="4" y="11" width="16" height="2.4" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />
              <rect x="4" y="17" width="16" height="2.4" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />

              {/* Quadrant 2: Top-Right Vertical Bars */}
              <rect x="29" y="4" width="2.4" height="16" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />
              <rect x="35" y="4" width="2.4" height="16" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />
              <rect x="41" y="4" width="2.4" height="16" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />

              {/* Quadrant 3: Bottom-Left Vertical Bars */}
              <rect x="5" y="28" width="2.4" height="16" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />
              <rect x="11" y="28" width="2.4" height="16" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />
              <rect x="17" y="28" width="2.4" height="16" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />

              {/* Quadrant 4: Bottom-Right Horizontal Bars */}
              <rect x="28" y="29" width="16" height="2.4" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />
              <rect x="28" y="35" width="16" height="2.4" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />
              <rect x="28" y="41" width="16" height="2.4" rx="1.2" fill={variant === 'dark' ? '#ffffff' : '#0A0D10'} fillOpacity={variant === 'dark' ? '0.04' : '0.048'} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#architectural-lattice)" />
        </svg>
      )}

      {/* Topographic contour waves */}
      <svg
        className={`absolute inset-0 h-full w-full ${
          variant === 'dark' ? 'stroke-white/[0.03]' : 'stroke-neutral-900/[0.035]'
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <defs>
          <pattern
            id="contour-grid"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40 C 60 10, 120 70, 180 30 C 210 10, 230 40, 240 50"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0 90 C 50 120, 110 60, 170 100 C 200 120, 225 90, 240 100"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0 150 C 70 130, 130 190, 190 140 C 215 120, 230 160, 240 170"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M0 210 C 60 230, 120 180, 180 220 C 210 240, 230 200, 240 210"
              strokeWidth="1.2"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contour-grid)" />
      </svg>
    </div>
  );
}
