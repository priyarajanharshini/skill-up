/**
@type {import('tailwindcss').Config} */
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
        "gray-color": '#cccccc',
        'custom-black': '#171717',
        'customcolor': '#000000',
        'custom-dark-text': '#0DDC74',
        'custom-white': 'rgba(255, 255, 255, 1)',
        'orange': '#FF7A00',
      },
      fontFamily: {
        'clash': ['"ClashDisplay"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'nunito': ['"Nunito"', 'sans-serif'],
        'clash-display': ['"ClashDisplay"', 'sans-serif'],
        'outfit': ['"Outfit"', 'sans-serif'],
        'satisfy': ['Satisfy', 'cursive'],
        "Brush_Script_MT": ['Brush Script MT', 'cursive'],
      },
      fontWeight: {

      },
      fontSize: {
      },

      boxShadow: {
        '3xl': '#000000',
        'custom': 'shadow-custom shadow-lg',
        'custom-box2': '0px 0px 16px 0px #E1E4E3',
        'custom-box': '0px 0px 16px 0px #C7C7C7',
      },
      lineHeight: {
        '47px':'48px',
        '67.2px':'67.2px'
      },
      borderRadius: {
        '28px':'28px',
        '32px': '32px',
        '40px': "40px",
        '50px': '50px'
      },
      textColor: {
        "lightgray": "#808080",
        'black': '#222222',
        'sky-blue': '#0075FF',
      },
      backgroundColor: theme => ({
        'blue': {
          '500': '#0075FF',
          '600': '#0056b3',
        },
        'custom-black': { '500': '#171717' },
        'custom-gray': '#F7F7F7',
        'custom-lightgray': '#F6F6F6',

      }
      ),
      gap: {
        '12px': '12px',
        '10px': '10px',
        '20px' : '20px'
      },
      opacity: {
        '100px': '100px',
      },
      height: {
        '67px':'67px',
        '114px': '114px',
        '150px': '150px',
        '172px': '172px',
        '200px': '200px',
        '230px': '230px',
        '310px': '310px',
        '400px': '400px',
        '470px': '470px'
      },
      width: {
        '88px': '88px',
        '110px': '110px',
        '133px': '133px',
        '150px': '150px',
        '170px': '170px',
        '210px': '210px',
        '280px': '280px',
        '400px': '400px',
        '831px': '831px',
        '1104px':'1104px'


      },
      padding: {
        '16px': '16px',
        '24px': '24px',
        '60px': '60px',
        '75px': '75px',
        '120px': '120px',
      },
      margin: {
        '120px': '120px',
        '50px': '50px',

      },
      spacing: {
        '70px': '70px',
        '75px': '75px'
      },
      borderColor: {
        'custom-gray': '#D9D9D966',
      },
      inset: {
        '40px': '40px',
        '680px': '680px',
      },
      flex: {
        '25': '0 0 25%',
        '33': '0 0 33.3333%',
        '48': '0 0 48%',
        '50': '0 0 50%',
        '100': '1 1 100%',
      },

    },
    variants: {
      extend: {
        flex: ['responsive'],
      },
    },
    placeholderColor: {
      'customized-color': 'black'
    },
    plugins: [],

  },
}
