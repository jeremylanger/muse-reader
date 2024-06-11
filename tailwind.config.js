/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-serif": ["DM Serif Text", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-safe-area")],
};
