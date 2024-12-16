import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      josefin: ['"Josefin Sans"', 'sans-serif'],
      solway: ['"Solway"', 'serif'],
      Mono: ['"Syne Mono"', 'monospace'],
      eczar: ['"Eczar"', 'serif'],
      pacifco: ['"Pacifico"', 'cursive'],
    },
  },
  plugins: [],
});
