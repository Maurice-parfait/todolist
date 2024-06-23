/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js", "./todolist.html", "todolist.js"],
  theme: {
    extend: {
      fontFamily : {
        primary :  "Roboto"
      }
      
    },
  },
  plugins: [],
}

