import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Light mode cream palette */
        cream: {
          50: '#faf8f4',
          100: '#f5f0e8',
          200: '#ede6d6',
          300: '#ddd2b8',
          400: '#c4b48e',
          500: '#a89672',
          600: '#7d6e52',
          700: '#5c5039',
          800: '#3d3526',
          900: '#2a2017',
        },
        /* Dark mode navy palette */
        navy: {
          50: '#e8ecf2',
          100: '#c4cdd9',
          200: '#8e9fb5',
          300: '#5a7090',
          400: '#35506f',
          500: '#1a3352',
          600: '#131d2e',
          700: '#0e1622',
          800: '#0a1018',
          900: '#060b10',
        },
        /* Accent colors */
        gold: '#d4a04a',
        'gold-dark': '#b8862e',
        'retro-red': '#c44b36',
        'retro-green': '#5a7247',
        /* Severance legacy */
        marine: '#002c55',
        frost: '#f0f6f7',
        slate: '#89aec8',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        cjk: ['"Noto Sans SC"', 'sans-serif'],
      },
      borderWidth: {
        pixel: '4px',
        'pixel-thick': '8px',
        'pixel-thin': '2px',
      },
      boxShadow: {
        pixel: '4px 4px 0 rgba(0, 0, 0, 0.3)',
        'pixel-lg': '8px 8px 0 rgba(0, 0, 0, 0.3)',
        'pixel-gold': '4px 4px 0 rgba(212, 160, 74, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
