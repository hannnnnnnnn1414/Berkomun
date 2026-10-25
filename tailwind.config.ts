import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF7EC",
          100: "#F5EEDF",
          200: "#EADFC6",
          300: "#D8C7A6",
          400: "#C2AC85",
          500: "#A68F68",
        },
        dark: {
          50: "#EFF3F0",
          100: "#DDE6DF",
          200: "#BCCFC2",
          300: "#93AE9C",
          400: "#6B8A76",
          500: "#54705F",
          600: "#486355",
          700: "#3E5F4D",
          800: "#334E40",
          900: "#2C4237",
          950: "#1D2D26",
        },
        orange: {
          50: "#EFF3F0",
          100: "#DDE6DF",
          200: "#BCCFC2",
          300: "#93AE9C",
          400: "#5F7D69",
          500: "#3E5F4D",
          600: "#365445",
          700: "#2E4A3B",
          800: "#273D31",
          900: "#1D2D26",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgba(26, 26, 26, 0.06), 0 1px 3px -1px rgba(26, 26, 26, 0.04)",
        card: "0 4px 16px -4px rgba(26, 26, 26, 0.08), 0 2px 6px -2px rgba(26, 26, 26, 0.05)",
        float: "0 12px 40px -12px rgba(26, 26, 26, 0.12), 0 4px 16px -4px rgba(26, 26, 26, 0.08)",
        "inner-soft": "inset 0 1px 2px 0 rgba(26, 26, 26, 0.05)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;