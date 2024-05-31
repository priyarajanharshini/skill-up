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
      },
      fontFamily: {
        'clash': ['"Clash Display"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'nunito': ['"Nunito"', 'sans-serif'],
        'clash-display': ['Clash Display', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif']

      },
      fontSize: {
        'custom-56': ['56px', {
          lineHeight: '67.2px',
        }],
        'custom-26': ['26px', {
          lineHeight: '32px',
        }]
      },
      fontWeight: {
        '600': 600,
        '300': 300
      },
      colors: {
        'custom-white': 'rgba(255, 255, 255, 1)',
      },


      boxShadow: {
        '3xl': '#000000',
        'custom': 'shadow-custom shadow-lg',
        'custom-box': '0px 0px 16px 0px #C7C7C7',
      },
      lineHeight: {
        'custom': '67.2px',
      },
      borderRadius: {
        '16': '16px',
        'x1': '40px',
        'custom': '32px',
      },
      textColor: {
        "lightgray": "#808080",
        'black': '#222222',
        'sky-blue':'#0075FF',
      },
      backgroundColor: theme => ({
        'blue': {
          '500': '#0075FF',
          '600': '#0056b3',
        },
        'custom-black': { '500': '#171717' },
      }
      ),
      gap: {
        "12": "12px",
        '10': '10px',
      },
      opacity: {
        '100': '100',
      },
      height: {
        hug: '76px',
        "178": "178px",
        '562': '562',
        '134': '134'
      },
      width: {
        hug: '236px',
        "462": "462px",
        "478": "478px",
        '1240': '1240',
        '943': '943'
      },

      padding: {
        '60': '60px',
        '24': '24px',
      },


    },
    plugins: [],

  },
}
