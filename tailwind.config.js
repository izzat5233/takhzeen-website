/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Droid Arabic Kufi', 'serif'], /* default font */
                'cursive': []
            },
            colors: {
                'primary': '#ff684c',
                'secondary': '#F49867',
                'accent': '#AE67FA',
                'back': '#fff',
                'fore': '#040C18',
                'fore-neutral': '#031B34',
                'fore-light': '#81AFDD'
            },
            backgroundImage: theme => ({
                'gradient-primary': 'linear-gradient(90deg, #AE67FA 1.84%, #F49867 102.67%)',
            })
        },
    },
    variants: {},
    plugins: [],
}
