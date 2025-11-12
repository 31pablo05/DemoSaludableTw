/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#00332e',
        'primary-green': '#009345',
        'beige': '#f1e8d9',
        'green-medium': '#729072',
        'green-dark': '#106347',
      },
      fontFamily: {
        'sans': ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        'quicksand': ['Quicksand', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
