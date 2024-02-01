/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    darkMode: "class",
    content: [
        "./app/**/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "node_modules/preline/dist/*.js",
    ],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px",
        },
        extend: {
            fontFamily: {
                serif: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
                sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    50: "#fdf8f6",
                    100: "#f2e8e5",
                    200: "#eaddd7",
                    300: "#e0cec7",
                    400: "#d2bab0",
                    500: "#bfa094",
                    600: "#a18072",
                    700: "#977669",
                    800: "#846358",
                    900: "#43302b",
                },
                secondary: {
                    50: "#fdf8f6",
                    100: "#f2e8e5",
                    200: "#eaddd7",
                    300: "#e0cec7",
                    400: "#d2bab0",
                    500: "#bfa094",
                    600: "#a18072",
                    700: "#977669",
                    800: "#846358",
                    900: "#43302b",
                },
            },
        },
    },
    plugins: [require("preline/plugin")],
};
