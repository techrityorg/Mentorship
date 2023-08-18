/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        custom: {
          "key-dark": "var(--text-dark-color)",
          "key-white": "var(--text-white-color)",
          "screen-text": "var(--text-screen-color)"
        },
      },
      backgroundColor: {
        custom: {
          main: "var(--main-background-color)",
          keypad: "var(--keypad-background-color)",
          screen: "var(--screen-background-color)",
          blue: "var(--key-blue-color)",
          red: "var(--key-red-color)",
          light: "var(--key-light-color)",
        },
      },
      boxShadow: {
        "key-shadow-blue": " 0px 4px var(--key-blue-shadow) ",
        "key-shadow-red": " 0px 4px var(--key-red-shadow) ",
        "key-shadow-light": " 0px 4px var(--key-light-shadow)",
      },
      fontFamily: {
        Spartan: "Spartan, sans-serif ",
      },
    },
  },
  plugins: [],
};
