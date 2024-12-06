/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        '12-custom': 'repeat(12, minmax(0, 1fr))',
      },
      height: {
        'card-small': '200px', // Fixed height for small cards
        'card-tall': '400px', // Fixed height for tall cards
        'card-large': 'auto', // Keep large cards auto
        'card-wide': '300px', // Subscribe card height
      },
      aspectRatio: {
        'square': '1 / 1', // Ensure square aspect ratio for small cards
      },
    },
  },
  plugins: [],
};
