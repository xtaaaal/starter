/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: '#E6E9F0',
        darkgray: '#595959',
        lightgray: '#F2F2F2',
        enabled: '#d7d7d7',
        outline: '#E6E9F0',
        'disabled-bg': '#EFF3FA',
        'disabled-text': '#707A89',
        'overlay-backdrop': 'rgba(0, 0, 0, 0.4)',
        lightblue: '#0BFFD5',
        navy: '#2B3D5D',
        pink: '#F61067',
        blue: '#3F7CFF',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
