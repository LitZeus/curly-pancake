/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        small: '8rem',   // For small cards
        tall: '20rem',   // For tall cards
        large: '12rem',  // For large cards
      },
      width: {
        wide: '100%',    // For wide cards in the last row
      },
    },
  },
  plugins: [],
};
