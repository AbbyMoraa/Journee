/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F4E4C1',    // Warm, sandy beige
        ocean: '#2A9D8F',   // Deep teal
        wave: '#48CAE4',    // Bright blue
        sunset: '#FF9F1C',  // Orange glow
        coral: '#FF6B6B',   // Vibrant pink
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};