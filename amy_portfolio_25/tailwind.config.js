/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./original_site/**/*.{html,js}"],
  theme: {
    extend: {
       fontFamily: {
        sans: ["Inter var", "sans-serif"],
        body: ["Inter var", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
     
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwindcss-animated"),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "nord"],
  }
}
