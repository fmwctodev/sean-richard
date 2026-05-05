import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#0E0D0C',
          primary: '#0E0D0C',
          elevated: '#161513',
          panel: '#1C1A18',
        },
        ink: {
          DEFAULT: '#F2EDE6',
          primary: '#F2EDE6',
          secondary: '#B8B1A6',
          tertiary: '#9A9388',
        },
        line: {
          DEFAULT: 'rgba(242, 237, 230, 0.08)',
          strong: 'rgba(242, 237, 230, 0.16)',
        },
        accent: {
          DEFAULT: '#EF4444',
          dark: '#DC2626',
          light: '#F87171',
          soft: '#FCA5A5',
        },
        primary: {
          red: '#EF4444',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        marquee: 'marquee 40s linear infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'mesh-drift-1': 'meshDrift1 80s ease-in-out infinite',
        'mesh-drift-2': 'meshDrift2 100s ease-in-out infinite',
        'mesh-drift-3': 'meshDrift3 120s ease-in-out infinite',
        'mesh-drift-4': 'meshDrift4 90s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.55' },
          '75%, 100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        meshDrift1: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '33%': { transform: 'translate(15%, -10%) scale(1.1)' },
          '66%': { transform: 'translate(-8%, 12%) scale(0.95)' },
        },
        meshDrift2: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1.05)' },
          '40%': { transform: 'translate(-12%, 8%) scale(0.95)' },
          '70%': { transform: 'translate(10%, -14%) scale(1.1)' },
        },
        meshDrift3: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(20%, 15%) scale(1.15)' },
        },
        meshDrift4: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(0.95)' },
          '45%': { transform: 'translate(-15%, -8%) scale(1.05)' },
          '75%': { transform: 'translate(8%, 18%) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
