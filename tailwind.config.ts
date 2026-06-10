import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand — the strategic accent. Only for interactive elements,
        // hover/focus, caret, and the prominent footer branding plate.
        forest: {
          deep: "#8a1620",
          // Lighter red variant for use on dark backgrounds where
          // `forest-deep` would lack contrast (dark-mode accents/links).
          light: "#d75a64",
        },
        // Dark-mode page + surface tones (warm near-black, faintly green).
        ink: {
          DEFAULT: "#0b0c0b",
          surface: "#141614",
          raised: "#1b1d1b",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        serif: [
          "var(--font-playfair)",
          "Playfair Display",
          "Sabon",
          "Georgia",
          "serif",
        ],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      transitionTimingFunction: {
        // Editorial easing — long, soft, premium.
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
