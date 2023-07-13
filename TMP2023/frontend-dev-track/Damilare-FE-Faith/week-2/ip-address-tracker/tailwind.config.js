/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        custom_v_dark_gray: "hsl(0, 0%, 17%)",
        custom_dark_gray: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
