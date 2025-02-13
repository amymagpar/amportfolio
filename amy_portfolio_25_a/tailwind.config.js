/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.{html,js,lr}", "./site/**/*.html"],
  theme: {
    extend: {
      borderRadius: {
        big: "42px",
        huge: "128px",
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        body: ["Inter var", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwindcss-animate"),
  ],
  daisyui: {
    themes: true,
    logs: true,
  },
};
