/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#15803d",
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
