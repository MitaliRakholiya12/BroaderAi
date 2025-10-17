/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5e35b1',
        secondary: '#7c4dff',
        dark: '#333333',
        light: '#f8f9fa'
      },
      fontFamily: {
        sans: ['Poppins', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}