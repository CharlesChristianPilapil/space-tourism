/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: '470px',
        tablet: '676px',
        desktop: '976px'
      },

      container: {
        center: true
      }
    },
  },
  plugins: [],
}

