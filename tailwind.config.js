module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#F2A278",

          "secondary": "#153956",

          "accent": "#F5F2E8",

          "neutral": "#002E4D",

          "base-100": "#CCD6F6",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

