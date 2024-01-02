/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: '470px',
        tablet: '676px',
        desktop: '976px',
        lgDesktop: '1200px',
        xlDesktop: '1380px',
      },

      container: {
        center: true
      },

      fontFamily: {
        primary: "'Barlow', sans-serif",
        head: "'Bellefair', serif"
      }
    },
  },
  plugins: [],
}

