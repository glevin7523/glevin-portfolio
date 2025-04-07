/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 2.5s infinite ease-in-out",
        wave: "wave 1.5s infinite", // ✅ Move wave animation here
        "border-shimmer": "shimmer 1.5s infinite linear",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(14deg)" },
          "50%": { transform: "rotate(-4deg)" },
          "60%": { transform: "rotate(10deg)" },
          "70%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        shimmer: {
          "0%": { borderColor: "#06b6d4" },
          "50%": { borderColor: "#ec4899" },
          "100%": { borderColor: "#06b6d4" },
        },
      },
      textShadow: {
        neon: "0 0 10px #00ffff, 0 0 20px #00ffffaa",
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 255, 255, 0.6)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(255,255,255,0.3)",
      },
      transformOrigin: {
        center: "center",
      },
    },
  },
  plugins: [],
};
