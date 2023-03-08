/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: "#F4511E",
        secondary: "#1A1E1F",
        tetiary: "#FFDE91",
      },
    },
    screens: {
      xs: "350px",
      ss: "620px",
      sm: "768px",
      smd: "880px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    animation: {
      slideup: "slideup 1s ease-in-out",
      slidedown: "slidedown 1s ease-in-out",
      slideleft: "slideleft 1s ease-in-out",
      slideright: "slideright 1s ease-in-out",
      wave: "wave 1.2s linear infinite",
      slowfade: "slowfade 2.2s ease-in-out",
      zoom: "zoom-in-zoom-out 1s ease infinite",
    },
    keyframes: {
      slowfade: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideup: {
        from: { opacity: 0, transform: "translateY(25%)" },
        to: { opacity: 1, transform: "none" },
      },
      slidedown: {
        from: { opacity: 0, transform: "translateY(-25%)" },
        to: { opacity: 1, transform: "none" },
      },
      slideleft: {
        from: { opacity: 0, transform: "translateX(-20px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      slideright: {
        from: { opacity: 0, transform: "translateX(20px)" },
        to: { opacity: 1, transform: "translateX(0)" },
      },
      wave: {
        "0%": { transform: "scale(0)" },
        "50%": { transform: "scale(1)" },
        "100%": { transform: "scale(0)" },
      },
      zoom: {
        "0%": { transform: "scale(1, 1)" },
        "50%": { transform: "scale(1.5, 1.5)" },
        "100%": { transform: "scale(1, 1)" },
      },
    },
  },
  plugins: [
    require("vidstack/tailwind.cjs")({
      prefix: "media", // paused:... -> media-paused:...
    }),
  ],
};
