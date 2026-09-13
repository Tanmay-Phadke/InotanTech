/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: '#0F0E0E',
        darkBg: '#0a0a0c',
        card: '#171616',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
        primary: {
          DEFAULT: '#FF8C00',
          hover: '#FF7700',
          glow: 'rgba(255, 140, 0, 0.35)',
        },
        secondary: '#FF5F00',
        muted: '#A1A1AA',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(255, 140, 0, 0.3)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(255, 140, 0, 0.15) 0%, rgba(15, 14, 14, 0) 70%)',
        'radial-bottom': 'radial-gradient(circle at 50% 100%, rgba(255, 95, 0, 0.12) 0%, rgba(15, 14, 14, 0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
