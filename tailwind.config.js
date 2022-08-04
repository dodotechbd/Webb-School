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
          accent: "#0F172A",
          info: "#6D28D9",
          neutral: "#D2D6DC",
          warning: "#0F172A",
          "base-100": "#ffffff",
          "base-200": "#F7F8FA",
          "base-300": "#ededed",
        },
      },
      {
        my_dark: {
          primary: "#3ABFF8",
          secondary: "#F04A7D",
          accent: "#0284C7",
          info: "#0284C7",
          neutral: "#334155",
          warning: "#E2E8F0",
          "base-100": "#0F172A",
          "base-200": "#0E1527",
          "base-300": "#161f35",
        },
      },
      "light",
      "dracula",
    ],
  },
}
