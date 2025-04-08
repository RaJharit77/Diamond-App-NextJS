import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
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
  },
  plugins: [],
} satisfies Config;
