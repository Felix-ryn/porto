import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        // Standard spacing scale
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
        40: "160px",
      },
      colors: {
        // Dark theme palette
        bg: {
          primary: "#0B1220",
          secondary: "#101D32",
          card: "#14243D",
        },
        blue: {
          primary: "#3B82F6",
          light: "#60A5FA",
        },
        cyan: {
          accent: "#38BDF8",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
        },
        border: {
          custom: "#263B59",
        },
      },
      fontSize: {
        // Typography scale
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "44px" }],
        "5xl": ["48px", { lineHeight: "56px" }],
        "6xl": ["60px", { lineHeight: "72px" }],
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
        "gradient-card": "linear-gradient(135deg, #14243D 0%, #101D32 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
