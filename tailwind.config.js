/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    darkMode: "class",
    content: ["./resources/**/*.blade.php", "./resources/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Quicksand"', ...defaultTheme.fontFamily.sans],
                sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
