/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', './**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        body: ["Inter var", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  plugins: [
    require("@tailwindcss/typography"), require('daisyui'), require('tailwindcss-animated')

  ],
}

