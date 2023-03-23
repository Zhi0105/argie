/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max': '639px'},
        'md': {'min': '640px', 'max': '767px'},
        'lg': {'min': '768px', 'max': '1023px'},
        'xl': {'min': '1024px', 'max': '1279px'},
        '2xl': {'min': '1280px'},
      }
    }
  },
  plugins: [],
}