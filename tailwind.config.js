/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#abf1f2",
        
"secondary": "#db78b2",
        
"accent": "#f1f79b",
        
"neutral": "#15191E",
        
"base-100": "#FCFCFD",
        
"info": "#88C6D7",
        
"success": "#146C40",
        
"warning": "#E9A125",
        
"error": "#F2407B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
