/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ['"Onest"', "sans-serif"], 
      },
      colors: {
        verde: '#6ab356',  
        verdeHover: '#5aa047'
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
