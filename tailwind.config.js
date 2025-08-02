/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6A9C8B",     // your green
        navy: "#1D2B3A",        // dark text
        cream: "#FAF5EF",       // light background
        accent: "#E3DACE",      // soft beige
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};


