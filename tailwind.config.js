/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderDraw: {
          "0%": { borderColor: "transparent" },
          "25%": { borderTopColor: "#f59e42" },
          "50%": { borderRightColor: "#f59e42" },
          "75%": { borderBottomColor: "#f59e42" },
          "100%": { borderColor: "#f59e42" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        borderDraw: "borderDraw 1.2s ease forwards",
        shine: "shine 2s linear infinite",
        fadeIn: "fadeIn 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};
