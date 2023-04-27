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
        alto: '#d9d9d9',
        zorba: '#9c9288',
        shark: '#1b1c1e',
        dorado: '#4f4f4f',
        firefly: '#172c34',
        boulder: '#797979',
        romance: '#fffefd',
        woodsmoke: '#161718',
        'cod-gray': '#111111',
        'wild-sand': '#f5f5f5',
        'alto-dark': '#dfdfdf',
        'dove-gray': '#717171',
        'alto-light': '#cecece',
        'red-orange': '#ff4136',
        'outer-space': '#232b2b',
        'muddy-waters': '#b68e5c',
        'silver-chalice': '#a6a6a6',
        'azure-radiance': '#0381f9',
        'light-dove-gray': '#676767',
      },
      keyframes: {
        'image-motion': {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 0%' },
        },
        'pop-down': {
          '0%': { top: '-200px' },
          '100%': { top: '4px' },
        },
      },
    },
    fontFamily: {
      arial: ['Arial', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      'x-large': { max: '1440px' },
      large: { max: '1200px' },
      '1105px': { max: '1105px' },
      laptops: { max: '1024px' },
      tablets: { max: '768px' },
      phones: { max: '600px' },
      'small-phones': { max: '400px' },
      'x-small-phones': { max: '340px' },
    },
  },
};
