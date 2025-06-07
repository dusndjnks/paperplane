/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",                     // Custom small screen breakpoint
        ...defaultTheme.screens,         // Spread in all default Tailwind breakpoints
      },
      fontFamily: {
        alex: ["'Alex Brush'", "cursive"],
        cormorant: ["'Cormorant Upright'", ...defaultTheme.fontFamily.serif],
        montez: ["'Montez'", "cursive"],
        montserrat: ["'Montserrat'", ...defaultTheme.fontFamily.sans],
        oooh: ["'Oooh Baby'", "cursive"],
      },
    },
  },
  plugins: [],
};
