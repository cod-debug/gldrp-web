/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#FFF',
        primary: '#183444',
        secondary: "#458BC5",
        accent: '#FF007A',
      },
    },
  },
  safelist: [
    'w-[40px]'
  ],
  plugins: [
    require('tailwindcss-rtl'),
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
}

