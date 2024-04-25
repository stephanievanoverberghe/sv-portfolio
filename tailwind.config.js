const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, jsx}"],
  theme: {
    // A l'extérieur, ça remplace les fonctionnalités se trouvant dans le thème tailwind
    extend: {
      // A l'intérieur, ça ajoute des fonctionnalités au thème tailwind sans rien écraser
      colors: {
        'red-pink': {
          50: '#fff1f3',
          100: '#ffe4e7',
          200: '#ffccd4',
          300: '#fea3b1',
          400: '#fd6f88',
          500: '#f73c63',
          600: '#d31848',
          700: '#c10f42',
          800: '#a1103d',
          900: '#8a113b',
          950: '#4d041c'
        }
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        Patua: ['Patua One', 'serif'],
      },
    },
  },
  plugins: [],
}

