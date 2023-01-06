/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        alto: '#d9d9d9',
        shark: '#1b1c1e',
        firefly: '#172c34',
        romance: '#fffefd',
        woodsmoke: '#161718',
        'cod-gray': '#111111',
        'wild-sand': '#f5f5f5',
        'dove-gray': '#717171',
        'alto-light': '#cecece',
        'outer-space': '#232b2b',
        'muddy-waters': '#b68e5c',
        'azure-radiance': '#0381f9',
      },
    },
    fontFamily: {
      arial: ['Arial', 'sans-serif'],
      montserrat: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: {
      'x-large': { max: '1440px' },
      large: { max: '1200px' },
      laptops: { max: '1024px' },
      tablets: { max: '768px' },
      phones: { max: '600px' },
    },
  },
};
