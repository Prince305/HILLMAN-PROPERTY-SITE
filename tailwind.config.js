/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#112847', // Deep Navy — matched to logo
          light: '#1B3A5C',
          dark: '#0A1A30',
        },
        accent: {
          DEFAULT: '#E8A830', // Vibrant Amber — matched to reference
          light: '#F0C050',
          dark: '#D09520',
        },
        neutral: {
          50: '#FAFAF8', // Warm White
          100: '#F5F3EF',
          200: '#E8E4DC',
          300: '#D1CBC0',
          700: '#4A4540',
          900: '#1A1815',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}