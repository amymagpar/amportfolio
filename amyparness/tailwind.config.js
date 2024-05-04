/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./**/*.html'],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      mono: ["ui-monospace", "monospace"],
    },
  },
  corePlugins: {
    preflight: false,
  },
};