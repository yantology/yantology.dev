import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        back: {
          DEFAULT: "#101010",
        },
        indigo: {
          DEFAULT: "#4e3dfd",
        },
        card: {
          DEFAULT: "#151515",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
