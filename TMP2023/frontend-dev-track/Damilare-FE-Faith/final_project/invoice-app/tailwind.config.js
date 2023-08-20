/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        custom: {
          paid: "var(--text-paid)",
          pending: "var(--text-pending)",
          draft: "var(--text-draft)",
          access1: "var(--text-access)",
          paid: "#33d69f",
          pending: "#ff8f00",
          draft: "#dfe3fa",
        },
      },
      backgroundColor: {
        custom: {
          base: "var(--main-bg)",
          btn: "var(--btn-bg)",
          card: "var(--card-bg)",
          nav: "var(--nav-bg)",
          paid_1: "#33d69f0f",
          draft_1: "#dfe3fa0f",
          pending_1: "#ff8f000f",
          paid_2: "#33d69f",
          draft_2: "#dfe3fa",
          pending_2: "#ff8f00",
          total: "var(--total-bg)",
          items: "var( --items-bg)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
