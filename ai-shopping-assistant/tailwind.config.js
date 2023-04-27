/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: '#858585',
        concrete: '#f2f2f2',
        romance: '#fffefd',
        'wild-sand': '#f5f5f5',
        'dove-gray': '#717171',
        'alto-light': '#cecece',
        'outer-space': '#232b2b',
        'light-dove-gray': '#676767',
      },
      keyframes: {
        'pop-down': {
          '0%': { top: '-200px' },
          '100%': { top: '4px' },
        },
      },
    },
    screens: {
      'x-large': { max: '1440px' },
      large: { max: '1200px' },
      '1105px': { max: '1105px' },
      laptops: { max: '1024px' },
      '890px': { max: '890px' },
      tablets: { max: '768px' },
      phones: { max: '600px' },
      'small-phones': { max: '430px' },
      'x-small-phones': { max: '340px' },
    },
  },
  plugins: [],
};
