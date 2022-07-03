/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#121717',
        primaryRed: '#EE1D2C',
        primaryWhite: '#DAD8D8',
        secondary: '#605D5B',
      },
    },
    
  },
  plugins: [],
}
