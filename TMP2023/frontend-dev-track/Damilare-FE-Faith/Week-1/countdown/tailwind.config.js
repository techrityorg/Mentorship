module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Red_hat: ["Red Hat Text", "sans-serif"],
      },
      colors: {
        custom_desaturated_blue: "hsl(236, 21%, 26%)",
        custom_dark_blue: "hsl(235, 16%, 14%)",
        custom_dark: "hsl(234, 17%, 12%)",
        custom_grayish_blue: "hsl(237, 18%, 59%)",
        custom_soft_red: "hsl(345, 95%, 68%)",
      },
    },
  },
  plugins: [],
};
