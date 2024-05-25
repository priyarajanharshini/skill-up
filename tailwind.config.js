/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {

        colors: {
            "dark-green": '#448F30',
            "light-green": '#DEFAD4',
            "grey-green": '#92ab89',
            "green-shaded": '#6cbd4f',
            "very-light-green": '#84bf71',
            "parrot-green": '#67FE33',
            "remove-red": '#eb4034',
            "card-green": '#F2FFED',
            "gray-color": '#cccccc',
            "lightgray":"#EEEEEE"
          },
          fontFamily: {
            'roboto': ['"Roboto"', 'sans-serif'],
            'nunito': ['"Nunito"', 'sans-serif'],
            'clash': ['Clash Display'],
            'Outfit' : ['Outfit']
          },
          boxShadow: {
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
          },
          width :{
            "w-478": "width:478px",
            "w-462": "width:462px"
          },
          height: {
            "h-178": "height:178px"
          },
          gap: {
            "gap-12" : "gap:12px"
          },
          textColor : {
            "lightgray" : "lightgray:#808080",
            'black': '#222222'
    
    
          }
    },
  },
  plugins: [],
}

