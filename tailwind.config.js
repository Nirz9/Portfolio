/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
        mono:    ['monospace'],
      },
      colors: {
        bg:       '#f7f8f4',
        surface:  '#ffffff',
        ink:      '#171b17',
        muted:    '#697067',
        line:     '#dde2d8',
        accent:   '#d4f76a',
        dark:     '#101410',
        green: {
          50:  '#f3f9e8',
          100: '#e6f3d0',
          200: '#c9e49e',
          300: '#b0d56e',
          400: '#97c63f',
          500: '#7a9c37',
          600: '#658626',
          700: '#4f6337',
          800: '#3a4a28',
          900: '#253119',
        },
      },
      borderRadius: {
        DEFAULT: '24px',
        sm: '10px',
        md: '16px',
        lg: '22px',
        xl: '28px',
      },
      boxShadow: {
        card: '0 24px 70px rgba(21,37,20,0.06)',
        float: '0 15px 50px rgba(22,39,19,0.10)',
        nav: '0 8px 20px rgba(0,0,0,0.07)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        reveal: 'reveal 0.6s ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-9px)' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'none' },
        },
      },
    },
  },
  plugins: [],
}
