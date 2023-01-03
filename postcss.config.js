module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: { preset: 'default' },
    // purgecss: {
    //   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    //   defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    //   safelist: [],
    // },
  },
};
