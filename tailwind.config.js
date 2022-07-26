/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
    },
  },
  plugins: [require("daisyui")],


  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#494FC1",
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
