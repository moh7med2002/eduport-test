module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      fontFamily:{
        'heebo':['Heebo','sans-serif']
      },
      colors:{
        mainBlack:"#24292d",
        second:"#747579",
        blue:"#066ac9",
        info:"#17a2b8",
        yellow:"#f7c32e",
        green:"#0cbc87",
        orange:"#fd7e14",
        red:"#d6293e"
      }
    },
  },
  plugins: [],
}
