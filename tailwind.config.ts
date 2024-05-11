import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pressStart: ['var(--font-press-start)'],
        openSans: ['var(--font-open-sans)']
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        lightGray: '#BCBBBB',
        gray: '#525252',
        drakGray: '#1D1D1D',
        green: '#149414',
      },
    },
  },
  plugins: [],
};
export default config;
