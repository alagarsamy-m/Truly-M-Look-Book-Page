import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#B82C1C',          // Exact red sampled from the Truly M logo bindi
          'red-hover': '#9C2214',  // Deep crimson hover state
          'red-light': '#FBF1EE',  // Subtle red tint for badges and highlights
          beige: '#FAF7F2',        // Warm beige main background from document
          cream: '#FDFDEE',        // Natural cotton/paper tone from logo background
          ash: '#9C928C',          // Neutral ash from specification (#9C928C)
          'light-grey': '#EEEEEE', // Light grey (#EEEEEE)
          'soft-grey': '#CCCCCC',  // Soft grey (#CCCCCC)
          charcoal: '#1F1D1B',     // Deep artisanal soot black for text
          earth: '#6E665F',        // Warm earthen subtitle tone
          sand: '#EFECE6',         // Border and subtle surface tone
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Didot', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/5': '4 / 5',
        '2/3': '2 / 3',
        '16/10': '16 / 10',
      },
      boxShadow: {
        'artisan': '0 10px 30px -10px rgba(31, 29, 27, 0.08)',
        'artisan-lg': '0 20px 40px -15px rgba(31, 29, 27, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
