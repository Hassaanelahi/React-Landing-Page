/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Barlow': ['"Barlow"'],
      },
      colors: {
        'theme-black':'#212b36',
        'theme-orange':'#FA541C',
        'theme-lightBlack':'#637381'
      },
    },
  },
  plugins: [],
}

