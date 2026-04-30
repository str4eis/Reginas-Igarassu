/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#8B35C4',
          light: '#A855E0',
          dark: '#6B1EA0',
          cta: '#9B4FD0',
          50: '#F5EEFF',
          100: '#E9D5FF',
        },
        teal: {
          DEFAULT: '#2A9D8F',
          light: '#3BB8A8',
          dark: '#1F7A6E',
        },
        gold: {
          DEFAULT: '#C9951A',
          light: '#E5B030',
        },
        brand: {
          bg: '#F8F7F5',
          dark: '#1C1C2E',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #8B35C4 0%, #6B1EA0 100%)',
        'purple-cta': 'linear-gradient(135deg, #9B4FD0 0%, #7B2DB4 100%)',
      },
    },
  },
  plugins: [],
}

