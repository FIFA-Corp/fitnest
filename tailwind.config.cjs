/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'custom-blue-primary': '#23B6D1',
        'custom-black-secondary': '#122C34',
        'custom-black-primary': '#000000',
        'custom-blush-pink': '#D8B8B8',
        'custom-white': '#FFFFFF',
        'custom-yellow': '#FFFF00',
      }
    },
  },
  plugins: [],
};
