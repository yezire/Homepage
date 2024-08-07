import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      translate: {
        '1/6': '16.666667%',
      },
      colors:{
        'bgblack' : '#242020',
        'newsblue' : '#0385bc',
        'textyellow': '#f7ecd3',
        'myorange':'#e45d2c'
      }
    },
  },
  plugins: [],
};
export default config;
