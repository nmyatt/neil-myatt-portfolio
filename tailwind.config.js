/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Lato, sans-serif",        
        display: "Libre Baskerville Bold, serif",
        body: "Noto Sans, sans-serif"        
      },
      rotate: {
        "270": "270deg",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}

