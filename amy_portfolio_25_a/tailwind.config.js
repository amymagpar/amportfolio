/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.{html,js,lr}", "./site/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "3rem",
        // "3xl": "3rem",
        // "3xl": "4rem",
      },
    },
    extend: {
      colors: {
        black: "#27272a",
        white: "#fafafa",
        tonered: "#e88b8b",
        toneorange: "#f0a875",
        toneyellow: "#e8cc70",
        tonegreen: "#84c49a",
        toneblue: "#84c4e0",
        tonepink: "#d685ab",
        toneviolet: "#b187c4",
      },
      screens: {
        // "3xl": "1900px",
        // "4xl": "2600px",
      },
      borderRadius: {
        big: "42px",
        huge: "128px",
        circle: "50%",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        // display: ['"Red Hat Display"', "sans-serif"],
        display: ['"Inter"', "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },

      fontSize: {
        sm: ["0.875rem", { lineHeight: "1.375" }], // `leading-snug`
        base: ["1rem", { lineHeight: "1.375" }],
        lg: ["1.125rem", { lineHeight: "1.375" }],
        xl: ["1.25rem", { lineHeight: "1.375" }],
        "2xl": ["1.5rem", { lineHeight: "1.375" }],
        "3xl": ["1.875rem", { lineHeight: "1.375" }],
        "4xl": ["2.25rem", { lineHeight: "1.375" }],
        "5xl": ["3rem", { lineHeight: "1.375" }],
        "6xl": ["3.75rem", { lineHeight: "1.375" }],
        "7xl": ["4.5rem", { lineHeight: "1.375" }],
        "8xl": ["6rem", { lineHeight: "1.375" }],
        "9xl": ["8rem", { lineHeight: "1.375" }],
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
      "dark",
      "corporate",
    ],
  },
};
