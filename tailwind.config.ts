import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#006A4E",
          dark: "#04402F",
          light: "#E1F0EA",
        },
        secondary: {
          DEFAULT: "#F42A41",
          light: "#FDE7E9",
        },
        ink: "#0F172A",
        muted: "#64748B",
        gold: "#C9A227",
        surface: "#FFFFFF",
        page: "#F8FAFC",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        bangla: ["Noto Sans Bengali", "Inter", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 20px 40px -20px rgba(4, 64, 47, 0.18)",
        card: "0 1px 2px rgba(15, 23, 42, 0.04)",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(230px)" },
        },
        stampIn: {
          "0%": { transform: "rotate(-12deg) scale(0)", opacity: "0" },
          "100%": { transform: "rotate(-12deg) scale(1)", opacity: "1" },
        },
      },
      animation: {
        scanline: "scanline 2.6s linear infinite alternate",
        stampIn: "stampIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
