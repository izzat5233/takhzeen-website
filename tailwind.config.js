/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            minWidth: {
                '210': '210px',
            },
            fontFamily: {
                'sans': ['Droid Arabic Kufi', 'serif'], /* default font */
                'cursive': []
            },
            colors: {
                'primary': '#ff684c',
                'secondary': '#F49867',
                'primary-reddish': '#FD6D68FF',
                'strong': '#FF4820',
                'accent1': '#EFCA08',
                'accent2': '#72A1E5',
                'accent3': '#AE67FA',
                'accent4': '#62C370',
                'back': '#fff',
                'fore': '#040C18',
                'fore-neutral': '#031B34',
                'fore-light': '#81AFDD'
            },
            backgroundImage: theme => ({
                'gradient-orange-blue': 'linear-gradient(90deg, #AE67FA 1.84%, #F49867 102.67%)',
                'gradient-accent1': 'linear-gradient(90deg, #EFCA08 1.84%, #F49867 102.67%)',
                'gradient-accent2': 'linear-gradient(90deg, #72A1E5 1.84%, #F49867 102.67%)',
                'gradient-green': 'linear-gradient(109.6deg, rgb(170, 255, 169) 11.2%, rgb(17, 255, 189) 91.1%)',
                'gradient-orange': 'radial-gradient(929px at 0.6% 1.3%, rgb(248, 251, 10) 0%, rgb(248, 47, 47) 82.6%)',
                'gradient-primary': 'linear-gradient(103.3deg, #ff684c 7.7%, rgb(248, 150, 105) 90.8%)'
            })
        },
    },
    variants: {},
    plugins: [],
}
