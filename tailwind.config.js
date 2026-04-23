/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        esri: {
          blue: '#007ac2',
          dark: '#003c72',
          light: '#56a5d8',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        typewriter: ['Courier Prime', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
