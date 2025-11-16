/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ff7b00",
        charcoal: "#0f0f0f",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
