/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.{html,js,lr}", "./site/**/*.html"],
  theme: {
    colors: {
      black: "#18181b",
      white: "#fafafa",
    },
    extend: {
      borderRadius: {
        big: "42px",
        huge: "128px",
      },
      fontFamily: {
        sans: ['"Red Hat Text"', "sans-serif"],
        body: ['"Red Hat Text"', "sans-serif"],
        display: ['"Red Hat Display"', "sans-serif"],
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
    logs: true,
    themes: false,
    themes: [
      {
        mytheme: {
          primary: "#003f5c",
          secondary: "#58508d",
          accent: "#bc5090",
          neutral: "#58508d",
          "base-100": "#ffffff",
          info: "#5a6fb6",
          success: "#84cc16",
          warning: "#ffa600",
          error: "#ff6e54",
        },
      },
      "corporate",
    ],
  },
};
