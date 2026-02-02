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
        forest: {
          50: '#f0f7f4',
          100: '#dceee5',
          200: '#badccb',
          300: '#8fc3aa',
          400: '#62a585',
          500: '#44876a',
          600: '#2f6b52',
          700: '#275543',
          800: '#214437',
          900: '#1c382e',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
