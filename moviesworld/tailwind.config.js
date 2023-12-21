/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      },
      colors: {
        "light-blue" : "#227fb4",
        "light-gray" : "#9ca3af",
        "dark-gray" : "#202020"
      }
    },
  },
  plugins: [],
}

