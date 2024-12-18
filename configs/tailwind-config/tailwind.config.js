/** @type {import('tailwindcss').Config} */
const config = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#1E6F9F',
        'primary-1': '#249ae0',
        secondary: '#ffed4a',
        todo: '#4EA8DE',
        check: '#5E60CE',
        complete: '#8284FA',
        black: '#0D0D0D',
        grey: '#1A1A1A',
        'grey-1': '#808080',
        'grey-2': '#262626',
        white: '#F2F2F2',
        badge: '#D9D9D9',
        border: '#333333'
      },
      width: {
        184: '736px'
      },
      height: {
        13: '52px',
        50: '200px'
      },
      lineHeight: {
        '3.5': '14px',
        '4.25': '17px',
        '5.5': '22px',
      },
      margin: {
        '6.5': '26px',
      },
      fontSize: {
        '4.5xl': '40px'
      },
      boxShadow: {
        'todo-item': '0px 2px 8px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}
export default config
