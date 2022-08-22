/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    extend: {
      colors: {
        orangeRed: "#ff4500",
        orange: "#ffcd9e",
        newBlack: "#563434",
        lightOrange: "#ff983d",
      },
    },
  },
  plugins: [],
};
