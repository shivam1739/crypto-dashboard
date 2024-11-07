/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        primary: '#3ba904',
        secondary: {
          DEFAULT: '#111111',
          light: '#2A2E43',
        },
        accent: '#3A3F54',
        white: {
          DEFAULT: '#FFFFFF',
          muted: '#EAEAEA',
          lite: '#f3f3f3',
          dark: '#eaeaea'
        },
        muted: '#C4C4C4',
        highlight: '#F0F0F0',
        success: '#37D399',
        danger: '#F56565',
        warning: '#F6AD55',
        gray_lite: '#1c1c1c',


      },
    },
  },
  plugins: [],
}

