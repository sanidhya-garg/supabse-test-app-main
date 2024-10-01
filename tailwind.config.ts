import type { Config } from "tailwindcss";

const config: Config = {
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
        whitte:"#ffff",
        purple:"#392b85",
        ourGreen:"#18d26e",
        hoverGreen:"#35e888",
        gray:"rgba(204, 204, 204, 0.1)"
      },
      fontFamily:{
        syne:["Syne", "sans-serif"]
      }

    },
  },
  plugins: [],
};
export default config;
