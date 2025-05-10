import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors, // kế thừa toàn bộ màu mặc định của Tailwind
        textGray: "#71767b",
        textGrayLight: "#e7e9ea",
        textWhite: "#fff",
        textBlack: "#000",
        borderGray: "#2f3336",
        inputGray: "#202327",
        iconBlue: "#1d9bf0",
        iconGreen: "#00ba7c",
        iconPink: "#f91880",
      },
    },
    screens: {
      xsm: "500px",
      sm: "600px",
      md: "690px",
      lg: "988px",
      xl: "1078px",
      xxl: "1295px",
    },
  },
  plugins: [],
} satisfies Config;
