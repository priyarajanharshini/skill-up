 module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{html,js}"],
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
        "gray-color": '#cccccc'
      },
      fontFamily: {
        'clash': ['"Clash Display"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'nunito': ['"Nunito"', 'sans-serif'],
        'Outfit' : ['Outfit']
      },
      boxShadow: {
        'custom': 'shadow-custom shadow-lg',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      lineHeight: {
        'custom': '67.2px',
      },
      borderRadius: {
        'custom': '32px',
      },
      textColor : {
        "lightgray" : "#808080",
        'black': '#222222'

      },
      gap: {
        "12" : "12px"
      },
      height: {
        "178": "178px"
      },
      width :{
        "462": "462px",
        "478": "478px",
        "62" : "252px",
        "58" : "232px"
       
      },
    },
  },
  plugins: [],
}
