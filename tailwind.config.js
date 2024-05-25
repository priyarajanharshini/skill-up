/** @type {import('tailwindcss').Config} */
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
                'custom-gray': '#222222',
            },
            fontFamily: {
                'roboto': ['"roboto"'],
                'nunito': ['"nunito"'],
                'clash': ['"Clash Display"', 'sans-serif'],
                'arial': ['Arial', 'sans-serif'],
                'display': ['Oswald'],
                'body': ['"Open Sans"'],
                'outfit': ['Outfit', 'sans-serif'], 
                'sans': ['Outfit', 'ui-sans-serif', 'system-ui'],
            },
            boxShadow: {
                '3xl': '#000000',

                'custom': '0px 0px 16px 0px #C7C7C7',

            },
            lineHeigh: {
                "67.2px": "67.2px",
            }
        },
    },
    plugins: [],
}