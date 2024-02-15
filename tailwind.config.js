/** @type {import("tailwindcss").Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,astro}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        large: "var(--large-size)",
      },
      colors: {
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
};
