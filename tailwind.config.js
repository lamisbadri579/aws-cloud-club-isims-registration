/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':'Poppins',
        'jua':'Jua'
      },
      colors:{
        "orange":"#FE9A07",
        "purple1":"#2F005A",
        "purple2":"#41127F",
        "purple3":"#525EB4",
        "orange-required":"#EF6306",
        "gray-label":"#262424",
        "bg-form":"#EDEDED"
      },
      backgroundImage:{
        "bg-color":"linear-gradient(135deg,#2F005A 50%,#41127F 70%,#525EB4 100%)"
      }
    },
  },
  plugins: [],
}

