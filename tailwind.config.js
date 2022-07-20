/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],


  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#27895D",
          secondary: "#EB2026",
          accent: "#37cdbe",
          neutral: "#1a161f",
          "base-100": "#ffffff",
        },
      },
      "light",
      "cupcake",
    ],
  },
}
