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
        primary: '#4a90e2',
        secondary: '#d1d5db',
        darkBackground: '#1a202c',
        darkForeground: '#cbd5e0',
      },
    },
  },
  plugins: [],
};
export default config;
