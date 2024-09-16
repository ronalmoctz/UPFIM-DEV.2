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
      boxShadow: {
        '3xl':'0px 10px 50px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
