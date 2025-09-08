/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      screens: {
        bp1200: '1200px',
        bp1100: '1100px',
        bp900: '900px',
        bp520: '520px',
      },
    }
  },
  corePlugins: {
    // Mantém seu CSS existente sem o reset do Tailwind
    preflight: false
  },
  plugins: []
};
