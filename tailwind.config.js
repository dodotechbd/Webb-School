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
          primary: "#494FC1",
          secondary: "#D926A9",
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
