/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
    keyframes: {
      jelly: {
        "0%": { transform: "scale(1)" },
        "100%": { transform: "scale(0.95, 1.05)" },
      },
    },
    animation: {
      jelly: "jelly 1s ease-in-out infinite",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
