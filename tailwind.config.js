/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonRed: '#ff073a', 
        /**neonRouge: '#ff0000',
        neonBleu: '#0000f',
        neonJaune: '#ffff33',*/
        bleuTurquoise: '#40E0D0',
        bleuDiamant: '#0EBFE9',
        corail: '#FF7F50',
        menthe: '#98FF98',
        pâle: '#FFFACD',
      },
    },
    plugins: [],
  }
}
