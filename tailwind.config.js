/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        yellow: {
          light: "#FFF7E6",
          DEFAULT: "#F2994A",
          dark: "#FF9900",
        },
        green: {
          light: "#EBF9F5",
          DEFAULT: "#219653",
          dark: "#3EAA86",
        },
        red: {
          light: "#FDF4F7",
          DEFAULT: "#EB5757",
          dark: "#B93E5C",
        },
        blue: {
          DEFAULT: "#0F6FDE",
        },
        gray: {
          light: "#F8FAFB",
          DEFAULT: "#4A5D75",
          dark: "#091626",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
