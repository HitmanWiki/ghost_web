/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ghost-purple': '#8b5cf6',
        'ghost-cyan': '#06b6d4',
        'ghost-pink': '#ec4899',
        'ghost-neon': '#a78bfa',
        'ghost-green': '#10b981',
        'ghost-dark': '#07030e',
        'ghost-card': '#160e2a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}