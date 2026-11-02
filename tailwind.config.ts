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
        ivoire: {
          DEFAULT: "#F6F4EF",
          dark: "#EFECE3",
        },
        "blanc-chaud": "#FFFEFB",
        encre: {
          DEFAULT: "#19272A",
          light: "#4A585A",
          muted: "#788688",
        },
        "vert-profond": {
          DEFAULT: "#173E3F",
          hover: "#1D4E50",
          light: "#265A5C",
          subtle: "#EBF1F1",
        },
        cuivre: {
          DEFAULT: "#A65C37",
          hover: "#8F4D2C",
          light: "#F7EFEA",
          border: "#D9C4B7",
        },
        sable: {
          DEFAULT: "#EDEAE2",
          border: "#E2DDD2",
        },
      },
      fontFamily: {
        sans: ["var(--font-dmsans)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      transitionTimingFunction: {
        "ease-out-custom": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        fast: "180ms",
        base: "320ms",
        reveal: "700ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
