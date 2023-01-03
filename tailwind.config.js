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
      montserrat: ['Montserrat', 'sans-serif'],
    },
    screens: { '1150px': { max: '1150px' } },
  },
};
