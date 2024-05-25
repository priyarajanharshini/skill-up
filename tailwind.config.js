// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //     purge: ["./src//*.{js,jsx,ts,tsx}", "./public/index.html"],
// //     content: ["./src//*.{html,js}"],
// //     theme: {
// //       extend: {
// //         colors: {
// //           "dark-green": '#448F30',
// //           "light-green": '#DEFAD4',
// //           "grey-green": '#92ab89',
// //           "green-shaded": '#6cbd4f',
// //           "very-light-green": '#84bf71',
// //           "parrot-green": '#67FE33',
// //           "remove-red": '#eb4034',
// //           "card-green":'#F2FFED',
// //           "gray-color": '#cccccc'
// //         },
// //         fontFamily: {
// //           'roboto': ['"roboto"'],
// //           'nunito': ['"nunito"']
// //         },
// //         boxShadow: {
// //           '3xl': '#000000',
// //         }
// //       },
// //     },
// //     plugins: [],
// //   }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       colors: {
//         "dark-green": '#448F30',
//         "light-green": '#DEFAD4',
//         "grey-green": '#92ab89',
//         "green-shaded": '#6cbd4f',
//         "very-light-green": '#84bf71',
//         "parrot-green": '#67FE33',
//         "remove-red": '#eb4034',
//         "card-green": '#F2FFED',
//         "gray-color": '#cccccc'
//       },
//       fontFamily: {
//         'clash': ['"Clash Display"', 'sans-serif']
//       },
//       boxShadow: {
//         '3xl': '#000000',
//       }
//     },
//   },
//   plugins: [],
// }

/**
 * 
 /** 
  
 
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
        "gray-color": '#cccccc'
      },
      fontFamily: {
        'clash': ['"Clash Display"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'nunito': ['"Nunito"', 'sans-serif']
      },
      boxShadow: {
        'custom': 'shadow-custom shadow-lg',
      },
      lineHeight: {
        'custom': '67.2px',
      },
      borderRadius: {
        'custom': '32px',
      },
    },
  },
  plugins: [],
}
