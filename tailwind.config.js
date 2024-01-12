/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            "login-bg": "url('/src/assets/bg.jpg')"
        }
    },
  },
  darkMode: 'class',
  plugins: [],
}

