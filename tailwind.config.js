/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'dot-pattern': "url('/img/dot.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        
      }
    },
  },
  plugins: [],
}
