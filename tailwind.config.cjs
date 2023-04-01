/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Poppins', 'sans-serif'],
      'body': ['Raleway', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'about-us-bg': "url('/img/building.jpg')",
        'ruang-tamu-bg': "url('/img/ruang-tamu-2.jpg')",
        'pabrikasi-bg': "url('/img/pabrikasi.jpg')",
        'lapangan-bg': "url('/img/lapangan.jpg')",
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ],
}
