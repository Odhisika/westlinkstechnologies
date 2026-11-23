import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0D10',
          soft: '#141A22',
          muted: '#1E2630',
          faint: '#2A3440',
        },
        gold: {
          DEFAULT: '#F1B60B',
          50: '#FDF9EC',
          100: '#FBF0CC',
          200: '#F6E08E',
          300: '#F3CE4F',
          400: '#F1B60B',
          500: '#DBA000',
          600: '#B58209',
          700: '#8A6100',
          800: '#5F4400',
          900: '#3D2C00',
          950: '#241A00',
        },
        cream: '#FBFAF7',
        paper: '#F9F9F9',
      },
      boxShadow: {
        'brand-sm': '0 4px 14px 0 rgba(10, 13, 16, 0.06)',
        'brand-card': '0 20px 50px -12px rgba(10, 13, 16, 0.10)',
        'brand-hover': '0 30px 60px -12px rgba(241, 182, 11, 0.20)',
        'brand-glow': '0 0 50px -10px rgba(241, 182, 11, 0.35)',
        'brand-elevated': '0 30px 60px -12px rgba(10, 13, 16, 0.12), 0 18px 36px -18px rgba(0, 0, 0, 0.15)',
        'brand-float': '0 24px 48px -12px rgba(10, 13, 16, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.4', transform: 'scale(.7)' },
        },
        scrollMarquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        cardFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        meshSlow: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.08) rotate(3deg)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp .8s cubic-bezier(.16,1,.3,1) forwards',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
        marquee: 'scrollMarquee 32s linear infinite',
        cardFloat: 'cardFloat 5s ease-in-out infinite',
        mesh: 'meshSlow 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
