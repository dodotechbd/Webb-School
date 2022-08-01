/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Qwigley'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['Francois One'],
      'header': ['Ubuntu'],
      'sub': ['Josefin Sans'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
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
        my_theme: {
          primary: "#494FC1",
          secondary: "#F04A7D",
          accent: "#37cdbe",
          neutral: "#1a161f",
          "base-100": "#ffffff",
          "base-200": "#F7F8FA",
          "base-300": "#f1f5f9",
        },
      },
      "light",
      "night",
    ],
  },
}
