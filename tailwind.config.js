/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Droid Arabic Kufi', 'serif'],
            },
            colors: {
                'primary': '#FF8A71',
                'secondary': '#F49867',
                'accent': '#AE67FA',
                'back': '#fff',
                'fore': '#040C18',
                'fore-neutral': '#031B34',
                'fore-light': '#81AFDD'
            },
        },
    },
    variants: {},
    plugins: [],
}
