/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html, js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#00353F',
        'secondary': '#D4D3DC',
        'txt': '#939597'
      },
      fontFamily: {
        'titles': ['Alkatra', 'cursive'],
        'pro-cufonfonts': ['pro-cufonfonts'],
        'cufonfonts': ['cufonfonts']
      }
    },
  },
  plugins: [],
}

