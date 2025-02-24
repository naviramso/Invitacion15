import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        geistSans: ["var(--font-geist-sans)", "sans-serif"],
        geistMono: ["var(--font-geist-mono)", "monospace"],
        montserrat: ["montserrat", "sans-serif"],
        norican: ["norican", "serif"],
        sourceSerif4: ['sourceSerif4', 'serif'],
        leagueScript: ['league Script', 'cursive'],
      },  

    },
  },
  plugins: [],
} satisfies Config;
